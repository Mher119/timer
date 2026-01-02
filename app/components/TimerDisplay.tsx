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
    <div className={`absolute inset-0 ${bg} flex items-center justify-center`}>
      {visible && (
        <span
          className="font-bold text-black text-center"
          style={{
            fontSize: "clamp(8rem, 90vw, 600px)", // 🔥 BIG on mobile
            lineHeight: 1,
            maxWidth: "100%",
          }}
        >
          {seconds}
        </span>
      )}
    </div>
  );
}
