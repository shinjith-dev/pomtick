import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  IconPlayerPauseFilled,
  IconPlayerPlayFilled,
  IconPlayerSkipForward,
  IconRestore,
} from "@tabler/icons-react";
import { TPomodoro, TState, TStatus } from "@/lib/types";
import { padStart, toSentenceCase } from "@/lib/utils/stringFns";

type Props = {
  status: TStatus;
  state: TState;
  setStatus: Dispatch<SetStateAction<TStatus>>;
  updateState: () => void;
};

const TimerLayer = ({ status, state, setStatus, updateState }: Props) => {
  const [pomodoro, setPomodoro] = useState<TPomodoro>({
    minutes: state.duration,
    seconds: 0,
  });

  const intervalId = useRef<null | NodeJS.Timeout>(null);

  const circumference = 2 * Math.PI * 50;
  const strokeDashoffset =
    circumference -
    ((pomodoro.minutes * 60 + pomodoro.seconds) / (state.duration * 60)) *
      circumference;

  useEffect(() => {
    if (status === "playing")
      intervalId.current = setInterval(() => {
        setPomodoro((prev) => {
          const newPomo: TPomodoro = {
            minutes: prev.minutes,
            seconds: prev.seconds - 1,
          };
          if (prev.seconds === 1) {
            if (prev.minutes === 0) updateState();
          } else if (prev.seconds <= 0) {
            if (prev.minutes === 0) newPomo.minutes = state.duration;
            else newPomo.minutes = prev.minutes - 1;
            newPomo.seconds = 59;
          }
          return newPomo;
        });
      }, 1000);
    else if (intervalId.current) clearInterval(intervalId.current);

    return () => {
      if (intervalId.current) clearInterval(intervalId.current);
    };
  }, [status]);

  useEffect(() => {
    setPomodoro({ minutes: state.duration, seconds: 0 });
  }, [state]);

  return (
    <>
      <div className="absolute left-1/2 top-[45%] h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full">
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
      <div className="absolute left-1/2 top-[45%] h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full">
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

      <div className="absolute left-1/2 top-[45%] flex h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-2 rounded-full">
        <h5 className="text-lg font-medium text-subtle">
          {state.duration} Mins
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
