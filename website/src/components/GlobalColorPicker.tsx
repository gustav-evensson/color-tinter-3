"use client";

import { Button } from "./ui/button";
import { useState } from "react";
import { PaletteIcon } from "lucide-react";
import ColorPicker from "./ColorPicker/ColorPicker";
import { formatHex } from "@/lib/colorFormat";
import { useColor, setColor } from "@/redux/global/store";
import type { HslaColor } from "react-colorful";
import { useDispatch } from "react-redux";

export default function GlobalColorPicker() {

  const dispatch = useDispatch()

  const color = useColor() as HslaColor

  // const [color, setColor] = useState({
  //   h: 0,
  //   s: 0,
  //   l: 0,
  //   a: 1,
  // });

  return (
    <div className="flex items-center gap-2">
      <ColorPicker color={color} hideAlpha onChange={(val) => dispatch(setColor(val))}>
        <Button variant="outline" className="flex items-center justify-start px-2 gap-2 w-[170px]">
          <PaletteIcon size={20} />
          <span className="uppercase">{formatHex(color)}</span>
          <div className="size-5 rounded-full ml-auto border" style={{ backgroundColor: formatHex(color) }}></div>
        </Button>
      </ColorPicker>
    </div>
  );
}
