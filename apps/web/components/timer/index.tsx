import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";

import { TPomodoro, TState, TStatus } from "@/lib/types";
import Secondhands from "./Secondhands";
import CircularProgress from "./CircularProgress";
import TimerDisplay from "./TimerDisplay";
import PomodoroControls from "./PomodoroControls";

type Props = {
  status: TStatus;
  state: TState;
  setStatus: Dispatch<SetStateAction<TStatus>>;
  updateState: () => void;
  pause: () => void;
};

const TimerLayer = ({
  status,
  state,
  setStatus,
  updateState,
  pause,
}: Props) => {
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

  const handleReset = () => {
    setPomodoro({ minutes: state.duration, seconds: 0 });
    pause();
  };

  const handleSkip = () => {
    updateState();
    pause();
  };

  return (
    <>
      <Secondhands pomodoro={pomodoro} />
      <CircularProgress pomodoro={pomodoro} totalDuration={state.duration} />

      <div className="absolute left-1/2 top-[45%] flex h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-2 rounded-full sm:h-[270px] sm:w-[270px] md:h-[300px] md:w-[300px]">
        <TimerDisplay pomodoro={pomodoro} totalDuration={state.duration} />

        <PomodoroControls
          status={status}
          skip={handleSkip}
          reset={handleReset}
          toggleStatus={() =>
            setStatus((prev) => (prev === "paused" ? "playing" : "paused"))
          }
        />
      </div>
    </>
  );
};

export default TimerLayer;
