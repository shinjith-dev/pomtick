import React from "react";
import {
  IconPlayerPauseFilled,
  IconPlayerPlayFilled,
  IconPlayerSkipForward,
  IconRestore,
} from "@tabler/icons-react";
import { TStatus } from "@/lib/types";

type Props = {
  status: TStatus;
  toggleStatus: () => void;
  skip: () => void;
  reset: () => void;
};

const PomodoroControls = ({ status, toggleStatus, skip, reset }: Props) => {
  return (
    <div className="flex items-center justify-center gap-4 pt-2 text-2xl text-subtle sm:gap-6 sm:pt-3 md:pt-4">
      <button
        className="rounded-full p-1.5 transition-all hover:text-text"
        onClick={reset}
        title="Reset"
      >
        <IconRestore />
      </button>
      <button
        className="rounded-full bg-foam p-2 text-surface transition-all hover:bg-foam/80"
        tabIndex={1}
        onClick={toggleStatus}
        title={status === "playing" ? "Pause" : "Continue"}
      >
        {status === "playing" ? (
          <IconPlayerPauseFilled size={30} />
        ) : (
          <IconPlayerPlayFilled size={30} />
        )}
      </button>
      <button
        className="rounded-full p-1.5 transition-all hover:text-text"
        onClick={skip}
        title="Skip"
      >
        <IconPlayerSkipForward />
      </button>
    </div>
  );
};

export default PomodoroControls;
