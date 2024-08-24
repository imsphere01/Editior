import React from 'react';
import Navbar from '../components/Navbar';
import Year from '../components/Year';
import Repo from '../components/Repo';
const page = () => {
  return (
    <div className="w-full max-w-7xl">
      <Navbar />
      <Year />
      <Repo />
    </div>
  );
};

export default page;
