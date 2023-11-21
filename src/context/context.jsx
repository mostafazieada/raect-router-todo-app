import { useState, createContext, useEffect, useReducer } from "react";
import { nanoid } from "nanoid"; // library to generate random id
// ========================================================

//* initial data to consume
import TodoList from "../../data.json";

export const todoListContext = createContext(null);
// turn the local storage key's name into a variable to avoid typo
const LOCAL_STORAGE_DARK_MODE_KEY = "dark-mode";

export default function Context({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check local storage for dark mode preference when page loads
  useEffect(() => {
    const storedDarkMode = localStorage.getItem(LOCAL_STORAGE_DARK_MODE_KEY);
    if (storedDarkMode) {
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

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      //clone the previous state and make changes to
      const newDarkMode = !prev;

      localStorage.setItem(LOCAL_STORAGE_DARK_MODE_KEY, newDarkMode);
      return newDarkMode;
    });
  };

  const addTodo = (title, isComplete) => {
    setAllTodos((prevTodos) => {
      let newTodo = { id: nanoid(5), title, isComplete };
      let updatedTodos = [newTodo, ...prevTodos];
      return updatedTodos;
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
