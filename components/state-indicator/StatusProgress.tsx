import { TState } from "@/lib/types";
import React, { useEffect, useState } from "react";

type Props = { states: TState[]; activeState: number };

const StateProgress = ({ states, activeState }: Props) => {
  const [activeStateWIthoutShortBreak, setActiveState] =
    useState<number>(activeState);

  const lengthWithoutShortBreak =
    states.filter((state) => state.type !== "short-break").length - 1;

  console.log(lengthWithoutShortBreak, activeStateWIthoutShortBreak);

  useEffect(() => {
    const state = states[activeState];
    if (
      state.type !== "short-break" &&
      activeState > activeStateWIthoutShortBreak
    )
      setActiveState((prev) => prev + 1);
  }, [activeState]);

  return (
    <div className="absolute left-0 top-0 w-full p-[22px]">
      <div
        className="h-0.5 rounded-full bg-iris transition-all duration-700"
        style={{
          width: `${(activeStateWIthoutShortBreak / lengthWithoutShortBreak) * 100}%`,
          maxWidth: "100%",
        }}
      />
    </div>
  );
};

export default StateProgress;
