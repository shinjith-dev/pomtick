import { TTimer } from "../../lib/types";
import React from "react";

type Props = { pomodoro: TTimer };

const Secondhands = ({ pomodoro }: Props) => {
  return (
    <div className="absolute left-1/2 top-[45%] h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full sm:h-[350px] sm:w-[350px] md:h-[380px] md:w-[380px]">
      {[...new Array(60)].map((_, index) => (
        <div
          key={`second-hand-${index}`}
          className={`absolute left-1/2 top-1/2 flex h-1 w-[150px] origin-left justify-end gap-1 rounded transition-all duration-300 sm:w-[155px] md:w-[180px]`}
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
