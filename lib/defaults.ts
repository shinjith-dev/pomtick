import { TConfig, TState } from "./types";

export const defaultConfig: TConfig = {
  pomodoro: {
    noOfPomodoro: 8,
    pomodoroDuration: 25,
    shortBreakDuration: 5,
    longBreakDuration: 15,
  },
};

export const defaultStates: TState[] = [
  { type: "pomodoro", duration: defaultConfig.pomodoro.pomodoroDuration },
  { type: "short-break", duration: defaultConfig.pomodoro.shortBreakDuration },
  { type: "pomodoro", duration: defaultConfig.pomodoro.pomodoroDuration },
  { type: "short-break", duration: defaultConfig.pomodoro.shortBreakDuration },
  { type: "pomodoro", duration: defaultConfig.pomodoro.pomodoroDuration },
  { type: "short-break", duration: defaultConfig.pomodoro.shortBreakDuration },
  { type: "pomodoro", duration: defaultConfig.pomodoro.pomodoroDuration },
  { type: "long-break", duration: defaultConfig.pomodoro.longBreakDuration },
  { type: "pomodoro", duration: defaultConfig.pomodoro.pomodoroDuration },
  { type: "short-break", duration: defaultConfig.pomodoro.shortBreakDuration },
  { type: "pomodoro", duration: defaultConfig.pomodoro.pomodoroDuration },
  { type: "short-break", duration: defaultConfig.pomodoro.shortBreakDuration },
  { type: "pomodoro", duration: defaultConfig.pomodoro.pomodoroDuration },
  { type: "short-break", duration: defaultConfig.pomodoro.shortBreakDuration },
  { type: "pomodoro", duration: defaultConfig.pomodoro.pomodoroDuration },
];
