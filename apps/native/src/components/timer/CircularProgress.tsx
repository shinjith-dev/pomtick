import { TTimer } from "../../../lib/types";

type Props = { pomodoro: TTimer; totalDuration: number };

const CircularProgress = ({ pomodoro, totalDuration }: Props) => {
  const circumference = 2 * Math.PI * 50;
  const strokeDashoffset =
    circumference -
    ((pomodoro.minutes * 60 + pomodoro.seconds) / (totalDuration * 60)) *
      circumference;

  return (
    <div className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 rounded-full h-[240px] w-[240px]">
      <div className="h-full w-full">
        <svg className="-rotate-90" width="100%" viewBox="0 0 102 102">
          <circle
            stroke="hsl(var(--twc-muted))"
            strokeWidth="1"
            fill="transparent"
            r="50"
            cx="51"
            cy="51"
          />
          <circle
            stroke="hsl(var(--twc-pine))"
            strokeWidth="1"
            strokeDasharray={circumference + " " + circumference}
            className="transition-all duration-300"
            style={{ strokeDashoffset }}
            fill="transparent"
            r="50"
            cx="51"
            cy="51"
          />
        </svg>
      </div>
    </div>
  );
};

export default CircularProgress;
