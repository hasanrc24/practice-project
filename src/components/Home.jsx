import React, { useState } from 'react'
 import {IoIosSend} from 'react-icons/io'
 import {MdDelete} from 'react-icons/md';
import {FiEdit} from 'react-icons/fi';
import {BiSave} from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { useAddTodoMutation, useDeleteTodoMutation, useGetTodosQuery, useUpdateTodoMutation } from '../Redux/api/apiSlice';


const Home = () => {
  const [todo, setTodo] = useState('');
  const [edit, setEdit] = useState(false);
  const [toEdit, setToEdit] = useState({});

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
  const handleEdit = (curTodo) => {
    setEdit(true);
    setTodo(curTodo.title);
    setToEdit(curTodo);
  }
  const handleEditSubmit = () => {
    updateTodo({...toEdit, title: todo});
    setEdit(false);
    setTodo('');
    setToEdit();
  }

  let content;
  if(isLoading){
    content = <p>Loading...</p>
  }
  else if(isError){
    content = <p>{error?.error}</p>
  }
  return (
    <div className='h-[82%] w-[75%] md:w-[50%] lg:w-[35%] shadow-2xl bg-gray-300 rounded-lg '>
        <p className='text-center mt-4 text-xl'>Todo List</p>
      <div className="p-4">
        <form className="w-full mb-4 flex items-center" >
          <input type="text" name="todo" value={todo} onChange={(e) => setTodo(e.target.value)} className='w-full p-2 outline-none border-b-2 border-b-gray-600 focus:border-b-purple-600' placeholder='Enter your task' />
          {edit ? <button type='button' onClick={handleEditSubmit} className='ml-2 p-2 text-2xl bg-indigo-300'><BiSave /></button> : <button type='button' onClick={handleSubmit} className='ml-2 p-2 text-2xl bg-indigo-300'><IoIosSend /></button>}
        </form>
        <div className="h-[250px] overflow-auto overflow-x-hidden scrollbar">
          {
            isSuccess ? todos?.map((curTodo) => {
              return !curTodo.completed && <div key={curTodo.id} className="flex justify-between bg-slate-400 mb-1 p-2">
              <input type="checkbox" checked={curTodo.completed} name="check" onChange={() => updateTodo({...curTodo, completed: !curTodo.completed })} className='m-2 p-4 h-4 w-4' />
              <p>{curTodo.title}</p>
              <div className="flex align-center gap-2">
                <button className='text-cl' onClick={()=>handleEdit(curTodo)}><FiEdit /></button>
                <button className='text-xl' onClick={() => handleDeleteTodo(curTodo.id)}> <MdDelete /></button>
              </div>
              </div>
            }) : content
          }
          {
            todos?.length === 0 ? <p>No todos</p> : todos?.every(todo => todo.completed) && <p>No uncompleted todo left!!</p>
          }
        </div>
          <div className=" mt-4 text-center py-4 rounded-lg border-dashed border-2 border-sky-500">
            Drag your todo here.
          </div>
        <div className="py-4">
          <button onClick={handleClear} className='py-2 px-7 rounded-md text-white mx-auto bg-sky-800 mr-2'>Clear</button>
          <Link to="/done" className='py-2 px-5 rounded-md text-white mx-auto bg-purple-600'>Completed</Link>
        </div>
        </div>
    </div>
  )
}

export default Home