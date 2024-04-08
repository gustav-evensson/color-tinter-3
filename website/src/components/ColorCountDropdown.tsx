"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { useState } from "react";
import { useColorCount, setColorCount } from "@/redux/tools/store";
import { useDispatch } from "react-redux";

const countOptions = [2, 3, 4, 5, 6, 7, 8, 9, 10];

export function ColorCountDropdown() {

  const dispatch = useDispatch();

  const colorCount = useColorCount() as number;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="px-3">
          {colorCount}
          <span className="ml-1">colors</span>
          <ChevronDownIcon className="ml-2" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <ScrollArea className="max-h-52 overflow-scroll">
          <div>
            {countOptions.map((count) => (
              <DropdownMenuItem key={count} onSelect={() => dispatch(setColorCount(count))}>
                {count}
              </DropdownMenuItem>
            ))}
          </div>
        </ScrollArea>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
