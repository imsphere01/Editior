import React from 'react';
import RepoCard from './RepoCard';

import Year from './Year';
const DATA = [
  {
    name: 'Notes',
    url: 'notes',
  },
  {
    name: 'Question papers',
    url: 'questions',
  },
  {
    name: 'Problems',
    url: 'problems',
  },
  {
    name: 'Syllabus',
    url: 'syllabus',
  },
];

const Repo = () => {
  return (
    <div className="flex flex-col gap-4 w-full">
      {DATA.map((item, index) => (
        <RepoCard name={item.name} url={item.url} />
      ))}
    </div>
  );
};

export default Repo;
