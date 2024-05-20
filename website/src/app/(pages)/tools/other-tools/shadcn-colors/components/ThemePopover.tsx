"use client";

import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { themeArray, themes, type Theme } from "@/lib/colors/themes";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useState } from "react";
import { radiusArray, type Radius } from "@/lib/colors/themes";

type ThemePopoverProps = {
  currentTheme: Theme;
  setTheme: (theme: Theme) => void;
};

export default function ThemePopover({ currentTheme, setTheme }: ThemePopoverProps) {
  const { resolvedTheme } = useTheme();
  const [currentRadius, setCurrentRadius] = useState<Radius>("0.5");
  const [mode, setMode] = useState<"light" | "dark">("light");

  const setTotalTheme = (theme: Theme, radius?: Radius) => {
    if (radius) setCurrentRadius(radius);
    if (radius) setTheme({ ...theme, radius: radius });
    else setTheme({ ...theme, radius: currentRadius });
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant={"outline"}>
          <div
            className="size-3.5 rounded-full mr-2"
            style={{ backgroundColor: resolvedTheme === "dark" ? currentTheme.displayColor.dark : currentTheme.displayColor.light }}
          />
          Customize
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-fit">
        <h3>Customize</h3>
        <p className="text-muted-foreground text-sm">Select a preset theme to customize</p>
        <span className="text-sm mt-4 inline-block mb-2">Color</span>
        <div className="grid gap-2 grid-cols-3 grid-rows-4">
          {themeArray.map((theme) => (
            <Button
              key={theme}
              className={cn("rounded-md p-2 text-sm flex items-center justify-start", {
                "border-foreground": theme === currentTheme.name.toLocaleLowerCase(),
              })}
              variant="outline"
              onClick={() => setTotalTheme(themes[theme])}
            >
              <div
                className="size-4 rounded-full mr-2 flex items-center justify-center"
                style={{ backgroundColor: resolvedTheme === "dark" ? themes[theme].displayColor.dark : themes[theme].displayColor.dark }}
              />
              {theme.charAt(0).toUpperCase() + theme.slice(1)}
            </Button>
          ))}
        </div>
        <span className="text-sm mt-4 inline-block mb-2">Radius</span>
        <div className="flex items-center gap-2">
          {radiusArray.map((radius) => (
            <Button
              key={radius}
              className={cn("rounded-md p-2 text-sm w-full", {
                "border-foreground": radius === currentRadius,
              })}
              variant="outline"
              onClick={() => setTotalTheme(currentTheme, radius)}
            >
              {radius}
            </Button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
