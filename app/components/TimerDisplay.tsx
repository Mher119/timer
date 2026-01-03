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

      const offsetX =
  seconds >= 100 ? "-1.5vw" :
  seconds >= 10  ? "-0.8vw" :
  "0";


  return (
   <div className={`absolute inset-0 ${bg} flex items-center justify-center px-1.25`}>
  {visible && (
    <span
  className="font-bold text-black text-center tabular-nums"
  style={{
    fontSize: "clamp(6.5rem, 90vw, 600px)",
    lineHeight: 0.95,
    letterSpacing: "-0.05em",
    transform: `translate(-0%, -8vh) translateX(${offsetX})`,
    whiteSpace: "nowrap",
  }}
>
  {seconds}
</span>

  )}
</div>

  );
}
