import { Dispatch, SetStateAction, useEffect } from "react";
import { TState, TStatus, TWMode } from "../../../lib/types";
import Secondhands from "./Secondhands";
import CircularProgress from "./CircularProgress";
import TimerDisplay from "./TimerDisplay";
import PomodoroControls from "./PomodoroControls";
import useTimer from "@repo/lib/hooks";

type Props = {
  status: TStatus;
  state?: TState;
  windowMode: TWMode;
  setStatus: Dispatch<SetStateAction<TStatus>>;
  updateState: () => void;
  pause: () => void;
};

const TimerLayer = ({
  status,
  windowMode,
  state,
  setStatus,
  updateState,
  pause,
}: Props) => {
  const {
    timer,
    play,
    update,
    pause: pauseTimer,
    skip,
    reset,
  } = useTimer(
    { minutes: state?.duration ?? 60, seconds: 0 },
    status === "playing",
    updateState,
    pause
  );

  useEffect(() => {
    update({ minutes: state?.duration ?? 60, seconds: 0 }, status);
  }, [state]);

  useEffect(() => {
    if (status === "paused") pauseTimer();
    else play();
  }, [status]);

  return (
    <>
      <div
        className={`${windowMode === "normal" ? "opacity-100 scale-100" : "opacity-0 scale-0"} -translate-x-1/2 -translate-y-1/2 h-[240px] w-[240px] transition-all left-1/2 top-[42%] absolute duration-300`}
      >
        <Secondhands pomodoro={timer} />
        <CircularProgress
          pomodoro={timer}
          totalDuration={state?.duration ?? 60}
        />
      </div>

      <div
        className={`absolute left-1/2 top-[42%] flex -translate-x-1/2 -translate-y-1/2 items-center justify-center transition-all gap-2 rounded-full h-[220px] w-[220px] ${windowMode === "normal" ? "flex-col" : "flex-row"}`}
      >
        <TimerDisplay
          pomodoro={timer}
          totalDuration={state?.duration ?? 60}
          windowMode={windowMode}
        />

        <PomodoroControls
          status={status}
          skip={skip}
          windowMode={windowMode}
          reset={reset}
          toggleStatus={() =>
            setStatus((prev) => (prev === "paused" ? "playing" : "paused"))
          }
        />
      </div>
    </>
  );
};

export default TimerLayer;
