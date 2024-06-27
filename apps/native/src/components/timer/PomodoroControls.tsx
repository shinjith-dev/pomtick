import {
  IconPlayerPauseFilled,
  IconPlayerPlayFilled,
  IconPlayerSkipForward,
  IconRestore,
} from "@tabler/icons-react";
import { TStatus, TWMode } from "../../../lib/types";

type Props = {
  windowMode: TWMode;
  status: TStatus;
  toggleStatus: () => void;
  skip: () => void;
  reset: () => void;
};

const PomodoroControls = ({
  status,
  windowMode,
  toggleStatus,
  skip,
  reset,
}: Props) => {
  return (
    <div
      className={`${windowMode === "normal" ? "flex-row" : "flex-row-reverse"} flex items-center justify-center text-2xl text-subtle gap-3 pt-4`}
    >
      <button
        className="rounded-full p-1.5 transition-all hover:text-text"
        onClick={reset}
        title="Reset"
      >
        <IconRestore />
      </button>
      <div className="flex items-center gap-3">
        <button
          className="rounded-full bg-foam p-2 text-surface transition-all hover:bg-foam/80"
          tabIndex={1}
          onClick={toggleStatus}
          title={status === "playing" ? "Pause" : "Continue"}
        >
          {status === "playing" ? (
            <IconPlayerPauseFilled
              className={`transition-all ${windowMode === "normal" ? "w-7 h-7" : "h-6 w-6"}`}
            />
          ) : (
            <IconPlayerPlayFilled
              className={`transition-all ${windowMode === "normal" ? "w-7 h-7" : "h-6 w-6"}`}
            />
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
    </div>
  );
};

export default PomodoroControls;
