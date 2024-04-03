"use client";

import './ColorPicker.css';

import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { HslaColorPicker, type HslaColor } from "react-colorful";
import { cn } from '@/lib/utils';

type ColorPickerProps = {
  color: HslaColor;
  onChange: (color: HslaColor) => void;
  children: React.ReactNode;
  hideAlpha?: boolean;
};

export default function ColorPicker({ color, onChange, children, hideAlpha = false }: ColorPickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent className="mx-4 w-fit">
        <div className={cn("color-picker", {
          'color-picker-hide-alpha': hideAlpha,
        })}>
          <HslaColorPicker color={color} onChange={(val) => onChange(val)} />
        </div>
      </PopoverContent>
    </Popover>
  );
}
