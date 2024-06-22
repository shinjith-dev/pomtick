import { useEffect, useRef, useState } from "react";

export type TState = "playing" | "paused";

export type TTimer = {
  minutes: number;
  seconds: number;
};

const useTimer = (
  value: TTimer,
  isInitiallyPlaying: boolean,
  completeCb: () => void,
  pauseCb: () => void,
) => {
  const [timer, setTimer] = useState<TTimer>(value);
  const [state, setState] = useState<TState>(
    isInitiallyPlaying ? "playing" : "paused",
  );

  const initialValue = useRef<TTimer>(value);
  const intervalId = useRef<null | NodeJS.Timeout>(null);

  useEffect(() => {
    if (state === "playing")
      intervalId.current = setInterval(() => {
        setTimer((prev) => {
          const newPomo: TTimer = {
            minutes: prev.minutes,
            seconds: prev.seconds - 1,
          };
          if (prev.seconds === 1) {
            if (prev.minutes === 0) completeCb();
          } else if (prev.seconds <= 0) {
            if (prev.minutes === 0)
              newPomo.minutes = initialValue.current.minutes;
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
  }, [state]);

  const pause = () => {
    setState("paused");
    pauseCb();
  };

  const startNew = (value: TTimer) => {
    setTimer(value);
    initialValue.current = value;
  };

  const update = (value: TTimer, state = "paused") => {
    startNew(value);
    if (state === "paused") pause();
  };

  const skip = () => {
    completeCb();
    pause();
  };

  const reset = () => {
    startNew(initialValue.current);
    pause();
  };

  const play = () => {
    setState("playing");
  };

  return { timer, play, update, pause, skip, reset };
};

export default useTimer;
