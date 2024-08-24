import React, { useContext } from 'react';
import Link from 'next/link';
import { IoIosDocument } from 'react-icons/io';
import { useRouter } from 'next/navigation';
import { NotesCon } from '../providers/NotesProvider';

const Notes = ({ fileName }: { fileName: string }) => {
  const router = useRouter();
  const { setCurrentNotes } = useContext(NotesCon);
  return (
    <button
      onClick={() => {
        setCurrentNotes(fileName);
        router.push('/textEditor');
      }}
      className="flex flex-col items-center gap-2"
    >
      <div className="text-yellow-500">
        <IoIosDocument size={100} />
      </div>
      <p>{fileName}</p>
    </button>
  );
};

export default Notes;
