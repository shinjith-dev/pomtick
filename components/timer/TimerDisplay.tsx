import { TPomodoro } from "@/lib/types";
import { padStart } from "@/lib/utils/stringFns";
import React from "react";

type Props = { pomodoro: TPomodoro; totalDuration: number };

const TimerDisplay = ({ pomodoro, totalDuration }: Props) => {
  return (
    <>
      <h5 className="text-lg font-medium text-subtle">{totalDuration} Mins</h5>
      <h3 className="w-full text-center text-7xl font-semibold">
        {padStart(pomodoro.minutes)}:{padStart(pomodoro.seconds)}
      </h3>
    </>
  );
};

export default TimerDisplay;
