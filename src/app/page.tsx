'use client';
import TextareaAutosize from 'react-textarea-autosize';
import dynamic from 'next/dynamic';
import { useMemo } from 'react';
import './globals.css';
import Navbar from './components/Navbar';
import StorageContainer from './components/StorageContainer';
import Timer from './components/Timer';

export default function Home() {
  return (
    <div className="w-full max-w-7xl">
      <Navbar />
      <StorageContainer />
      <div className="-mt-12 grid grid-cols-2">
        <Timer />
      </div>
    </div>
  );
}
