import React, { useState } from 'react';
import Link from 'next/link';
import Folder from './Folder';
import { IoClose } from 'react-icons/io5';
import { FiUpload } from 'react-icons/fi';

const FOLDERS = [
  {
    name: 'CS',
  },
  {
    name: 'IT',
  },
  {
    name: 'Math',
  },
  {
    name: 'Desgin',
  },
  {
    name: 'Lab',
  },
];

type SetActiveSelectionType = (value: boolean) => void;

const NewFile = ({
  setActiveSelection,
}: {
  setActiveSelection: SetActiveSelectionType;
}) => {
  return (
    <div className="flex items-center justify-center w-full h-full  absolute top-0 left-0">
      <div className="absolute w-5/6 h-5/6 z-10 p-4 border-[1px] border-slate-100 rounded-xl">
        <div className="w-full h-full backdrop-blur-xl p-4 rounded-xl bg-[rgba(0,0,0,0.6)]">
          <button
            className="absolute top-0 right-0"
            onClick={() => setActiveSelection(false)}
          >
            <IoClose
              size={45}
              className="rounded-full text-white p-2 transition-all "
            />
          </button>
          <div className="flex justify-around gap-4 items-center p-4 h-full">
            <Link
              href="/textEditor"
              className="flex items-center flex-col gap-4"
            >
              <div className="flex rounded-xl items-center justify-center border-[1px] border-dashed h-[250px] w-[300px] text-xl">
                +
              </div>
              <p>Create New File</p>
            </Link>
            <button className="flex items-center flex-col gap-4">
              <div className="flex items-center rounded-xl justify-center border-[1px] border-dashed h-[250px] w-[300px] text-xl">
                <FiUpload />
              </div>
              <p>Upload File</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const StorageContainer = () => {
  const [activeSelection, setActiveSelection] = useState(false);
  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="flex justify-between text-2xl">
        <p className="">Notes</p>
        <button
          onClick={() => setActiveSelection(true)}
          className="px-3 py-2 rounded-lg bg-orange-600 text-white"
        >
          +
        </button>
      </div>
      {activeSelection && <NewFile setActiveSelection={setActiveSelection} />}
      <div className="folderContainer grid grid-rows-1 overflow-x-scroll scroll-smooth grid-flow-col justify-between w-full">
        {FOLDERS.map((item, index) => (
          <Folder folderName={item.name} key={index} />
        ))}
      </div>
    </div>
  );
};

export default StorageContainer;
