import React from 'react';
import Link from 'next/link';
import { BiSolidFilePdf } from 'react-icons/bi';

const Pdf = ({ fileName }: { fileName: string }) => {
  return (
    <Link
      href="/Nano Master - AI Applications_Brochure.pdf"
      target="_blank"
      className="flex flex-col items-center gap-2"
    >
      <div className="text-red-600">
        <BiSolidFilePdf size={100} />
      </div>
      <p>{fileName}</p>
    </Link>
  );
};

export default Pdf;
