import { josephinSans } from "../../lib/fonts";
import { TTimer } from "../../lib/types";
import { padStart } from "@repo/lib/utils";
import React from "react";

type Props = { pomodoro: TTimer; totalDuration: number };

const TimerDisplay = ({ pomodoro, totalDuration }: Props) => {
  return (
    <>
      <h5 className="text-sm font-medium text-subtle sm:text-[16px] md:text-lg">
        {totalDuration} Mins
      </h5>
      <h3
        className={`${josephinSans.className} w-full text-center text-6xl font-semibold text-text sm:text-7xl`}
      >
        {padStart(pomodoro.minutes)}:{padStart(pomodoro.seconds)}
      </h3>
    </>
  );
};

export default TimerDisplay;
