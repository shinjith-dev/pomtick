import { TTimer } from "../../../lib/types";

type Props = { pomodoro: TTimer };

const Secondhands = ({ pomodoro }: Props) => {
  return (
    <div className="absolute left-0 top-0 h-full w-full rounded-full">
      {[...new Array(60)].map((_, index) => (
        <div
          key={`second-hand-${index}`}
          className={`absolute left-1/2 top-1/2 flex h-1 origin-left justify-end gap-1 rounded transition-all duration-300 w-[140px]`}
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
