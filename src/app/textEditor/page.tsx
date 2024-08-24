'use client';
import React, { useContext } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import dynamic from 'next/dynamic';
import { useMemo } from 'react';
import { NotesCon } from '../providers/NotesProvider';

type TextContent = {
  type: 'text';
  text: string;
  styles: Record<string, unknown>;
};

type HeadingProps = {
  textColor: string;
  backgroundColor: string;
  textAlignment: 'left' | 'center' | 'right';
  level: 1 | 2 | 3 | 4 | 5 | 6;
};

type ParagraphProps = {
  textColor: string;
  backgroundColor: string;
  textAlignment: 'left' | 'center' | 'right';
};

type Node = {
  id: string;
  type: 'heading' | 'paragraph';
  props: HeadingProps | ParagraphProps;
  content: TextContent[];
  children: Node[];
};

let Sample: Node[] = [
  {
    id: 'b3cbd322-646c-4ff7-b489-e402f33d7d66',
    type: 'heading',
    props: {
      textColor: 'default',
      backgroundColor: 'default',
      textAlignment: 'left',
      level: 1,
    },
    content: [
      {
        type: 'text',
        text: 'Kalyan',
        styles: {},
      },
    ],
    children: [],
  },
  {
    id: 'cad705bc-a87e-42c5-8bf8-642b2111d527',
    type: 'heading',
    props: {
      textColor: 'default',
      backgroundColor: 'default',
      textAlignment: 'left',
      level: 2,
    },
    content: [
      {
        type: 'text',
        text: 'Welcome to the editor trail',
        styles: {},
      },
    ],
    children: [],
  },
  {
    id: '7ef80297-ed28-45f2-b6ce-3138f8ce78ae',
    type: 'paragraph',
    props: {
      textColor: 'default',
      backgroundColor: 'default',
      textAlignment: 'left',
    },
    content: [],
    children: [],
  },
];

const page = () => {
  const Editor = useMemo(
    () => dynamic(() => import('@/app/components/Editior'), { ssr: false }),
    []
  );

  const { notesCount, setNotesCount, currentNotes, setCurrentNotes } =
    useContext(NotesCon);

  let Content = localStorage.getItem(currentNotes);
  console.log(Content);
  return (
    <main className="min-h-screen w-screen bg-[#0c0c0c]">
      <div className="flex flex-col px-24 py-10 w-full h-screen">
        {/* <TextareaAutosize
              placeholder=" Title"
              className="w-full resize-none overflow-hidden appearance-none text-6xl bg-[#0c0c0c] placeholder-[#7F7F7F] my-17"
            /> */}
        <Editor
          onChange={() => {}}
          initialContent={Content || undefined}
          // initialContent={JSON.stringify(Sample)}
          currentNotes={currentNotes}
        />
      </div>
    </main>
  );
};

export default page;
