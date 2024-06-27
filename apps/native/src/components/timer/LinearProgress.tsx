import { TTimer } from "../../../lib/types";

type Props = { pomodoro: TTimer; totalDuration: number };

const LinearProgress = ({ pomodoro, totalDuration }: Props) => {
  const percentage =
    ((pomodoro.minutes * 60 + pomodoro.seconds) / (totalDuration * 60)) * 100;

  return (
    <div className="bg-muted w-full h-0.5 absolute left-0 bottom-[60px]">
      <div
        style={{ width: `${percentage}%` }}
        className="h-full bg-pine flex justify-end transition-all"
      >
        <div className="h-1 w-1 rounded-full translate-x-[1px] -translate-y-[1px] bg-text" />
      </div>
    </div>
  );
};

export default LinearProgress;
