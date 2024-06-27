import { TTimer } from "../../../lib/types";

type Props = { pomodoro: TTimer; totalDuration: number };

const CircularProgress = ({ pomodoro, totalDuration }: Props) => {
  const circumference = 2 * Math.PI * 50;
  const strokeDashoffset =
    circumference -
    ((pomodoro.minutes * 60 + pomodoro.seconds) / (totalDuration * 60)) *
      circumference;

  return (
    <div className="absolute left-0 top-0 rounded-full h-full w-full">
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
