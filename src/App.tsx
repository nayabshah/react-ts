import TodosContextProvider from "./store/todoContext";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <TodosContextProvider>
      <div className="App">
        <NewTodo />
        <Todos />
      </div>
    </TodosContextProvider>
  );
}

export default App;
