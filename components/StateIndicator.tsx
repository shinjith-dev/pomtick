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
    <div className="blur-effect absolute left-1/2 top-[70%] -translate-x-1/2 rounded-xl bg-surface/40 p-3">
      <div className="mb-2 flex items-center justify-center gap-2">
        {states.map((state, index) => (
          <div
            key={`${index}-${state.type}`}
            className={`flex flex-col items-center rounded-full border-gold p-0.5 ${index === activeState && "border"}`}
          >
            <div
              className={`h-3 w-3 rounded-full ${state.type === "pomodoro" ? "bg-gold" : state.type === "short-break" ? "bg-foam" : "bg-iris"}`}
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
  );
};

export default StateIndicator;
