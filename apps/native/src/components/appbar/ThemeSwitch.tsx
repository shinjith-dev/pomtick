import  { ReactNode, useEffect, useRef, useState } from "react";
import {
  IconMoonStars,
  IconMoon,
  IconSun,
  IconPalette,
  IconChevronDown,
} from "@tabler/icons-react";
import { TTheme } from "../../../lib/types";

type Theme = { icon: ReactNode; label: string; theme: TTheme };

const themes: Theme[] = [
  { icon: <IconMoon size={12} />, label: "Rosé Pine", theme: "main" },
  { icon: <IconMoonStars size={12} />, label: "Rosé Pine Moon", theme: "moon" },
  { icon: <IconSun size={12} />, label: "Rosé Pine Dawn", theme: "dawn" },
];

const ThemeSwitch = () => {
  const [expanded, setExpand] = useState<boolean>(false);
  const [activeTheme, setTheme] = useState<TTheme>("main");
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

  useEffect(() => {
    const defaultTheme = document.documentElement.getAttribute("data-theme");
    if (defaultTheme) setTheme(defaultTheme as TTheme);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", activeTheme);
  }, [activeTheme]);

  const handleThemeChange = (theme: TTheme) => {
    setTheme(theme);
    setExpand(false);
  };

  return (
    <div ref={ref} className="group font-medium sm:relative">
      <button
        onClick={() => setExpand((prev) => !prev)}
        className="flex items-center gap-0.5 rounded-md p-1.5 group-hover:bg-muted/20"
      >
        <IconPalette size={20} />
        <IconChevronDown
          size={12}
          className={`transition-all ${expanded ? "-rotate-180" : "rotate-0"}`}
        />
      </button>
      {expanded && (
        <div className="absolute left-0 top-12 z-20 w-screen rounded-md px-4 py-2">
          <ul className="space-y-1 rounded-md bg-surface/75 blur-effect p-2 shadow-2xl">
            {themes.map((theme) => (
              <li key={theme.label} className="w-full text-nowrap">
                <button
                  onClick={() => handleThemeChange(theme.theme)}
                  className={`flex w-full items-center gap-1 rounded text-sm p-2 text-left hover:bg-muted/20 ${theme.theme === activeTheme && "text-subtle"}`}
                >
                  {theme.icon}
                  <span>{theme.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ThemeSwitch;
