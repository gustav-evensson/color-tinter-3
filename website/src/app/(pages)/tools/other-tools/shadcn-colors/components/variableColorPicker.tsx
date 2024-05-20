"use client";

import { useState } from "react";

import { Theme, themeGroups } from "@/lib/colors/themes";
import ColorPicker from "@/components/ColorPicker/ColorPicker";
import { Button } from "@/components/ui/button";
import { HslaColor } from "react-colorful";
import { formatHex } from "@/lib/colors/colorFormat";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { getByString } from "@/lib/utils";

type Props = {
  currentTheme: Theme;
  setCurrentTheme: (theme: Theme) => void;
}

export default function VariableColorPicker({ currentTheme, setCurrentTheme }: Props) {
  const [currentGroup, setCurrentGroup] = useState<any>("base");

  const getColorFromTheme = () => {
    
  }

  return (
    <div className="border rounded-md p-3 w-96">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="px-3">
            {getByString(themeGroups, currentGroup)?.name}
            <ChevronDownIcon className="ml-2" />
          </Button> 
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          {Object.keys(themeGroups).map((group) => (
            <DropdownMenuItem key={group} onSelect={() => setCurrentGroup(group)}>
              {group}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <div className="flex gap-2 mt-3 w-full">
        {getByString(themeGroups, currentGroup)?.colors.map((color: any) => (
          <div key={color.name} className="w-full">
            <span className="capitalize block mb-2 text-sm">{color.name}</span>
            <ColorPicker color={{ h: 0, s: 100, l: 50, a: 1 }} onChange={(val: HslaColor) => console.log(val)}>
              <Button variant="outline" className="w-full flex items-center justify-start">
                <div className="size-4 rounded-full border mr-2" style={{ backgroundColor: formatHex({ h: 0, s: 100, l: 50, a: 1 }) }}></div>
                {/* {formatHex({...getByString(currentTheme.colors.dark, getByString(themeGroups, currentGroup) as unknown as string), a: 1})} */}
              </Button>
            </ColorPicker>
          </div>
        ))}
      </div>
    </div>
  );
}
