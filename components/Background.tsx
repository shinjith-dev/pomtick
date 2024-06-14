import React from "react";
// import bg from "@/assets/images/bg.jpg";
import { TStatus } from "@/lib/types";

type Props = { status: TStatus; isBreak: boolean };

const Background = ({ status, isBreak }: Props) => {
  return (
    <>
      {/* <Image src={bg} fill alt="bg" className="object-cover" /> */}
      <div
        className={
          "absolute left-0 top-0 h-full w-full transition-all duration-700"
        }
      />
      <div
        className={`bg-radial-gradient-in absolute left-0 top-0 h-full w-full`}
      />
      <div
        className={`bg-radial-gradient-out absolute left-0 top-0 h-full w-full transition-all duration-700 ${isBreak ? "opacity-100" : "opacity-0"}`}
      />
      <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-b from-base to-[transparent] to-[20%]" />
      <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-t from-base to-[transparent] to-[15%]" />
    </>
  );
};

export default Background;
