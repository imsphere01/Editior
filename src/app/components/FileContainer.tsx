'use client';
import React, { useState, useContext } from 'react';
import Link from 'next/link';
import Folder from './Folder';
import { IoClose } from 'react-icons/io5';
import { FiUpload } from 'react-icons/fi';
import Pdf from './Pdf';
import { useRouter } from 'next/navigation';
import { NotesCon } from '../providers/NotesProvider';
import Notes from './Notes';

// const FOLDERS = ;

type SetActiveSelectionType = (value: boolean) => void;

const NewFile = ({
  setActiveSelection,
}: {
  setActiveSelection: SetActiveSelectionType;
}) => {
  const { notesCount, setNotesCount, currentNotes, setCurrentNotes } =
    useContext(NotesCon);
  const router = useRouter();
  const handlePush = () => {
    router.push('/textEditor');
  };
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
            <button
              // href="/textEditor"
              onClick={() => {
                setNotesCount(notesCount + 1);
                setCurrentNotes(`notes${notesCount + 1}`);
                handlePush();
              }}
              className="flex items-center flex-col gap-4"
            >
              <div className="flex rounded-xl items-center justify-center border-[1px] border-dashed h-[250px] w-[300px] text-xl">
                +
              </div>
              <p>Create New File</p>
            </button>
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

const FileContainer = () => {
  const [files, setFiles] = useState([
    {
      name: 'CS',
      type: 'pdf',
    },
    {
      name: 'IT',
      type: 'pdf',
    },
    {
      name: 'Math',
      type: 'pdf',
    },
    {
      name: 'Desgin',
      type: 'pdf',
    },
    {
      name: 'Lab',
      type: 'pdf',
    },
    {
      name: 'notes1',
      type: 'notes',
    },
  ]);

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
        {files.map((item, index) => {
          return item.type === 'pdf' ? (
            <Pdf fileName={item.name} key={index} />
          ) : (
            <Notes fileName={item.name} key={index} />
          );
        })}
      </div>
    </div>
  );
};

export default FileContainer;
