import { TState } from "@/lib/types";
import { toSentenceCase } from "@/lib/utils/stringFns";
import React from "react";
import StateProgress from "./StatusProgress";

type Props = { states: TState[]; activeState: number };

const StateIndicator = ({ states, activeState }: Props) => {
  const activeStateType = states[activeState].type;

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

  return (
    <div className="blur-effect absolute left-1/2 top-[70%] -translate-x-1/2 rounded-xl bg-surface/25">
      <div className="relative rounded-xl p-3">
        <StateProgress states={states} activeState={activeState} />

        <div className="relative z-10 mb-2 flex items-center justify-center gap-3">
          {states.map((state, index) =>
            state.type !== "short-break" ? (
              <div
                key={`${index}-${state.type}`}
                title={toSentenceCase(state.type)}
                className={`flex flex-col items-center rounded-full border transition-all duration-300 ${index === activeState ? "border-foam" : "border-[transparent]"}`}
              >
                <div
                  className={`h-4 w-4 rounded-full border-2 border-surface sm:h-5 sm:w-5 ${state.type === "pomodoro" && index <= activeState ? "bg-pine" : state.type === "long-break" && index <= activeState ? "bg-foam" : state.type === "pomodoro" ? "bg-highlight-high" : "bg-highlight-med"}`}
                />
              </div>
            ) : null,
          )}
        </div>

        <div
          className={`mx-auto w-max text-center text-xs font-medium sm:text-sm ${activeStateType === "pomodoro" ? "text-foam" : "text-iris"}`}
        >
          {toSentenceCase(activeStateType)} &middot; {getStatePhrase()}
        </div>
      </div>
    </div>
  );
};

export default StateIndicator;
