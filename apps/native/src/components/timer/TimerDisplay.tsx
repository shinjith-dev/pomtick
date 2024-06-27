import { TTimer, TWMode } from "../../../lib/types";
import { padStart } from "@repo/lib/utils";

type Props = { pomodoro: TTimer; totalDuration: number; windowMode: TWMode };

const TimerDisplay = ({ pomodoro, totalDuration, windowMode }: Props) => {
  return (
    <div>
      <h5
        className={`${windowMode === "normal" ? "text-center text-sm mb-2" : "mb-0 text-left text-xs"} font-medium text-subtle transition-all`}
      >
        {totalDuration} Mins
      </h5>
      <h3
        className={`${windowMode === "normal" ? "text-center text-6xl" : "text-left text-5xl"} transition-all w-full font-semibold text-text`}
      >
        {padStart(pomodoro.minutes)}:{padStart(pomodoro.seconds)}
      </h3>
    </div>
  );
};

export default TimerDisplay;
