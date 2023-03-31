import React from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { Todo } from "../model";
import { useState, useRef, useEffect } from "react";
interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const Singletodo = ({ todo, todos, setTodos }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, seteditTodo] = useState<string>(todo.todo);
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };


  return (
    <form className="todos_single" onSubmit = {(e)=>handleEdit(e,todo.id)}>
      {edit ? (
        <input 
        value={editTodo}
        onChange={(e)=>seteditTodo(e.target.value)}
        className="todos_single_text"
        ref={inputRef} />
      ) : todo.isDone ? (
        <s className="todos_single_text">{todo.todo}</s>
      ) : (
        <span className="todos_single_text">{todo.todo}</span>
      )}
      <div>
      <span className="icon" onClick={()=>{
        if(!edit && !todo.isDone){
          setEdit(!edit)
        }
      }}>
          <AiFillEdit />
        </span>
        <span className="icon" onClick={()=> handleDelete(todo.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={()=> handleDone(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default Singletodo;
