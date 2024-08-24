'use client';
import React, { useState, createContext, ReactNode } from 'react';

export const NotesCon = createContext<{
  notesCount: number;
  setNotesCount: React.Dispatch<React.SetStateAction<number>>;
  currentNotes: string;
  setCurrentNotes: React.Dispatch<React.SetStateAction<string>>;
}>({
  notesCount: 0,
  setNotesCount: () => {},
  currentNotes: 'notes0',
  setCurrentNotes: () => {},
});

const NotesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [notesCount, setNotesCount] = useState(0);
  const [currentNotes, setCurrentNotes] = useState('notes0');

  return (
    <NotesCon.Provider
      value={{ notesCount, setNotesCount, currentNotes, setCurrentNotes }}
    >
      {children}
    </NotesCon.Provider>
  );
};

export default NotesProvider;
