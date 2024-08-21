import React from 'react';
import Link from 'next/link';

const Tag = () => {
  return (
    <nav className=" py-5">
      <div className=" max-w-10svw mx-10 items-center flex">
        <ul className="inline-flex flex-row  items-center  mx-auto   py-2.5 px-3   rounded-full  text-[#F7EEE3] text-[1.2rem] font-medium">
          <li>
            <Link href="/com">
              <button className=" rounded-full px-8 py-2 bg-[#F7EEE3] text-[#0c0c0c]">
                All
              </button>
            </Link>
          </li>

          <li className="px-8">
            <Link href="/com">
              <button>Sort by date</button>
            </Link>
          </li>

          <li className="px-8">
            <Link href="/com">
              <button>Sort by week</button>
            </Link>
          </li>

          <li className="px-8">
            <Link href="/com">
              <button className="px-8">Sort by month</button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Tag;
