import { Block, BlockNoteEditor, PartialBlock } from "@blocknote/core";
import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useEffect, useMemo, useState } from "react";

async function saveToStorage(jsonBlocks: Block[]) {
  if (typeof window !== 'undefined') {
    localStorage.setItem("editorContent", JSON.stringify(jsonBlocks));
  }
}

async function loadFromStorage(): Promise<PartialBlock[] | undefined> {
  if (typeof window !== 'undefined') {
    const storageString = localStorage.getItem("editorContent");
    return storageString ? JSON.parse(storageString) as PartialBlock[] : undefined;
  }
  return undefined;
}

export default function Home() {
  const [initialContent, setInitialContent] = useState<PartialBlock[] | undefined | "loading">("loading");

  useEffect(() => {
    loadFromStorage().then((content) => {
      setInitialContent(content);
    });
  }, []);

  const editor = useMemo(() => {
    if (initialContent === "loading") {
      return undefined;
    }
    return BlockNoteEditor.create({ initialContent });
  }, [initialContent]);

  if (editor === undefined) {
    return <div>Loading content...</div>;
  }

  return (
    <BlockNoteView
      editor={editor}
      onChange={() => {
        saveToStorage(editor.document as Block[]);
      }}
    />
  );
}
