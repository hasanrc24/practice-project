import React from 'react'
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useDeleteTodoMutation, useGetTodosQuery, useUpdateTodoMutation } from '../Redux/api/apiSlice';

const Done = () => {
    const {data:todos, isError, error, isLoading, isSuccess} = useGetTodosQuery();
    const [updateTodo] = useUpdateTodoMutation();
    const [deleteTodo] = useDeleteTodoMutation();
    const handleDeleteTodo = (id) => {
        deleteTodo({id: id})
      }
    let content;
  if(isLoading){
    content = <p>Loading...</p>
  }
  else if(isError){
    content = <p>{error?.error}</p>
  }
  return (
    <div className='bg-gradient-to-r from-bg-left-gradient to-bg-right-gradient h-screen w-screen flex justify-center items-center'>
        <div className='h-[80%] w-[60%] md:w-[30%] shadow-2xl bg-gray-300 rounded-lg px-4'>
        <p className='text-center mt-4 text-xl'>Completed Todos</p>
        <div className="pb-4 mt-4">
              {
            isSuccess ? todos?.map((curTodo) => {
              return curTodo.completed && <div key={curTodo.id} className="flex justify-between bg-slate-400 my-1 p-2">
              <input type="checkbox" checked={curTodo.completed} name="check" onChange={() => updateTodo({...curTodo, completed: !curTodo.completed })} className='m-2 p-4 h-4 w-4' />
              <p>{curTodo.title}</p>
              <button className='text-xl' onClick={() => handleDeleteTodo(curTodo.id)}> <MdDelete /></button>
              </div>
            }) : content
          }
          {
            todos?.length === 0 && <p>No todos</p>
          }
        </div>
        <Link to="/" className='py-2 px-5 rounded-md text-white mx-auto bg-purple-600'>Home</Link>
        </div>
    </div>
  )
}

export default Done