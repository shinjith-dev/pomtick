"use client";
import Image from "next/image";
import bg from "@/assets/images/bg.jpg";
import { useEffect, useState } from "react";
import {
  IconPlayerPause,
  IconPlayerPauseFilled,
  IconPlayerPlayFilled,
  IconPlayerSkipForward,
  IconRestore,
} from "@tabler/icons-react";
import { TPomodoro } from "@/lib/types";

// const statesDuration = [25, 5, 25, 5, 25, 5, 25, 15, 25, 5, 25, 5, 25, 5, 25];

export default function Home() {
  const [pomodoro, setPomodoro] = useState<TPomodoro>({
    minutes: 25,
    seconds: 0,
  });
  const [status, setStatus] = useState<"playing" | "paused">("playing");

  const circumference = 2 * Math.PI * 50;
  const strokeDashoffset =
    circumference -
    (((pomodoro.minutes - 1) * 60 + pomodoro.seconds) / (25 * 60)) *
      circumference;

  useEffect(() => {
    let intervalId = null;
    if (status === "playing")
      intervalId = setInterval(() => {
        setPomodoro((prev) => {
          const newPomo: TPomodoro = {
            minutes: prev.minutes,
            seconds: prev.seconds - 1,
          };
          if (prev.seconds <= 0) {
            newPomo.minutes = prev.minutes === 0 ? 25 : prev.minutes - 1;
            newPomo.seconds = 59;
          }
          return newPomo;
        });
      }, 1000);
    else if (intervalId) clearInterval(intervalId);

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [status]);

  const padStart = (num: number) => String(num).padStart(2, "0");

  return (
    <main
      className={`relative flex min-h-screen w-screen items-center justify-center text-center text-text transition-all duration-700 ${status === "paused" ? "bg-base" : "bg-base/20"}`}
    >
      <Image src={bg} fill alt="bg" className="-z-10 object-cover" />

      <div className="bg-radial-gradient-in absolute left-0 top-0 h-full w-full" />
      {/* <div className="bg-radial-gradient-out absolute left-0 top-0 h-full w-full" /> */}

      {/* <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-b from-base from-[10%] via-base/20 via-[30%] to-base/10" /> */}

      <div className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-surface">
        {[...new Array(60)].map((_, index) => (
          <div
            key={`second-hand-${index}`}
            className={`absolute left-1/2 top-1/2 flex h-1 w-[180px] origin-left justify-end gap-1 rounded transition-all duration-300`}
            style={{ transform: `rotate(${index * 6 - 84}deg)` }}
          >
            <div
              className={`h-1 w-3 rounded-full transition-all duration-300 ${index < pomodoro.seconds || pomodoro.seconds === 0 ? "bg-foam" : "blur-effect bg-muted/50"}`}
            />
          </div>
        ))}
      </div>

      <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full">
        <div className="h-full w-full">
          <svg className="-rotate-90" width="100%" viewBox="0 0 102 102">
            <circle
              stroke="hsl(var(--color-muted))"
              strokeWidth="1"
              fill="transparent"
              r="50"
              cx="51"
              cy="51"
            />
            <circle
              stroke="hsl(var(--color-rose))"
              strokeWidth="1"
              strokeDasharray={circumference + " " + circumference}
              className="transition-all duration-300"
              style={{ strokeDashoffset }}
              fill="transparent"
              r="50"
              cx="51"
              cy="51"
            />
          </svg>
        </div>
      </div>

      <div className="relative flex h-[300px] w-[300px] flex-col items-center justify-center gap-2 rounded-full">
        <h5 className="text-lg font-medium text-subtle">
          3/8 &middot; Pomodoro
        </h5>
        <h3 className="w-full text-center text-7xl font-semibold">
          {padStart(pomodoro.minutes)}:{padStart(pomodoro.seconds)}
        </h3>

        <div className="flex items-center justify-center gap-6 pt-4">
          <button className="rounded-full p-1.5">
            <IconRestore size={24} className="text-subtle" />
          </button>
          <button
            className="rounded-full bg-love p-2"
            tabIndex={1}
            onClick={() =>
              setStatus((prev) => (prev === "playing" ? "paused" : "playing"))
            }
          >
            {status === "playing" ? (
              <IconPlayerPauseFilled className="text-surface" size={32} />
            ) : (
              <IconPlayerPlayFilled className="text-surface" size={32} />
            )}
          </button>
          <button className="rounded-full p-1.5">
            <IconPlayerSkipForward size={24} className="text-subtle" />
          </button>
        </div>
      </div>
    </main>
  );
}
