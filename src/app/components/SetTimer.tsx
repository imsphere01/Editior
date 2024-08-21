'use client';
import { useState } from 'react';

interface SetTimerProps {
  onSetTimer: (minutes: number, seconds: number) => void;
}

const SetTimer: React.FC<SetTimerProps> = ({ onSetTimer }) => {
  const [minutes, setMinutes] = useState<number>(25);
  const [seconds, setSeconds] = useState<number>(0);

  const handleSetTimer = () => {
    onSetTimer(minutes, seconds);
  };

  return (
    <div className="text-center">
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-900">
          Set Timer
        </label>
        <input
          type="number"
          value={minutes}
          onChange={(e) => setMinutes(Number(e.target.value))}
          className="p-2 border rounded mr-2"
          placeholder="Minutes"
          min={0}
        />
        <input
          type="number"
          value={seconds}
          onChange={(e) => setSeconds(Number(e.target.value))}
          className="p-2 border rounded"
          placeholder="Seconds"
          min={0}
          max={59}
        />
      </div>
      <button
        onClick={handleSetTimer}
        className="bg-green-500 text-white p-2 rounded"
      >
        Start Timer
      </button>
    </div>
  );
};

export default SetTimer;
