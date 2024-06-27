import { useEffect, useRef, useState } from "react";
import "./index.css";
import { TConfig, TState, TStatus, TWMode } from "../lib/types";
import { defaultConfig, defaultStates } from "../lib/defaults";
import TimerLayer from "./components/timer";
import BottomBar from "./components/bottom-bar";
import Background from "./components/Background";
import Appbar from "./components/appbar";
import { appWindow } from "@tauri-apps/api/window";

function App() {
  const [status, setStatus] = useState<TStatus>("paused");
  const [windowMode, setMode] = useState<TWMode>("normal");
  const [config, setConfig] = useState<TConfig>(defaultConfig);

  const [states, setStates] = useState<TState[]>(defaultStates);
  const totalStates = useRef<number>(defaultStates.length);

  const [activeState, setActive] = useState<number>(0);

  useEffect(() => {
    appWindow
      .innerSize()
      .then((res) => {
        if (res.width === 300 && res.height === 200) setMode("compact");
        else setMode("normal");
      })
      .catch((err) => console.log("Error fetching window size", err));
  }, []);

  const reset = () => {
    setActive(0);
    setStatus("paused");
  };

  useEffect(() => {
    reset();
  }, [config]);

  const isFocused = !(
    states[activeState]?.type.includes("break") || status === "paused"
  );

  useEffect(() => {
    setStates([]);
    for (let i = 0; i < config.timer.noOfPomodoro; i++) {
      setStates((prev) => [
        ...prev,
        {
          type: "pomodoro",
          duration: config.timer.pomodoroDuration,
        },
      ]);
      if ((i + 1) % 4 === 0 && i !== config.timer.noOfPomodoro - 1)
        setStates((prev) => [
          ...prev,
          {
            type: "long-break",
            duration: config.timer.longBreakDuration,
          },
        ]);
      else if (i !== config.timer.noOfPomodoro - 1)
        setStates((prev) => [
          ...prev,
          {
            type: "short-break",
            duration: config.timer.shortBreakDuration,
          },
        ]);
    }
  }, [config.timer]);

  useEffect(() => {
    totalStates.current = states.length;
  }, [states]);

  const handleStateUpdate = () => {
    if (activeState + 1 !== totalStates.current) {
      const nextState = states[activeState + 1];
      const isBreak = nextState?.type.includes("break");

      setActive((prev) => prev + 1);
      if (!isBreak) setStatus("paused");
    }
  };

  const handlePause = () => setStatus("paused");

  return (
    <div
      className={`flex relative h-screen bg-base w-screen flex-col max-h-screen overflow-hidden`}
    >
      <Appbar hide={isFocused} />
      <main className="mx-auto w-full max-w-7xl grow">
        <div className="flex h-full w-full items-center justify-center text-center text-text">
          <Background status={status} isBreak={!isFocused} />
          <TimerLayer
            state={states[activeState]}
            status={status}
            pause={handlePause}
            setStatus={setStatus}
            windowMode={windowMode}
            updateState={handleStateUpdate}
          />

          <BottomBar
            states={states}
            activeState={activeState}
            config={config}
            updateConfig={setConfig}
            windowMode={windowMode}
            setWindowMode={setMode}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
