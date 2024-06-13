import { TConfig, TState } from "./types";

export const defaultConfig: TConfig = {
  timer: {
    noOfPomodoro: 8,
    pomodoroDuration: 25,
    shortBreakDuration: 5,
    longBreakDuration: 30,
  },
  flow: { autoStartBreaks: true, autoStartPomodoro: false },
};

export const defaultStates: TState[] = [
  { type: "pomodoro", duration: defaultConfig.timer.pomodoroDuration },
  { type: "short-break", duration: defaultConfig.timer.shortBreakDuration },
  { type: "pomodoro", duration: defaultConfig.timer.pomodoroDuration },
  { type: "short-break", duration: defaultConfig.timer.shortBreakDuration },
  { type: "pomodoro", duration: defaultConfig.timer.pomodoroDuration },
  { type: "short-break", duration: defaultConfig.timer.shortBreakDuration },
  { type: "pomodoro", duration: defaultConfig.timer.pomodoroDuration },
  { type: "long-break", duration: defaultConfig.timer.longBreakDuration },
  { type: "pomodoro", duration: defaultConfig.timer.pomodoroDuration },
  { type: "short-break", duration: defaultConfig.timer.shortBreakDuration },
  { type: "pomodoro", duration: defaultConfig.timer.pomodoroDuration },
  { type: "short-break", duration: defaultConfig.timer.shortBreakDuration },
  { type: "pomodoro", duration: defaultConfig.timer.pomodoroDuration },
  { type: "short-break", duration: defaultConfig.timer.shortBreakDuration },
  { type: "pomodoro", duration: defaultConfig.timer.pomodoroDuration },
];
