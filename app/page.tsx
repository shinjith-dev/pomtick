"use client";
import { useState } from "react";

import { TStatus } from "@/lib/types";
import Background from "@/components/Background";
import TimerLayer from "@/components/TimerLayer";

export default function Home() {
  const [status, setStatus] = useState<TStatus>("playing");

  return (
    <main className="relative h-full w-full bg-base">
      <div className="relative mx-auto flex min-h-screen w-screen max-w-7xl items-center justify-center text-center text-text">
        <Background status={status} />

        <TimerLayer status={status} setStatus={setStatus} />
      </div>
    </main>
  );
}
