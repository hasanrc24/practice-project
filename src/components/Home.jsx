import React, { useState } from 'react'
 import {IoIosSend} from 'react-icons/io'
 import {MdDelete} from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useAddTodoMutation, useDeleteTodoMutation, useGetTodosQuery, useUpdateTodoMutation } from '../Redux/api/apiSlice';


const Home = () => {
  const [todo, setTodo] = useState('');

  const {data:todos, isError, error, isLoading, isSuccess} = useGetTodosQuery();
  const [addTodo] = useAddTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();
  const [updateTodo] = useUpdateTodoMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({id: new Date().toString, title: todo, completed: false});
    setTodo('');
  }
  const handleDeleteTodo = (id) => {
    deleteTodo({id: id})
  }
  const handleClear = () => {
    todos.map(todo => {
      deleteTodo({id: todo.id});
    })
  }

  let content;
  if(isLoading){
    content = <p>Loading...</p>
  }
  else if(isError){
    content = <p>{error?.error}</p>
  }
  return (
    <div className='h-[80%] w-[60%] md:w-[30%] shadow-2xl bg-gray-300 rounded-lg '>
        <p className='text-center mt-4 text-xl'>Todo List</p>
      <div className="p-4">
        <form className="w-full mb-4 flex items-center" onSubmit={handleSubmit}>
          <input type="text" name="todo" value={todo} onChange={(e) => setTodo(e.target.value)} className='w-full p-2 outline-none border-b-2 border-b-gray-600 focus:border-b-purple-600' placeholder='Enter your task' />
          <button type='submit' className='ml-2 p-2 text-2xl bg-indigo-300'><IoIosSend /></button>
        </form>
        <div className="">
          {
            isSuccess ? todos?.map((curTodo) => {
              return !curTodo.completed && <div key={curTodo.id} className="flex justify-between bg-slate-400 my-1 p-2">
              <input type="checkbox" checked={curTodo.completed} name="check" onChange={() => updateTodo({...curTodo, completed: !curTodo.completed })} className='m-2 p-4 h-4 w-4' />
              <p>{curTodo.title}</p>
              <button className='text-xl' onClick={() => handleDeleteTodo(curTodo.id)}> <MdDelete /></button>
              </div>
            }) : content
          }
          {
            todos?.length === 0 ? <p>No todos</p> : todos?.every(todo => todo.completed) && <p>No uncompleted todo left!!</p>
          }
        </div>
        <div className="py-2">
          <button onClick={handleClear} className='py-2 px-7 rounded-md text-white mx-auto bg-sky-800 mr-2'>Clear</button>
          <Link to="/done" className='py-2 px-5 rounded-md text-white mx-auto bg-purple-600'>Completed</Link>
        </div>
        </div>
    </div>
  )
}

export default Home