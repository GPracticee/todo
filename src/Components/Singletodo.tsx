import React from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { Todo } from "../model";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const Singletodo = ({ todo, todos, setTodos }: Props) => {
  return <form className="todos_single"> 
<span className="todos_single_text">{todo.todo}</span>
<div>
    <span className="icon" ><AiFillEdit /></span>
    <span className="icon" ><AiFillDelete /></span>
    <span className="icon" ><MdDone /></span>
</div>
  </form>
};

export default Singletodo;