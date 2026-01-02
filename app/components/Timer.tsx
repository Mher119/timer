"use client";

import { useRef, useState, useEffect } from "react";
import TimerDisplay from "./TimerDisplay";
import TimerControls from "./TimerControls";

type Mode = "work" | "break";

export default function Timer() {
  const [workTime, setWorkTime] = useState(45);
  const [breakTime, setBreakTime] = useState(15);
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [mode, setMode] = useState<Mode>("work");
  const [running, setRunning] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playSound = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/referee-whistle-blow-gymnasium-6320.mp3");
    }
    audioRef.current.play().catch(err => console.log("Audio play blocked:", err));
  };

  const resetTimer = () => {
    setRunning(false);
    setMode("work");
    setSecondsLeft(0);
  };

  useEffect(() => {
    if (!running) return;

    const interval = setInterval(() => {
      setSecondsLeft(prev => {
        if (prev <= 1) {
          playSound();
          const nextMode = mode === "work" ? "break" : "work";
          setMode(nextMode);
          return nextMode === "work" ? workTime : breakTime;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [running, mode, workTime, breakTime]);

  return (
    <div className="relative h-screen w-screen">
      {/* FULL SCREEN NUMBER AND BACKGROUND */}
      <TimerDisplay seconds={secondsLeft} mode={mode} />

      {/* BUTTONS fixed at bottom */}
      <div className="absolute bottom-0 left-0 w-full p-4 bg-black/10 backdrop-blur-sm z-10">
        <TimerControls
          running={running}
          setRunning={setRunning}
          setWorkTime={setWorkTime}
          setBreakTime={setBreakTime}
          onReset={resetTimer}
          secondsLeft={secondsLeft}
          mode={mode}
          workTime={workTime}
          breakTime={breakTime}
          setSecondsLeft={setSecondsLeft}
          playSound={playSound}
          setMode={setMode}
        />
      </div>
    </div>
  );
}
