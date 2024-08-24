'use client';
import TextareaAutosize from 'react-textarea-autosize';
import dynamic from 'next/dynamic';
import { useMemo } from 'react';
import './globals.css';
import Navbar from './components/Navbar';
import StorageContainer from './components/StorageContainer';
import Timer from './components/Timer';
import Todo from './components/Todo';
import Group from './components/Group';

export default function Home() {
  return (
    <div className="w-full max-w-7xl">
      {/* <h1 className="absolute text-[10rem] font-bold top-5 left-5 opacity-10 -z-30 ">
        SPHERE
      </h1> */}
      <Navbar />
      {/* <StorageContainer /> */}
      <Group />
      <div className="-mt-12 grid grid-cols-2 gap-4">
        <Timer />
        <Todo />
      </div>
    </div>
  );
}
