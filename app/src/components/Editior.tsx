'use client'
import React from 'react'
import { Block, BlockNoteEditor, PartialBlock } from "@blocknote/core";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/core/fonts/inter.css";
import "@blocknote/mantine/style.css";
import { colors } from '@nextui-org/react';
import '../globals.css';



interface EditorProps {
  onChange: () => void;
  initialContent?: string;
  editable?: boolean;
}
async function saveToStorage(jsonBlocks: Block[]) {
  // Save contents to local storage. You might want to debounce this or replace
  // with a call to your API / database.
  localStorage.setItem("editorContent", JSON.stringify(jsonBlocks));
}

const Editor: React.FC<EditorProps> = ({
  onChange,
  initialContent,
  editable,
}) => {
  
  
    const editor: BlockNoteEditor = useCreateBlockNote({
    initialContent: initialContent ? (JSON.parse(initialContent) as PartialBlock[]) : undefined,
  });
  return (
    <div className='w-full h-full '>
      <BlockNoteView editor={editor} editable={editable} theme='dark'
            onChange={() => {
              saveToStorage(editor.document);
            }}
      data-theming-css-variables-demo  />
    </div>
  )
}

export default Editor;