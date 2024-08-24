'use client';
import { useState, useEffect } from 'react';
import { FaPlay } from 'react-icons/fa';
import { IoMdAdd } from 'react-icons/io';

const Timer: React.FC = () => {
  const [seconds, setSeconds] = useState<number>(1500);
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      if (interval) clearInterval(interval);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, seconds]);

  const toggle = () => {
    setIsActive(!isActive);
  };

  const reset = () => {
    setSeconds(1500);
    setIsActive(false);
  };

  return (
    <div className="text-center relative rounded-xl border-[1px] border-[#f7eee3]">
      <div className="text-[10rem] text-[#F7EEE3]">
        {`${Math.floor(seconds / 60)}:${seconds % 60 < 10 ? '0' : ''}${
          seconds % 60
        }`}
      </div>
      <div className="px-10 flex justify-center">
        <button
          className=" text-[#F7EEE3] text-[1.5rem] p-2 rounded mr-2 hover: decoration-solid "
          onClick={toggle}
        >
          <div className="p-3 rounded-full bg-white text-orange-600">
            <FaPlay size={20} />
          </div>
          {/* {isActive ? 'Pause' : 'Play'} */}
        </button>
        <button
          className="text-[#F7EEE3] text-[1.5rem] p-2 rounded"
          onClick={reset}
        >
          <div className="p-2 rounded-full text-white bg-orange-600">
            <IoMdAdd size={30} />
          </div>
          {/* Reset */}
        </button>
      </div>
    </div>
  );
};

export default Timer;
