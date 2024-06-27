import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { IconAdjustmentsHorizontal } from "@tabler/icons-react";
import { TConfig } from "../../../lib/types";
import Switch from "../atoms/Switch";
import Select from "../atoms/Select";
import {
  longBreakDurationChoices,
  pomodoroCountChoices,
  pomodoroDurationChoices,
  shortBreakDurationChoices,
} from "../../../lib/defaults";

type Props = {
  config: TConfig;
  updateConfig: Dispatch<SetStateAction<TConfig>>;
};

const ConfigMenu = ({ config, updateConfig }: Props) => {
  const [expanded, setExpand] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        setExpand(false);
      }
    }
    if (expanded) document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, expanded]);

  return (
    <div className="sm:relative" ref={ref}>
      <button
        className="rounded-md p-1.5 hover:bg-muted/20"
        onClick={() => setExpand((prev) => !prev)}
      >
        <IconAdjustmentsHorizontal size={20} />
      </button>
      {expanded && (
        <div className="absolute left-0 bottom-16 z-20 w-screen min-w-72 rounded-md px-4 py-2">
          <ul className="h-full space-y-1 rounded-md bg-surface/75 p-2 font-medium shadow-2xl blur-effect">
            <li>
              <div className="flex w-full items-center justify-between rounded p-2 hover:bg-muted/20">
                <p>No. of pomodoros</p>{" "}
                <Select
                  options={pomodoroCountChoices}
                  value={config.timer.noOfPomodoro}
                  onChange={(value: number) =>
                    updateConfig((prev) => ({
                      ...prev,
                      timer: { ...prev.timer, noOfPomodoro: value },
                    }))
                  }
                />
              </div>
            </li>

            <li>
              <div className="flex w-full items-center justify-between rounded p-2 hover:bg-muted/20">
                <p>Auto start pomodoro</p>{" "}
                <Switch
                  checked={config.flow.autoStartPomodoro}
                  onChange={(isChecked) => {
                    updateConfig((prev) => ({
                      ...prev,
                      flow: {
                        ...prev.flow,
                        autoStartPomodoro: isChecked,
                      },
                    }));
                  }}
                />
              </div>
            </li>

            <li>
              <div className="flex w-full justify-between rounded p-2 hover:bg-muted/20">
                <p>Auto start break</p>{" "}
                <Switch
                  checked={config.flow.autoStartBreaks}
                  onChange={(isChecked) => {
                    updateConfig((prev) => ({
                      ...prev,
                      flow: {
                        ...prev.flow,
                        autoStartBreaks: isChecked,
                      },
                    }));
                  }}
                />
              </div>
            </li>

            <li>
              <div className="flex w-full items-center justify-between rounded p-2 hover:bg-muted/20">
                <p>Pomodoro duration</p>{" "}
                <Select
                  options={pomodoroDurationChoices}
                  value={config.timer.pomodoroDuration}
                  onChange={(value: number) =>
                    updateConfig((prev) => ({
                      ...prev,
                      timer: { ...prev.timer, pomodoroDuration: value },
                    }))
                  }
                />
              </div>
            </li>

            <li>
              <div className="flex w-full items-center justify-between rounded p-2 hover:bg-muted/20">
                <p>Short break duration</p>{" "}
                <Select
                  options={shortBreakDurationChoices}
                  value={config.timer.shortBreakDuration}
                  onChange={(value: number) =>
                    updateConfig((prev) => ({
                      ...prev,
                      timer: { ...prev.timer, shortBreakDuration: value },
                    }))
                  }
                />
              </div>
            </li>

            <li>
              <div className="flex w-full items-center justify-between rounded p-2 hover:bg-muted/20">
                <p>Long break duration</p>{" "}
                <Select
                  options={longBreakDurationChoices}
                  value={config.timer.longBreakDuration}
                  onChange={(value: number) =>
                    updateConfig((prev) => ({
                      ...prev,
                      timer: { ...prev.timer, longBreakDuration: value },
                    }))
                  }
                />
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ConfigMenu;
