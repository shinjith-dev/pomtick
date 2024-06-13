import { TPomodoro } from "@/lib/types";
import { padStart } from "@/lib/utils/stringFns";
import React from "react";

type Props = { pomodoro: TPomodoro; totalDuration: number };

const TimerDisplay = ({ pomodoro, totalDuration }: Props) => {
  return (
    <>
      <h5 className="text-sm font-medium text-subtle sm:text-[16px] md:text-lg">
        {totalDuration} Mins
      </h5>
      <h3 className="w-full text-center text-5xl font-semibold sm:text-6xl md:text-7xl">
        {padStart(pomodoro.minutes)}:{padStart(pomodoro.seconds)}
      </h3>
    </>
  );
};

export default TimerDisplay;
