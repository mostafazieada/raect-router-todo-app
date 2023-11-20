import { useContext } from "react";

import { todoListContext } from "../context/context";
import TodoItem from "../components/todo-items/TodoItem";
import EmptyItem from "../components/todo-items/empty-item";

export default function Complete() {
  const { completeTodos } = useContext(todoListContext);

  if (completeTodos.length <= 0) {
    return <EmptyItem />;
  }
  return (
    <>
      {completeTodos.map((todo) => {
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
