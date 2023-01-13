import * as React from "react";

type Props = {
  /** The size of the icon, 24px is default to match standard icons */
  size?: number;
  /** The color of the icon, defaults to the current text color */
  color?: string;
  /* Whether the safe area should be removed and have graphic across full size */
  cover?: boolean;
};

export default function OutlineIcon({
  size = 24,
  cover,
  color = "currentColor",
}: Props) {
  return (
      <svg
      fill={color}
      width={size}
      height={size}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
    >
      <path
        fill="#d5e2f4"
        d="M19 32h26v14c0 8-8.191 12-8.191 12H27s-8-4-8-12V32z"
        data-name="layer1"
      />
      <path
        opacity=".18"
        fill="#101129"
        d="M24 48V32h-5v14c0 8 8 12 8 12h2.1A13.168 13.168 0 0 1 24 48z"
        data-name="opacity"
      />
      <path
        fill="#d5e2f4"
        d="M58 60a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2 2 2 0 0 1 2-2h48a2 2 0 0 1 2 2z"
        data-name="layer1"
      />
      <path
        opacity=".5"
        fill="#fff"
        d="M36.648 57.355a10.383 10.383 0 0 0 3.709-3.461A11.483 11.483 0 0 0 42 48V32h-4v20a11.338 11.338 0 0 1-1.352 5.355z"
        data-name="opacity"
      />
      <path
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
        stroke="#2f446a"
        fill="none"
        d="M19 32h26v14c0 8-8.191 12-8.191 12H27s-8-4-8-12V32zm18-4c0-12 12-14 12-26M27 28c0-6.125 6-8.9 6-14m12 20h2a6 6 0 0 1 0 12h-2m13 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2 2 2 0 0 1 2-2h48a2 2 0 0 1 2 2z"
        data-name="stroke"
      />
    </svg>
  );
}
