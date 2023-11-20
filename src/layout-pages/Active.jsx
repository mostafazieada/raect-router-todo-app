import { useContext } from "react";

import { todoListContext } from "../context/context";
import TodoItem from "../components/todo-items/TodoItem";
import EmptyItem from "../components/todo-items/empty-item";

export default function Active() {
  const { activeTodos } = useContext(todoListContext);

  if (activeTodos.length <= 0) {
    return <EmptyItem />;
  }
  return (
    <>
      {activeTodos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            isComplete={todo.isComplete}
          />
        );
      })}
    </>
  );
}
