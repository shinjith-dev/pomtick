export type TPomodoro = {
  minutes: number;
  seconds: number;
};

export type TStatus = "playing" | "paused";

export type TConfig = {
  timer: {
    noOfPomodoro: number;
    pomodoroDuration: number;
    shortBreakDuration: number;
    longBreakDuration: number;
  };
  flow: {
    autoStartBreaks: boolean;
    autoStartPomodoro: boolean;
  };
};

export type TState = {
  type: "pomodoro" | "short-break" | "long-break";
  duration: number;
};
