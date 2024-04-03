"use client";

import "./ColorCircle.css";

export default function ColoCircle() {
  return (
    <div className="w-full max-w-[512px] aspect-square rounded-full overflow-hidden shadow-2xl relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 z-10 size-6">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 0.5C15.7835 0.5 19.5258 0.675986 23.2191 1.0202L12 22.904L0.780851 1.0202C4.47423 0.675986 8.21652 0.5 12 0.5Z"
            fill="white"
            fillOpacity="1"
            stroke="white"
            strokeLinecap="round"
            // className="fill-foreground stroke-foreground"
          />
        </svg>
      </div>
      <div className="absolute inset-[-100px] aspect-square rounded-full animate-rotate color-circle-even overflow-hidden blur-md dark:opacity-70"></div>
    </div>
  );
}
