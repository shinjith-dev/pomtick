import { Dispatch, SetStateAction, useEffect } from "react";
import { TState, TStatus } from "../../../lib/types";
import Secondhands from "./Secondhands";
import CircularProgress from "./CircularProgress";
import TimerDisplay from "./TimerDisplay";
import PomodoroControls from "./PomodoroControls";
import useTimer from "@repo/lib/hooks";

type Props = {
  status: TStatus;
  state?: TState;
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
      <Secondhands pomodoro={timer} />
      <CircularProgress
        pomodoro={timer}
        totalDuration={state?.duration ?? 60}
      />

      <div className="absolute left-1/2 top-[42%] flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-2 rounded-full h-[220px] w-[220px]">
        <TimerDisplay pomodoro={timer} totalDuration={state?.duration ?? 60} />

        <PomodoroControls
          status={status}
          skip={skip}
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
