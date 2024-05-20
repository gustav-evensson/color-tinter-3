'use client'

import { useColor } from "@/redux/store";
import { HslaColor } from "react-colorful";

export default function TestDisplay() {

  const color = useColor() as HslaColor;

  return (
    <div>
      <span>{JSON.stringify(color)}</span>
    </div>
  )
}