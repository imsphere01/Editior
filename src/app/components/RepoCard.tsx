import React from 'react';
import Link from 'next/link';
import { IoFolderOpen } from 'react-icons/io5';
import { MdArrowOutward } from 'react-icons/md';

const RepoCard = ({ name, url }: { name: string; url: string }) => {
  return (
    <Link
      href={`/repo/data/${url}`}
      className="flex w-full items-center justify-between p-4 border-[1px] border-white rounded-xl transition-all"
    >
      <div className="flex gap-4 items-center">
        <IoFolderOpen />
        <p>{name}</p>
      </div>
      <div className="">
        <MdArrowOutward />
      </div>
    </Link>
  );
};

export default RepoCard;
