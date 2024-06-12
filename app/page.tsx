"use client";
import Image from "next/image";
import bg from "@/assets/images/bg.jpg";
import { useEffect, useState } from "react";

const statesDuration= [25, 5, 25, 5, 25, 5, 25, 15, 25, 5, 25, 5, 25, 5, 25];

export default function Home() {
  const [seconds, setSeconds] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(25);

  const circumference = 2 * Math.PI * 50;
  const strokeDashoffset = circumference - (minutes / 25) * circumference;

  useEffect(() => {
    const intervalSec = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 0) {
          setMinutes((prev) => (prev === 0 ? 25 : prev - 1));
          return 59;
        } else return prev - 1;
      });
    }, 1000);

    return () => {
      clearInterval(intervalSec);
    };
  }, []);

  const padStart = (num: number) => String(num).padStart(2, "0");

  return (
    <main className="bg-radial-gradient-in relative flex min-h-screen w-screen items-center justify-center text-text">
      <Image src={bg} fill alt="bg" className="-z-10 object-cover" />

      <div className="bg-radial-gradient-out absolute left-0 top-0 h-full w-full" />

      <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-b from-base from-[10%] via-base/20 via-[30%] to-base/10" />

      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-surface">
        {[...new Array(60)].map((_, index) => (
          <div
            key={`second-hand-${index}`}
            className={`absolute left-1/2 top-1/2 flex h-1 w-[230px] origin-left justify-end gap-1 rounded transition-all duration-300`}
            style={{ transform: `rotate(${index * 6 - 84}deg)` }}
          >
            <div
              className={`h-1 w-3 rounded-full transition-all duration-300 ${index < seconds || seconds === 0 ? "bg-rose" : "bg-muted"}`}
            />
          </div>
        ))}
      </div>

      <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-surface">
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
              stroke="hsl(var(--color-love))"
              strokeWidth="1"
              strokeDasharray={circumference + " " + circumference}
              style={{ strokeDashoffset }}
              fill="transparent"
              r="50"
              cx="51"
              cy="51"
            />
          </svg>
        </div>
      </div>
      <div className="relative flex h-[400px] w-[400px] flex-col items-center justify-center gap-1 rounded-full bg-surface">
        <h5 className="text-xl font-medium text-subtle">25 Mins</h5>
        <h3 className="text-7xl font-semibold">
          {padStart(minutes)}:{padStart(seconds)}
        </h3>
      </div>
    </main>
  );
}
