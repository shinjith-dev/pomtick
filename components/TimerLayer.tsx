import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
  IconPlayerPauseFilled,
  IconPlayerPlayFilled,
  IconPlayerSkipForward,
  IconRestore,
} from "@tabler/icons-react";
import { TPomodoro, TStatus } from "@/lib/types";
import { padStart } from "@/lib/utils/stringFns";

type Props = { status: TStatus; setStatus: Dispatch<SetStateAction<TStatus>> };

const TimerLayer = ({ status, setStatus }: Props) => {
  const [pomodoro, setPomodoro] = useState<TPomodoro>({
    minutes: 25,
    seconds: 0,
  });

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

  return (
    <>
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
    </>
  );
};

export default TimerLayer;
