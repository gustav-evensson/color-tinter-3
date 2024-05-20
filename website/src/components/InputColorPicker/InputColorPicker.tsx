"use client";

import "./InputColorPicker.css";

import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { PaletteIcon } from "lucide-react";
import { useState } from "react";

import { setColor, useColor } from "@/redux/store";
import type { HslaColor } from "react-colorful";
import { useDispatch } from "react-redux";

import { HexColorInput, HexColorPicker } from "react-colorful";
import chroma from "chroma-js";
import { formatHex } from "@/lib/colors/colorFormat";

export default function InputColorPicker() {

  console.log("InputColorPicker");

  const dispatch = useDispatch();

  const color = useColor() as HslaColor;

  // const hexColor = formatHex(color);

  const convertColor = (color: string) => {
    if (!chroma.valid(color)) return;
    const hslArray = chroma(color).hsl();

    const validArray = hslArray.map((val) => {
      if (!isNaN(val)) {
        return val;
      }
      return 0;
    });

    dispatch(setColor({
      h: validArray[0],
      s: validArray[1] * 100,
      l: validArray[2] * 100,
      a: 1
    }))
  }

  return (
    <div className="border rounded-md flex items-center">
      <Popover>
        <PopoverTrigger asChild>
          <button className="p-2 rounded-md group">
            <PaletteIcon size={16} className="transition group-hover:scale-110" />
          </button>
        </PopoverTrigger>
        <PopoverContent align="center" className="w-fit">
          <HexColorPicker className="color-picker" color={formatHex(color)} onChange={convertColor} />
        </PopoverContent>
      </Popover>
      #<HexColorInput className="w-24 uppercase outline-none bg-transparent" color={formatHex(color)} onChange={convertColor} />
      <div className="size-4 rounded-full mx-3 border" style={{ backgroundColor: formatHex(color) }} />
    </div>
  );
}
