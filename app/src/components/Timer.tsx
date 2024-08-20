'use client'
import { useState, useEffect } from 'react';

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
<div className="text-center py-5  relative z-10">



    <div className="px-10 flex justify-between">
        <button
          className=" text-[#F7EEE3] text-[1.5rem] p-2 rounded mr-2 hover: decoration-solid "
          onClick={toggle}
        >
          {isActive ? 'Pause' : 'Play'}
        </button>
        <button className=" text-[#F7EEE3] text-[1.5rem] p-2 rounded" onClick={reset}>
          Reset
        </button>

    </div>

      <div className="text-[10rem] text-[#F7EEE3] p-3">
        {`${Math.floor(seconds / 60)}:${seconds % 60 < 10 ? '0' : ''}${seconds % 60}`}
    </div>



</div>
  );
};

export default Timer;
