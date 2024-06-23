import React, { ReactNode, useEffect, useRef, useState } from "react";
import {
  IconMoonStars,
  IconMoon,
  IconSun,
  IconPalette,
  IconChevronDown,
} from "@tabler/icons-react";
import { TTheme } from "../../lib/types";

type Props = {};

type Theme = { icon: ReactNode; label: string; theme: TTheme };

const themes: Theme[] = [
  { icon: <IconMoon size={14} />, label: "Rosé Pine", theme: "default" },
  { icon: <IconMoonStars size={14} />, label: "Rosé Pine Moon", theme: "moon" },
  { icon: <IconSun size={14} />, label: "Rosé Pine Dawn", theme: "dawn" },
];

const ThemeSwitch = (props: Props) => {
  const [expanded, setExpand] = useState<boolean>(false);
  const [activeTheme, setTheme] = useState<TTheme>("default");
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
        <IconPalette size={24} />
        <IconChevronDown
          size={16}
          className={`transition-all ${expanded ? "-rotate-180" : "rotate-0"}`}
        />
      </button>
      {expanded && (
        <div className="absolute left-0 top-14 z-20 w-screen rounded-md px-4 py-2 sm:-left-2 sm:top-8 sm:w-auto">
          <ul className="space-y-1 rounded-md bg-surface p-2 shadow-md">
            {themes.map((theme) => (
              <li key={theme.label} className="w-full text-nowrap">
                <button
                  onClick={() => handleThemeChange(theme.theme)}
                  className={`flex w-full items-center gap-1 rounded p-2 text-left hover:bg-muted/20 ${theme.theme === activeTheme && "text-subtle"}`}
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
