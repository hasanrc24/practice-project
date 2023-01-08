import React from 'react'
 import {IoIosSend} from 'react-icons/io'
 import {MdDelete} from 'react-icons/md'

const Home = () => {
  return (
    <div className='h-[80%] w-[60%] md:w-[30%] shadow-2xl bg-gray-300 rounded-lg '>
        <p className='text-center mt-4 text-xl'>Todo List</p>
      <div className="p-4">
        <div className="w-full mb-4 flex items-center">
          <input type="text" name="todo" className='w-full p-2 outline-none border-b-2 border-b-gray-600 focus:border-b-purple-600' placeholder='Enter your task' />
          <button className='ml-2 p-2 text-2xl bg-indigo-300'><IoIosSend /></button>
        </div>
        <div className="flex justify-between bg-slate-400 my-1 p-2">
          <input type="checkbox" name="check" className='m-2 p-4 h-4 w-4' />
          <p>Lorem ipsum asdjfhad fashdfa sdfh as</p>
          <button className='text-xl'> <MdDelete /></button>
        </div>
        <div className="flex justify-between bg-slate-400 my-1 p-2">
          <input type="checkbox" name="check" className='m-2 p-4 h-4 w-4' />
          <p>Lorem ipsum</p>
          <button className='text-xl'> <MdDelete /></button>
        </div>
        <div className="text-center mx-auto mt-4">

      <button className='py-2 px-7 rounded-md text-white bg-sky-800'>Clear</button>
        </div>
      </div>
    </div>
  )
}

export default Home