import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoContext } from "../store/todoContext";

const Todos: React.FC = () => {
  const todosCtx = useContext(TodoContext);
  return (
    <div>
      {todosCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={todosCtx.removeItem.bind(null, item.id)}
        />
      ))}
    </div>
  );
};

export default Todos;
