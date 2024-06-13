"use client";
import { useEffect, useRef, useState } from "react";

import { TConfig, TState, TStatus } from "@/lib/types";
import Background from "@/components/Background";
import TimerLayer from "@/components/TimerLayer";
import StateIndicator from "@/components/StateIndicator";
import { defaultConfig, defaultStates } from "@/lib/defaults";

export default function Home() {
  const [status, setStatus] = useState<TStatus>("playing");
  const [config, setConfig] = useState<TConfig>(defaultConfig);

  const [states, setStates] = useState<TState[]>(defaultStates);
  const [activeState, setActive] = useState<number>(0);

  useEffect(() => {
    setStates([]);
    for (let i = 0; i < config.pomodoro.noOfPomodoro; i++) {
      setStates((prev) => [
        ...prev,
        {
          type: "pomodoro",
          duration: config.pomodoro.pomodoroDuration,
        },
      ]);
      if (i + 1 === 4)
        setStates((prev) => [
          ...prev,
          {
            type: "long-break",
            duration: config.pomodoro.longBreakDuration,
          },
        ]);
      else
        setStates((prev) => [
          ...prev,
          {
            type: "short-break",
            duration: config.pomodoro.shortBreakDuration,
          },
        ]);
    }
  }, [config.pomodoro]);

  return (
    <main className="relative h-full w-full bg-base">
      <div className="relative mx-auto flex min-h-screen w-screen max-w-7xl items-center justify-center text-center text-text">
        <Background status={status} />

        <TimerLayer status={status} setStatus={setStatus} />

        <StateIndicator states={states} activeState={activeState} />
      </div>
    </main>
  );
}
