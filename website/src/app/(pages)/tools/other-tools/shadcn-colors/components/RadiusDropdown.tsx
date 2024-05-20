"use client";

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Radius } from "@/lib/colors/themes";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { ScrollArea } from "@radix-ui/react-scroll-area";

const countOptions: Radius[] = ["0", "0.3", "0.5", "0.75", "1.0"];

type RadiusSelectProps = {
  currentRadius: Radius;
  setRadius: (radius: Radius) => void;
};

export default function RadiusDropdown({ currentRadius, setRadius }: RadiusSelectProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="px-3 min-w-36 flex items-center justify-between">
          <div>
            <span className="mr-2">Radius:</span>
            {currentRadius}
          </div>
          <ChevronDownIcon className="ml-2" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <ScrollArea className="max-h-52 overflow-scroll">
          <div>
            {countOptions.map((count) => (
              <DropdownMenuItem key={count} onSelect={() => setRadius(count)}>
                {count}
              </DropdownMenuItem>
            ))}
          </div>
        </ScrollArea>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
