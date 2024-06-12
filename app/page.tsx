export default function Home() {
  return (
    <main className="flex min-h-screen bg-base text-text">
      <div id="nuotron">
        <div className="ellipse"></div>
        <div className="dot"></div>
      </div>
      <a
        id="text"
        href="https://github.com/shinjith-dev/pomtick-web"
        target="_blank"
      >
        <div className="hover">
          <div>Project is under construction</div>
          <div>Hover here for details</div>
        </div>
        <div className="website text-subtle">
          The timer that makes you tick.
        </div>
        <div className="nuotron">Pomtick</div>
        <div className="agency">Pomodoro</div>
      </a>

      <div className="absolute bottom-0 right-0 left-0 text-center text-xs mb-4 text-subtle">
        <p className="mx-auto">
          This animation is a modification of this{" "}
          <a
            href="https://codepen.io/yahiarefaiea/pen/YjyZLm"
            target="_blank"
            referrerPolicy="no-referrer"
            className="underline"
          >
            CodePen by Yahia Refaiea
          </a>
          . All credits & rights goes to the respective owner.
        </p>
      </div>
    </main>
  );
}
