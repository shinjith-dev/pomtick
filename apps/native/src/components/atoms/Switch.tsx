type Props = { checked?: boolean; onChange: (isChecked: boolean) => void };

const Switch = ({ checked = false, onChange }: Props) => {
  return (
    <button onClick={() => onChange(!checked)} className="flex gap-2">
      <p>{checked ? "Yes" : "No"}</p>
      <div className="h-5 w-8 rounded-full bg-pine/50 p-0.5">
        <div
          className={`h-4 w-4 rounded-full bg-text transition-all duration-300 ${checked ? "translate-x-3" : "translate-x-0"}`}
        />
      </div>
    </button>
  );
};

export default Switch;
