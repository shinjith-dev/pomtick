import { TConfig, TState } from "../../../lib/types";
import { toSentenceCase } from "@repo/lib/utils";
import StateProgress from "./StatusProgress";
import ConfigMenu from "../appbar/ConfigMenu";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import { IconWindowMinimize } from "@tabler/icons-react";
import { PhysicalSize, appWindow } from "@tauri-apps/api/window";

type Props = {
  states: TState[];
  activeState: number;
  config: TConfig;
  updateConfig: Dispatch<SetStateAction<TConfig>>;
};

const BottomBar = ({ states, activeState, config, updateConfig }: Props) => {
  const activeStateType = states[activeState]?.type ?? "pomodoro";
  const [windowMode, setMode] = useState<"normal" | "compact">("normal")

  const getStatePhrase = () => {
    switch (activeStateType) {
      case "pomodoro":
        return "Time flies when you're focused.";
      case "short-break":
        return "Stretch & breathe.";
      case "long-break":
        return "Come back feeling new!";
      default:
        return "";
    }
  };

  const compactize = () => {
    // invoke("resize_window", { width: 1200, height: 800 })
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));
    appWindow.setSize(new PhysicalSize(300, 200))
    setMode("compact")
  };

  const normalize = () => {
    appWindow.setSize(new PhysicalSize(380, 440))
    setMode("normal")
  }

  return (
    <div className="blur-effect absolute left-1/2 flex justify-between -translate-x-1/2 rounded-xl bg-surface/75 bottom-0 w-full items-center px-4">
      {windowMode === "normal" && <>      <ConfigMenu config={config} updateConfig={updateConfig} />
        <div>
          <div className="relative rounded-t-xl pt-3 w-fit mx-auto">
            <StateProgress states={states} activeState={activeState} />

            <div className="relative z-10 mb-2 flex items-center justify-center gap-2">
              {states.map((state, index) =>
                state.type !== "short-break" ? (
                  <div
                    key={`${index}-${state.type}`}
                    title={toSentenceCase(state.type)}
                    className={`flex flex-col items-center rounded-full border transition-all duration-300 ${index === activeState ? "border-foam" : "border-[transparent]"}`}
                  >
                    <div
                      className={`h-4 w-4 rounded-full border-2 border-surface ${state.type === "pomodoro" && index <= activeState ? "bg-pine" : state.type === "long-break" && index <= activeState ? "bg-foam" : state.type === "pomodoro" ? "bg-highlight-high" : "bg-highlight-med"}`}
                    />
                  </div>
                ) : null
              )}
            </div>
          </div>
          <div
            className={`mx-auto w-max text-center text-xs font-medium pb-1.5 sm:text-sm ${activeStateType === "pomodoro" ? "text-foam" : "text-iris"}`}
          >
            {toSentenceCase(activeStateType)} &middot; {getStatePhrase()}
          </div>
        </div></>}


      <button
        className="rounded-md p-1.5 hover:bg-love/25 my-3"
        onClick={() => windowMode === "normal" ? compactize() : normalize()}
      >
        <IconWindowMinimize className={`transition-all duration-500 ${windowMode === "normal" ? "rotate-90" : "-rotate-90"}`} size={20} />
      </button>
    </div>
  );
};

export default BottomBar;
