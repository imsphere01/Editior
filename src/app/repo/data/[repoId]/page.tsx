// 'use client';
import React from 'react';
import Navbar from '@/app/components/Navbar';
import FileContainer from '@/app/components/FileContainer';

const page = () => {
  return (
    <div className="w-full max-w-7xl">
      <Navbar />
      <FileContainer />
    </div>
  );
};

export default page;
