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

export const pomodoroCountChoices = [4, 5, 6, 7, 8, 9, 10, 11, 12];

export const pomodoroDurationChoices = [15, 20, 25, 30, 35, 40, 45, 50];

export const shortBreakDurationChoices = [3, 4, 5, 6, 7];

export const longBreakDurationChoices = [10, 15, 20, 25, 30, 35, 40, 45];
