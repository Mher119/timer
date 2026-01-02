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
      ? "bg-green-500"       // work
      : seconds <= 5
      ? "bg-yellow-500"      // last 5 sec
      : "bg-red-500";        // break

  return (
    <div
      className={`absolute inset-0 ${bg} flex items-center justify-center`}
    >
      {visible && (
        <span
          className="font-bold text-black text-center"
          style={{
            fontSize: "clamp(5rem, 80vw, 70vh)", // bigger size now
            lineHeight: 1,
            wordBreak: "break-word",
            maxWidth: "100%",       // prevents overflow on mobile
          }}
        >
          {seconds}
        </span>
      )}
    </div>
  );
}
