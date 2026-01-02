"use client";

type Props = {
  seconds: number;
  mode: "work" | "break";
};

export default function TimerDisplay({ seconds, mode }: Props) {
  const isBlinking = seconds > 0 && seconds <= 5;
  const visible = !isBlinking || Math.floor(seconds * 2) % 2 === 0;

  // Background color
  const bg =
    mode === "work"
      ? "bg-green-500"            // always green for work
      : seconds <= 5
      ? "bg-yellow-500"           // last 5 sec of break
      : "bg-red-500";             // normal break

  return (
    <div className={`flex-1 flex items-center justify-center ${bg} w-full h-full`}>
      {visible && (
        <span
          className="font-bold text-black"
          style={{ fontSize: "min(25vw, 200px)" }} // responsive max font size
        >
          {seconds}
        </span>
      )}
    </div>
  );
}
