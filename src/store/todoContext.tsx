import React, { useState } from "react";
import Todo from "../models/todo";

type TodoContextObj = {
  items: Todo[];
  addTodo: (test: string) => void;
  removeItem: (id: string) => void;
};
export const TodoContext = React.createContext<TodoContextObj>({
  items: [],
  addTodo: (text: string) => {},
  removeItem: (id: string) => {},
});

interface Props {
  children: React.ReactNode;
}

const TodosContextProvider: React.FC<Props> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newTodo = new Todo(text);

    setTodos((prevTodo) => {
      return prevTodo.concat(newTodo);
    });
  };

  const removeTodo = (todoId: string) => {
    setTodos((prevState) => {
      return prevState.filter((todo) => todo.id !== todoId);
    });
  };

  const contextValue: TodoContextObj = {
    items: todos,
    addTodo,
    removeItem: removeTodo,
  };
  return (
    <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
  );
};

export default TodosContextProvider;
