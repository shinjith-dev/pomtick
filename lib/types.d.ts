export type TPomodoro = {
  minutes: number;
  seconds: number;
};

export type TStatus = "playing" | "paused";

export type TConfig = {
  pomodoro: {
    noOfPomodoro: number;
    pomodoroDuration: number;
    shortBreakDuration: number;
    longBreakDuration: number;
  };
};

export type TState = {
  type: "pomodoro" | "short-break" | "long-break";
  duration: number;
};
