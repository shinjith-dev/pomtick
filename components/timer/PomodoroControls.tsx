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
    <div className="flex items-center justify-center gap-6 pt-4 text-subtle">
      <button
        className="rounded-full p-1.5 transition-all hover:text-text"
        onClick={reset}
        title="Reset"
      >
        <IconRestore size={24} />
      </button>
      <button
        className="rounded-full bg-love p-2 text-surface transition-all hover:bg-love/90"
        tabIndex={1}
        onClick={toggleStatus}
        title={status === "playing" ? "Pause" : "Continue"}
      >
        {status === "playing" ? (
          <IconPlayerPauseFilled size={32} />
        ) : (
          <IconPlayerPlayFilled size={32} />
        )}
      </button>
      <button
        className="rounded-full p-1.5 transition-all hover:text-text"
        onClick={skip}
        title="Skip"
      >
        <IconPlayerSkipForward size={24} />
      </button>
    </div>
  );
};

export default PomodoroControls;
