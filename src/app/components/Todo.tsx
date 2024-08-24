'use client';
import React, { useState, useEffect } from 'react';
import TodoCard from './TodoCard';
import { IoIosAdd } from 'react-icons/io';

// const TODO = [
//     {
//         title: 'Complete the task',
//         date: '8:30pm - Today'
//     },
//     {
//         title: 'Complete the task',
//         date: '8:30pm - Today'
//     },
// ]

const Todo = () => {
  const [todo, setTodo] = useState([
    {
      title: 'Complete the task',
      date: '8:30pm - Today',
      status: 'pending',
    },
    {
      title: 'Complete the task',
      date: '8:30pm - Today',
      status: 'completed',
    },
  ]);
  return (
    <div className="w-full h-full p-4 flex flex-col items-center rounded-xl border-[1px] border-gray-200">
      <div className="flex flex-col gap-2 w-full m-auto h-full">
        {todo.map((item, index) => (
          <TodoCard title={item.title} date={item.date} status={item.status} />
        ))}
      </div>
      <button
        onClick={() => {}}
        className="p-3 justify-self-end mx-3 bg-orange-600 rounded-full hover:shadow-xl"
      >
        <IoIosAdd size={30} />
      </button>
    </div>
  );
};

export default Todo;
