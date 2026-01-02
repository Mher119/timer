"use client";

type Props = {
  seconds: number;
  mode: "work" | "break";
};

export default function TimerDisplay({ seconds, mode }: Props) {
  const isBlinking = seconds > 0 && seconds <= 5;
  const visible = !isBlinking || Math.floor(seconds * 2) % 2 === 0;

  const bg =
    mode === "work"
      ? "bg-green-500"
      : seconds <= 5
      ? "bg-yellow-500"
      : "bg-red-500";

  return (
    <div className={`flex-1 flex items-center justify-center w-full h-full ${bg}`}>
      {visible && (
        <span
          className="font-bold text-black"
          style={{
            fontSize: "min(50vh, 500px)", // scales number independently
            lineHeight: 1,
            textAlign: "center",
          }}
        >
          {seconds}
        </span>
      )}
    </div>
  );
}
