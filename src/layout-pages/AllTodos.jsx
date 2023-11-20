import { useContext } from "react";

import { todoListContext } from "../context/context";
import TodoItem from "../components/todo-items/TodoItem";
import EmptyItem from "../components/todo-items/empty-item";
import InfoItem from "../components/todo-items/InfoItem";

export default function AllTodos() {
  const { allTodos } = useContext(todoListContext);

  if (allTodos.length <= 0) {
    return <EmptyItem />;
  }

  return (
    <>
      {allTodos.map((todo) => {
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
