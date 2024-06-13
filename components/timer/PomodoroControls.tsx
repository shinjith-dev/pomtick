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
};

const PomodoroControls = ({ status, toggleStatus }: Props) => {
  return (
    <div className="flex items-center justify-center gap-6 pt-4">
      <button className="rounded-full p-1.5">
        <IconRestore size={24} className="text-subtle" />
      </button>
      <button
        className="rounded-full bg-love p-2"
        tabIndex={1}
        onClick={toggleStatus}
      >
        {status === "playing" ? (
          <IconPlayerPauseFilled className="text-surface" size={32} />
        ) : (
          <IconPlayerPlayFilled className="text-surface" size={32} />
        )}
      </button>
      <button className="rounded-full p-1.5">
        <IconPlayerSkipForward size={24} className="text-subtle" />
      </button>
    </div>
  );
};

export default PomodoroControls;
