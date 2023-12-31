import React, { FunctionComponent } from "react";
import { IconProps } from "./types";
import { ColorPalette } from "../../styles";

export const ArrowLeftIcon: FunctionComponent<IconProps> = ({
  width = "1.5rem",
  height = "1.5rem",
  color,
}) => {
  return (
    <svg style={{border:`0.3px solid ${ColorPalette["gray-400"]}`,borderRadius:'6px'}}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.75 19.5L8.25 12L15.75 4.5"
        stroke={color || "currentColor"}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
