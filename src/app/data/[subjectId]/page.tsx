'use client';
import React from 'react';
import { GetServerSideProps } from 'next';
import Navbar from '@/app/components/Navbar';

import StorageContainer from '@/app/components/StorageContainer';
import FileContainer from '@/app/components/FileContainer';
interface Params {
  subjectId: string; // Adjust the type based on your dynamic segment
}

const page = ({ params }: { params: Params }) => {
  return (
    <div className="w-full max-w-7xl">
      <div className="w-full max-w-7xl">
        <Navbar />
        <FileContainer />
      </div>
      {/* <h1>Page ID: {params.subjectId}</h1> */}
    </div>
  );
};

export default page;
