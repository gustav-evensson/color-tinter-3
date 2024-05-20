"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Share2Icon } from "@radix-ui/react-icons";
import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "../ui/drawer";

const exportTypes = ["Tailwind", "SCSS", "CSS", "JavaScript"];

export function ExportDialog() {
  const [exportType, setExportType] = useState<string>("Tailwind");
  const [isOpen, setIsOpen] = useState(false);

  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop)
    return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button variant="outline" size="icon">
            <Share2Icon />
          </Button>
        </DialogTrigger>
        <DialogContent className="w-full rounded-md">
          <DialogHeader>
            <DialogTitle className="mb-2">Export spectrum</DialogTitle>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-fit mx-auto sm:mx-0">
                  {exportType}
                  <ChevronDownIcon className="size-4 ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-full" align="start">
                {exportTypes.map((type) => (
                  <DropdownMenuItem key={type} onSelect={() => setExportType(type)}>
                    {type}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </DialogHeader>
          <div className="rounded-md h-44 bg-secondary">{/* Code here */}</div>
          <DialogFooter>
            <Button>Export</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  else
    return (
      <Drawer open={isOpen} onOpenChange={setIsOpen}>
        <DrawerTrigger asChild>
          <Button variant="outline" size="icon">
            <Share2Icon />
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle className="text-left mb-2">Export spectrum</DrawerTitle>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="w-fit">
                    {exportType}
                    <ChevronDownIcon className="size-4 ml-2" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full" align="start">
                  {exportTypes.map((type) => (
                    <DropdownMenuItem key={type} onSelect={() => setExportType(type)}>
                      {type}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </DrawerHeader>
            <div className="rounded-md h-44 bg-secondary mx-4">{/* Code here */}</div>
            <DrawerFooter>
              <DrawerClose asChild>
                <Button variant="default" className="w-full">Export</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    );
}
