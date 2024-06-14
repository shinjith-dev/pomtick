import React from "react";
import { IconAdjustmentsHorizontal } from "@tabler/icons-react";

type Props = {};

const ConfigMenu = (props: Props) => {
  return (
    <button className="p-1.5 hover:bg-muted/20 rounded-md">
      <IconAdjustmentsHorizontal size={24} />
    </button>
  );
};

export default ConfigMenu;
