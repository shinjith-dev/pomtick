import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";

import { TPomodoro, TState, TStatus } from "@/lib/types";
import { padStart, toSentenceCase } from "@/lib/utils/stringFns";
import Secondhands from "./timer/Secondhands";
import CircularProgress from "./timer/CircularProgress";
import TimerDisplay from "./timer/TimerDisplay";
import PomodoroControls from "./timer/PomodoroControls";

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
      <Secondhands pomodoro={pomodoro} />
      <CircularProgress pomodoro={pomodoro} totalDuration={state.duration} />

      <div className="absolute left-1/2 top-[45%] flex h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-2 rounded-full">
        <TimerDisplay pomodoro={pomodoro} totalDuration={state.duration} />

        <PomodoroControls
          status={status}
          toggleStatus={() =>
            setStatus((prev) => (prev === "paused" ? "playing" : "paused"))
          }
        />
      </div>
    </>
  );
};

export default TimerLayer;
