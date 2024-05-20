"use client";

import { Button } from "./ui/button";
import { useState } from "react";
import { PaletteIcon } from "lucide-react";
import ColorPicker from "./ColorPicker/ColorPicker";
import { formatHex } from "@/lib/colors/colorFormat";
import { useColor, setColor } from "@/redux/store";
import type { HslaColor } from "react-colorful";
import { useDispatch } from "react-redux";
import InputColorPicker from "./InputColorPicker/InputColorPicker";

import chroma from "chroma-js";

export default function GlobalColorPicker() {
  const dispatch = useDispatch();

  const color = useColor() as HslaColor;

  const convertToHsla = (color: string) => {
    if (!chroma.valid(color)) return;
    const hslArray = chroma(color).hsl();

    const validArray = hslArray.map((val) => {
      if (!isNaN(val)) {
        return val;
      }
      return 0;
    });

    console.log(validArray)

    dispatch(setColor({
      h: validArray[0],
      s: validArray[1],
      l: validArray[2],
      a: 1
    }))
  };

  return (
    <div className="flex items-center gap-2">
      <InputColorPicker />
    </div>
  );
}
