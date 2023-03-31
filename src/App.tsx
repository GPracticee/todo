import React, { useState } from "react";
import "./App.css";
import InputField from "./Components/InputField";
import { Todo } from "./model";
import Todolist from "./Components/TodoList"

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };
  console.log(todos);
  

  return (
    <div className="App">
      <span className="heading">Notes</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <Todolist todos={todos} setTodos={setTodos} />

    </div>
  );
};

export default App;
