"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

type Props = {
  triggerThemeSwitch?: () => void;
};

export function SimpleThemeToggle({ triggerThemeSwitch }: Props) {
  const { setTheme, resolvedTheme } = useTheme();
  const [savedTheme, setSavedTheme] = React.useState<string | undefined>(undefined);

  const onToggle = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
    console.log("Toggling theme", resolvedTheme);
    if (triggerThemeSwitch) triggerThemeSwitch();
  }

  React.useEffect(() => {
    setSavedTheme(resolvedTheme);

    return () => {
      setTheme(savedTheme ? savedTheme : (resolvedTheme as string));
    };
  }, []);

  return (
    <Button variant="outline" size="icon" onClick={onToggle}>
      {resolvedTheme === "dark" ? <MoonIcon className="h-[1.2rem] w-[1.2rem]" /> : <SunIcon className="h-[1.2rem] w-[1.2rem]" />}
    </Button>
  );
}
