import ColorTinterIcon from "@/components/icons/ColorTinterIcon";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "../../ThemeToggle";
import Link from "next/link";
import NavLinks from "./NavLinks";
import { Button } from "@/components/ui/button";
import GitHubIcon from "@/components/icons/GitHubIcon";
import Mwp from "../MaxWidthProvider";

export default function NavBar() {
  return (
    <nav className="fixed w-full top-0 left-0 bg-background/70 backdrop-blur-md border-b h-14 z-50">
      <Mwp className="flex items-center justify-between h-full">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center group">
            <div className="transition-all duration-300">
              <ColorTinterIcon size={28} />
            </div>
            {/* <Separator orientation="vertical" className="mx-2 h-5 rotate-12" /> */}
            <span className={cn("text-lg ml-2 font-poppins")}>
              <span>Color</span>
              <span className="inline-block transition-all group-hover:translate-x-1">Tinter</span>
            </span>
          </Link>
          <NavLinks />
        </div>
        <div className="flex items-center gap-2">
          <Button size="icon" variant="ghost" asChild>
            <a href="https://github.com/gustav-evensson/color-tinter-3">
              <GitHubIcon />
            </a>
          </Button>
          <ThemeToggle />
        </div>
      </Mwp>
    </nav>
  );
}
