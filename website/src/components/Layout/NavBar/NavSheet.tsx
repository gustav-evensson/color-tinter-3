"use client";

import ColorTinterIcon from "@/components/icons/ColorTinterIcon";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import path from "path";

export function NavSheet() {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild className="block text-muted-foreground md:hidden">
        <Button variant="ghost" size="icon" className="flex items-center justify-center">
          <HamburgerMenuIcon className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ColorTinterIcon />
            <h5 className="font-poppins">ColorTinter</h5>
          </SheetTitle>
        </SheetHeader>
        <ScrollArea className="px-4 py-4 pl-8">
          <ul>
            <li>
              <SheetClose asChild>
                <Link
                  href="/"
                  className={cn("py-1.5 block text-muted-foreground", {
                    "text-foreground": pathname === "/",
                  })}
                >
                  Home
                </Link>
              </SheetClose>
            </li>
            <li>
              <p className="pb-1 pt-2 text-lg">Manipulation</p>
            </li>
            <li>
              <SheetClose asChild>
                <Link
                  href="/tools/manipulation/tints"
                  className={cn("py-1 block text-muted-foreground", {
                    "text-foreground": pathname.includes("/tints"),
                  })}
                >
                  Tints
                </Link>
              </SheetClose>
            </li>
            <li>
              <SheetClose asChild>
                <Link
                  href="/tools/manipulation/shades"
                  className={cn("py-1 block text-muted-foreground", {
                    "text-foreground": pathname.includes("/shades"),
                  })}
                >
                  Shades
                </Link>
              </SheetClose>
            </li>
            <li>
              <SheetClose asChild>
                <Link
                  href="/tools/manipulation/tones"
                  className={cn("py-1 block text-muted-foreground", {
                    "text-foreground": pathname.includes("/tones"),
                  })}
                >
                  Tones
                </Link>
              </SheetClose>
            </li>
            <li>
              <p className="pb-1 pt-2 text-lg">Conversion</p>
            </li>
            <li>
              <SheetClose asChild>
                <Link
                  href="/tools/conversion/converter"
                  className={cn("py-1 block text-muted-foreground", {
                    "text-foreground": pathname.includes("/converter"),
                  })}
                >
                  Converter
                </Link>
              </SheetClose>
            </li>
            <li>
              <p className="pb-1 pt-2 text-lg">Other</p>
            </li>
            <li>
              <SheetClose asChild>
                <Link
                  href="/tools/other-tools/shadcn-colors"
                  className={cn("py-1 block text-muted-foreground", {
                    "text-foreground": pathname.includes("/shadcn-colors"),
                  })}
                >
                  Shadcn/colors
                </Link>
              </SheetClose>
            </li>
            <li>
              <SheetClose asChild>
                <Link
                  href="/tools/other-tools/100-900"
                  className={cn("py-1 block text-muted-foreground", {
                    "text-foreground": pathname.includes("/100-900"),
                  })}
                >
                  100-900
                </Link>
              </SheetClose>
            </li>
          </ul>
          {/* <ul>
            <li>
              <SheetClose asChild>
                <Link href="/tools/tints" className="block text-muted-foreground py-1">
                  Tints
                </Link>
              </SheetClose>
            </li>
            <li>
              <SheetClose asChild>
                <Link href="/tools/shades" className="block text-muted-foreground py-1">
                  Shades
                </Link>
              </SheetClose>
            </li>
            <li>
              <SheetClose asChild>
                <Link href="/tools/tones" className="block text-muted-foreground py-1">
                  Tones
                </Link>
              </SheetClose>
            </li>
          </ul> */}
        </ScrollArea>
        {/* <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter> */}
      </SheetContent>
    </Sheet>
  );
}
