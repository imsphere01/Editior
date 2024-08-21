'use client';
import TextareaAutosize from 'react-textarea-autosize';
import dynamic from 'next/dynamic';
import { useMemo } from 'react';

const page = () => {
  const Editor = useMemo(
    () => dynamic(() => import('@/app/components/Editior'), { ssr: false }),
    []
  );
  return (
    <main className="min-h-screen w-screen bg-[#0c0c0c]">
      <div className="flex flex-col px-24 py-10 w-full h-screen">
        {/* <TextareaAutosize
              placeholder=" Title"
              className="w-full resize-none overflow-hidden appearance-none text-6xl bg-[#0c0c0c] placeholder-[#7F7F7F] my-17"
            /> */}
        <Editor onChange={() => {}} />
      </div>
    </main>
  );
};

export default page;
