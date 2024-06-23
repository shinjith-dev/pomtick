import React, { Dispatch, SetStateAction, useEffect } from "react";

import { TState, TStatus } from "../../lib/types";
import Secondhands from "./Secondhands";
import CircularProgress from "./CircularProgress";
import TimerDisplay from "./TimerDisplay";
import PomodoroControls from "./PomodoroControls";
import useTimer from "@repo/lib/hooks";

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
  const {
    timer,
    play,
    update,
    pause: pauseTimer,
    skip,
    reset,
  } = useTimer(
    { minutes: state.duration, seconds: 0 },
    status === "playing",
    updateState,
    pause,
  );

  useEffect(() => {
    update({ minutes: state.duration, seconds: 0 }, status);
  }, [state]);

  useEffect(() => {
    if (status === "paused") pauseTimer();
    else play();
  }, [status]);

  return (
    <>
      <Secondhands pomodoro={timer} />
      <CircularProgress pomodoro={timer} totalDuration={state.duration} />

      <div className="absolute left-1/2 top-[45%] flex h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-2 rounded-full sm:h-[270px] sm:w-[270px] md:h-[300px] md:w-[300px]">
        <TimerDisplay pomodoro={timer} totalDuration={state.duration} />

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
