import { TState } from "@/lib/types";
import { toSentenceCase } from "@/lib/utils/stringFns";
import React from "react";

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
        <div className="absolute left-0 top-0 w-full p-[22px]">
          <div
            className="h-0.5 rounded-full bg-gold transition-all duration-500"
            style={{ width: `${(activeState / (states.length - 1)) * 100}%` }}
          />
        </div>

        <div className="relative z-10 mb-2 flex items-center justify-center gap-3">
          {states.map((state, index) => (
            <div
              key={`${index}-${state.type}`}
              className={`flex flex-col items-center rounded-full border-gold ${index === activeState && "border"}`}
            >
              <div
                className={`h-5 w-5 rounded-full border-surface border-2 ${state.type === "pomodoro" ? "bg-gold" : state.type === "short-break" ? "bg-foam" : "bg-iris"}`}
              />
            </div>
          ))}
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
