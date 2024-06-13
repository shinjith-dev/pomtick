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
    <div className="blur-effect absolute left-1/2 top-[70%] -translate-x-1/2 rounded-xl bg-surface/40">
      <div className="relative rounded-xl p-3">
        <StateProgress states={states} activeState={activeState} />

        <div className="relative z-10 mb-2 flex items-center justify-center gap-3">
          {states.map((state, index) =>
            state.type !== "short-break" ? (
              <div
                key={`${index}-${state.type}`}
                title={toSentenceCase(state.type)}
                className={`flex flex-col items-center transition-all duration-300 rounded-full border ${index === activeState ? "border-iris" : "border-[transparent]"}`}
              >
                <div
                  className={`h-5 w-5 rounded-full border-2 border-surface ${state.type === "pomodoro" ? "bg-pine" : "bg-foam"}`}
                />
              </div>
            ) : null,
          )}
        </div>

        <div
          className={`text-sm font-medium ${activeStateType === "pomodoro" ? "text-gold" : activeStateType === "short-break" ? "text-foam" : "text-iris"}`}
        >
          {toSentenceCase(activeStateType)} &middot; {getStatePhrase()}
        </div>
      </div>
    </div>
  );
};

export default StateIndicator;
