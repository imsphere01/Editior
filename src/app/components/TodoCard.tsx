import React from 'react';
import { IoCheckmarkSharp } from 'react-icons/io5';
interface TodoCardProps {
  title: string;
  date: string;
  status: string;
}

const TodoCard = ({ title, date, status }: TodoCardProps) => {
  return (
    <div className="flex gap-4 w-full">
      <div className="h-[50px] w-[50px] border-[1px] border-[#f7eee3] rounded-xl flex items-center justify-center text-orange-600">
        {status === 'completed' && <IoCheckmarkSharp size={30} />}
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-lg">{title}</p>
        <p className="text-sm">{date}</p>
      </div>
    </div>
  );
};

export default TodoCard;
