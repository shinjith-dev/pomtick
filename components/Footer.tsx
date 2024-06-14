import Link from "next/link";
import React from "react";

type Props = { hide: boolean };

const Footer = ({ hide }: Props) => {
  return (
    <footer
      className={`mx-auto flex w-full max-w-7xl items-center justify-between p-3 text-xs text-subtle transition-all duration-500 sm:text-sm ${hide ? "translate-y-8 opacity-0" : "translate-y-0 opacity-100"}`}
    >
      <p>&copy; Copyright {new Date().getFullYear()} Pomtick</p>

      <div>
        <Link
          href={"https://github.com/shinjith-dev/pomtick-web"}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-text"
        >
          Github
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
