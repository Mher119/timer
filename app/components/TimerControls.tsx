"use client";

import { Dispatch, SetStateAction } from "react";

type Props = {
  running: boolean;
  setRunning: Dispatch<SetStateAction<boolean>>;
  setWorkTime: Dispatch<SetStateAction<number>>;
  setBreakTime: Dispatch<SetStateAction<number>>;
  onReset: () => void;
  secondsLeft: number;
  mode: "work" | "break";
  workTime: number;
  breakTime: number;
  setSecondsLeft: Dispatch<SetStateAction<number>>;
  playSound: () => void;
  setMode: Dispatch<SetStateAction<"work" | "break">>;
};

export default function TimerControls({
  running,
  setRunning,
  setWorkTime,
  setBreakTime,
  onReset,
  secondsLeft,
//   mode,
  workTime,
//   breakTime,
  setSecondsLeft,
  playSound,
  setMode,
}: Props) {
  return (
    <div className="flex flex-col gap-3">
      {/* Inputs */}
      <div className="flex gap-2 mb-2 flex-wrap">
        <input
          type="number"
          placeholder="Work (sec)"
          className="border rounded flex-1 py-2 px-4 text-center"
          disabled={running}
          onChange={e => setWorkTime(+e.target.value)}
        />
        <input
          type="number"
          placeholder="Break (sec)"
          className="border rounded flex-1 py-2 px-4 text-center"
          disabled={running}
          onChange={e => setBreakTime(+e.target.value)}
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-2 flex-wrap">
        <button
          onClick={() => {
            if (!running && secondsLeft === 0) {
              setMode("work");          // immediately green
              setSecondsLeft(workTime); // start countdown
              playSound();              // play sound immediately
            }
            setRunning(r => !r);
          }}
          className="bg-black text-white py-2 px-4 rounded flex-1"
        >
          {running ? "Pause" : "Start"}
        </button>

        <button
          onClick={onReset}
          className="bg-gray-300 py-2 px-4 rounded flex-1"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

