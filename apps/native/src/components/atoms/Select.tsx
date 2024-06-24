import { useState } from "react";

type Props = {
  value: number;
  options: number[];
  onChange: (newValue: number) => void;
};

const Select = ({ value, options, onChange }: Props) => {
  const [expanded, setExpand] = useState<boolean>(false);

  return (
    <button onClick={() => setExpand((prev) => !prev)} className="sm:relative">
      <span className="rounded-sm bg-pine/50 px-2 py-0.5">{value}</span>
      {expanded && (
        <div className="absolute right-8 sm:right-0 top-20 z-20 overflow-hidden rounded sm:top-6">
          <ul className="space-y-1 rounded bg-overlay shadow-md">
            {options.map((option, index) => (
              <li key={`pomodoro-choice-${index}`}>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onChange(option);
                    setExpand(false);
                  }}
                  className={`w-max px-2 py-1 rounded hover:bg-muted/20 ${option === value && "bg-muted/20"}`}
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </button>
  );
};

export default Select;
