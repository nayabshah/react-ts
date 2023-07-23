import React, { useRef, useContext } from "react";
import { TodoContext } from "../store/todoContext";

const NewTodo: React.FC = () => {
  const todoCtx = useContext(TodoContext);
  const todoText = useRef<HTMLInputElement>(null);
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const enteredText = todoText.current!.value;
    if (enteredText.trim().length === 0) {
      return;
    }
    todoCtx.addTodo(enteredText);
  };
  return (
    <form onSubmit={onSubmit}>
      <label>
        Todo Text <input type="text" ref={todoText} />
      </label>
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
