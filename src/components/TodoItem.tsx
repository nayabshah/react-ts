import React from "react";

const TodoItem: React.FC<{ text: string; onRemoveTodo: () => void }> = ({
  text,
  onRemoveTodo,
}) => {
  return <li onClick={onRemoveTodo}>{text}</li>;
};

export default TodoItem;
