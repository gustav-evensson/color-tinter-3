"use client";

import { formatHex } from "@/lib/colors/colorFormat";
import { pickSpectrum } from "@/lib/colors/manipulations";
import { useColor, useColorCount, setColor } from "@/redux/store";
import { useDispatch } from "react-redux";
import { HslaColor } from "react-colorful";
import { Button } from "./ui/button";
import { CheckIcon, CopyIcon, Crosshair2Icon } from "@radix-ui/react-icons";
import { hex, hsl } from "chroma-js";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { readableColor, readableColorIsBlack } from "color2k";

type DisplayProps = {
  spectrum: string;
};

export default function ColorDisplay({ spectrum }: DisplayProps) {
  const color = useColor();
  const colorCount = useColorCount();

  if (color && colorCount)
    return (
      <div className="flex flex-col md:flex-row gap-1">
        <Renderer color={color} count={colorCount} spectrum={spectrum} />
      </div>
    );
}

type RendererProps = {
  color: HslaColor;
  count: number;
  spectrum: string;
};

function Renderer({ color, count, spectrum }: RendererProps) {
  const colors = pickSpectrum(color, count, spectrum);

  const hexColors = colors.map((color) => formatHex(color));
  const colorArray = colors.map((color) => {
    return {
      hslaColor: color,
      hexColor: formatHex(color),
    }
  });

  return (
    <>
      {colorArray.map((color, index) => (
        <ColorBlock key={index} hslaColor={color.hslaColor} color={color.hexColor} />
      ))}
    </>
  );
}

type ColorBlockProps = {
  hslaColor: HslaColor;
  color: string;
};

import { getReadableColor } from "@/lib/colors/readability";

function ColorBlock({ hslaColor, color }: ColorBlockProps) {

  // States to handle showing the check icon for a while after the button is pressed
  const [hasCopied, setHasCopied] = useState(false);
  const [hasSetMain, setHasSetMain] = useState(false);

  const readable = getReadableColor(color);
  const dispatch = useDispatch();

  const copyHex = () => {
    setHasCopied(true);
    navigator.clipboard.writeText(color);

    setTimeout(() => {
      setHasCopied(false);
    }, 1500);
  };

  const setMainColor = () => {
    setHasSetMain(true);
    dispatch(setColor(hslaColor));

    setTimeout(() => {
      setHasSetMain(false);
    }, 1500);
  };

  return (
    <div className="w-full overflow-hidden group rounded" style={{ backgroundColor: color }}>
      <div className="h-full w-full flex flex-row justify-center md:flex-col items-center py-4 md:py-16 gap-4 opacity-100 md:opacity-0 focus-within:opacity-100 transition group-hover:opacity-100">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => copyHex()}
                className={cn("hover:bg-white/10", {
                  "hover:bg-black/10": readable.isBlack,
                })}
              >
                <CheckIcon
                  style={{ color: readable.color }}
                  className={cn("hidden", {
                    "block animate-in-scale": hasCopied,
                  })}
                />
                <CopyIcon
                  style={{ color: readable.color }}
                  className={cn("block", {
                    hidden: hasCopied,
                  })}
                />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Copy Hex</p>
            </TooltipContent>
          </Tooltip>
          <span style={{ color: readable.color }} className="uppercase text-sm md:order-last">
            {color.split("#")[1]}
          </span>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMainColor()}
                className={cn("hover:bg-white/10", {
                  "hover:bg-black/10": readable.isBlack,
                })}
              >
                <CheckIcon
                  style={{ color: readable.color }}
                  className={cn("hidden", {
                    "block animate-in-scale": hasSetMain,
                  })}
                />
                <Crosshair2Icon
                  style={{ color: readable.color }}
                  className={cn("block", {
                    hidden: hasSetMain,
                  })}
                />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Set as main color</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
}
