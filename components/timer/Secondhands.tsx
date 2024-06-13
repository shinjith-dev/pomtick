import { TPomodoro } from "@/lib/types";
import React from "react";

type Props = { pomodoro: TPomodoro };

const Secondhands = ({ pomodoro }: Props) => {
  return (
    <div className="absolute left-1/2 top-[45%] h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full">
      {[...new Array(60)].map((_, index) => (
        <div
          key={`second-hand-${index}`}
          className={`absolute left-1/2 top-1/2 flex h-1 w-[180px] origin-left justify-end gap-1 rounded transition-all duration-300`}
          style={{ transform: `rotate(${index * 6 - 84}deg)` }}
        >
          <div
            className={`h-1 w-3 rounded-full transition-all duration-300 ${index < pomodoro.seconds || pomodoro.seconds === 0 ? "bg-foam" : "blur-effect bg-muted/50"}`}
          />
        </div>
      ))}
    </div>
  );
};

export default Secondhands;
