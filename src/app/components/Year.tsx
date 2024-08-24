import React from 'react';
import Link from 'next/link';

const Year = () => {
  return (
    <nav className=" py-5">
      <div className="items-center flex">
        <ul className="inline-flex flex-row  items-center  mx-auto   py-2.5 px-1   rounded-full border text-[#F7EEE3] text-[1.2rem] font-medium">
          <li className="px-8">
            <Link
              href="/com"
              className=" rounded-full px-4 py-2 bg-[#F7EEE3] text-[#0c0c0c]"
            >
              <button>1 Year</button>
            </Link>
          </li>

          <li className="px-8">
            <Link href="/repo/data/sub">
              <button>2 Year</button>
            </Link>
          </li>

          <li className="px-8">
            <Link href="/repo/data/sub">
              <button>3 Year</button>
            </Link>
          </li>

          <li className="px-8">
            <Link href="/repo/data/sub">
              <button>4 Year</button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Year;
