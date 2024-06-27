import { Dispatch, SetStateAction, useEffect } from "react";
import { TState, TStatus, TWMode } from "../../../lib/types";
import Secondhands from "./Secondhands";
import CircularProgress from "./CircularProgress";
import TimerDisplay from "./TimerDisplay";
import PomodoroControls from "./PomodoroControls";
import useTimer from "@repo/lib/hooks";
import LinearProgress from "./LinearProgress";

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
        className={`${windowMode === "normal" ? "opacity-100 scale-100 h-[240px]" : "opacity-0 scale-0 h-[180px]"} -translate-x-1/2 -translate-y-1/2  w-[240px] transition-all left-1/2 top-[47%] absolute duration-300`}
      >
        <Secondhands pomodoro={timer} />
        <CircularProgress
          pomodoro={timer}
          totalDuration={state?.duration ?? 60}
        />
      </div>

      <div
        className={`absolute flex -translate-y-1/2 items-center transition-all rounded-full w-[220px] ${windowMode === "normal" ? "flex-col gap-2 justify-center left-1/2 -translate-x-1/2 h-[220px] top-[47%]" : "flex-row gap-3 justify-between left-0 px-5 w-full translate-x-0 h-[160px] top-[45%]"}`}
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
      {windowMode === "compact" && (
        <LinearProgress
          pomodoro={timer}
          totalDuration={state?.duration ?? 60}
        />
      )}
    </>
  );
};

export default TimerLayer;
