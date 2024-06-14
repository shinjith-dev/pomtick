import { josephinSans } from "@/lib/fonts";
import Link from "next/link";
import React from "react";
import ThemeSwitch from "./ThemeSwitch";
import ConfigMenu from "./ConfigMenu";
import { IconHelp } from "@tabler/icons-react";

type Props = { hide: boolean };

const Navbar = ({ hide }: Props) => {
  return (
    <nav
      className={`relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between p-4 text-sm text-text transition-all duration-500 sm:p-5 ${hide ? "-translate-y-8 opacity-0" : "translate-y-0 opacity-100"}`}
    >
      <Link
        href={"/"}
        className={`${josephinSans.className} text-lg font-bold sm:text-xl md:text-2xl`}
      >
        Pomtick
      </Link>

      <ul className="flex gap-2 sm:gap-3 md:gap-4 items-center">
        <li>
          <ThemeSwitch />
        </li>
        <li>
          <ConfigMenu />
        </li>
        <li>
          <Link
            href={
              "https://github.com/shinjith-dev/pomtick-web?tab=readme-ov-file#what-is-pomodoro"
            }
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 hover:bg-muted/20 block rounded-md"
          >
            <IconHelp size={24} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
