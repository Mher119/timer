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
    <div className={`absolute inset-0 ${bg} flex items-center justify-center px-1.25`}>
      {visible && (
        <span
          className="font-bold text-black text-center w-full"
          style={{
            fontSize: "clamp(7rem, 92vw, 600px)", // 🔽 slightly reduced vw
            lineHeight: 0.95,
            letterSpacing: "-0.05em",
            transform: "translateY(-8vh)",
            maxWidth: "100%",
            overflow: "hidden",
            whiteSpace: "nowrap",
          }}
        >
          {seconds}
        </span>
      )}
    </div>
  );
}
