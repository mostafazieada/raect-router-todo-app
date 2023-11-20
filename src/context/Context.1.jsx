import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import TodoList from "../../data.json";
import { LOCAL_STORAGE_DARK_MODE_KEY, todoListContext } from "./context";

export default function Context({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check local storage for dark mode preference when page loads
  useEffect(() => {
    //check out if there is any property with name in local storage or not
    const storedDarkMode = localStorage.getItem(LOCAL_STORAGE_DARK_MODE_KEY);
    if (storedDarkMode) {
      //if it exist parse it, then set it to the dark mode state handler
      setIsDarkMode(JSON.parse(storedDarkMode));
    }
  }, []);

  useEffect(() => {
    //toggling "dark" class to the document according to dark mode state
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const [allTodos, setAllTodos] = useState(TodoList);

  const completeTodos = allTodos.filter((todo) => todo.isComplete === true);

  const activeTodos = allTodos.filter((todo) => todo.isComplete === false);

  const updateLocalStorage = (KEY, VALUE) => {
    // make it as a function not to "dry"
    localStorage.setItem(KEY, JSON.stringify(VALUE));
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      //clone the previous state and make changes to
      const newDarkMode = !prev;

      updateLocalStorage(LOCAL_STORAGE_DARK_MODE_KEY, newDarkMode);
      return newDarkMode;
    });
  };

  const addTodo = (title) => {
    setAllTodos((prevTodo) => {
      //!you shouldn't update the state directly to avoid side effects
      //*it's a great way clone the state first then update it like so ==>
      let newTodos = [
        { id: nanoid(5), title: title, isComplete: false },
        ...prevTodo,
      ];
      return newTodos;
    });
  };

  const deleteTodo = (id) => {
    setAllTodos((prev) => {
      let newTodos = prev.filter((item) => item.id !== id);
      return newTodos;
    });
  };

  const toggleComplete = (id) => {
    setAllTodos((prev) => {
      let newTodos = prev.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
      );
      return newTodos;
    });
  };

  const clearComplete = () => setAllTodos(activeTodos);

  return (
    <todoListContext.Provider
      value={{
        isDarkMode,
        toggleDarkMode,
        allTodos,
        activeTodos,
        completeTodos,
        addTodo,
        deleteTodo,
        toggleComplete,
        clearComplete,
      }}
    >
      {children}
    </todoListContext.Provider>
  );
}
