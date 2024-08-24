'use client';
import React from 'react';
import StorageContainer from './StorageContainer';

const Group = () => {
  return (
    <div className="overflow-hidden h-full w-full">
      <h1 className="text-[12rem] absolute z-0">
        <img src="Sphere.png" alt="" />
      </h1>
      <div className="relative z-10">
        <StorageContainer />
      </div>
    </div>
  );
};

export default Group;
