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
      className={`${windowMode === "normal" ? "flex-row gap-3" : "flex-row-reverse gap-2"} flex items-center justify-center text-2xl text-subtle  pt-4`}
    >
      <button
        className="rounded-full p-1.5 transition-all hover:text-text"
        onClick={reset}
        title="Reset"
      >
        <IconRestore
          className={`transition-all ${windowMode === "normal" ? "w-6 h-6" : "h-5 w-5"}`}
        />
      </button>
      <div
        className={`${windowMode === "normal" ? "gap-3" : "gap-3"} flex items-center`}
      >
        <button
          className="rounded-full bg-foam p-2 text-surface transition-all hover:bg-foam/80"
          tabIndex={1}
          onClick={toggleStatus}
          title={status === "playing" ? "Pause" : "Continue"}
        >
          {status === "playing" ? (
            <IconPlayerPauseFilled
              className={`transition-all ${windowMode === "normal" ? "w-7 h-7" : "h-4 w-4"}`}
            />
          ) : (
            <IconPlayerPlayFilled
              className={`transition-all ${windowMode === "normal" ? "w-7 h-7" : "h-4 w-4"}`}
            />
          )}
        </button>
        <button
          className="rounded-full p-1.5 transition-all hover:text-text"
          onClick={skip}
          title="Skip"
        >
          <IconPlayerSkipForward
            className={`transition-all ${windowMode === "normal" ? "w-6 h-6" : "h-5 w-5"}`}
          />
        </button>
      </div>
    </div>
  );
};

export default PomodoroControls;
