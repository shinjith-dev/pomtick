import { TTimer } from "../../../lib/types";
import { padStart } from "@repo/lib/utils";

type Props = { pomodoro: TTimer; totalDuration: number };

const TimerDisplay = ({ pomodoro, totalDuration }: Props) => {
  return (
    <>
      <h5 className="font-medium text-subtle text-sm">
        {totalDuration} Mins
      </h5>
      <h3
        className={`w-full text-center text-6xl font-semibold text-text`}
      >
        {padStart(pomodoro.minutes)}:{padStart(pomodoro.seconds)}
      </h3>
    </>
  );
};

export default TimerDisplay;
