import ThemeSwitch from "./ThemeSwitch";
import { IconX } from "@tabler/icons-react";
import { appWindow } from "@tauri-apps/api/window";

type Props = {
  hide: boolean;
};

const Appbar = ({}: Props) => {
  const closeWindow = async () => {
    appWindow.close();
  };

  return (
    <nav
      className={`relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between pt-4 px-5 text-sm text-text transition-all duration-500  translate-y-0 opacity-100`}
    >
      <h4 className={`text-lg font-bold sm:text-xl md:text-2xl`}>Pomtick</h4>

      <ul className="flex items-center gap-2">
        <li>
          <ThemeSwitch />
        </li>
        {/* <li>
          <ConfigMenu config={config} updateConfig={updateConfig} />
        </li> */}
        <li>
          <button
            className="rounded-md p-1.5 hover:bg-love/25"
            onClick={closeWindow}
          >
            <IconX size={20} />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Appbar;
