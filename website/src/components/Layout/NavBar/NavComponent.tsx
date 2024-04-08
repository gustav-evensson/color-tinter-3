"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import ColorTinterIcon from "@/components/icons/ColorTinterIcon"
import { usePathname } from "next/navigation"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

export function NavigationComponent() {

  const pathname = usePathname()

  return (
    <NavigationMenu>
      <NavigationMenuList className="flex">
        <NavigationMenuItem>
          <NavigationMenuTrigger className={cn("text-foreground/50 bg-transparent hover:text-foreground/75 ring-foreground focus-visible:ring-1 transition p-2 h-fit focus:bg-transparent hover:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent", {
            "text-foreground": pathname.includes("/tools"),
          })}>Tools</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <ListItem href="/tools/tints" title="Tints">
                Increasing the lightness value of a color.
              </ListItem>
              <ListItem href="/tools/shades" title="Shades">
                Decreasing the lightness value of a color.
              </ListItem>
              <ListItem href="/tools/tones" title="Tones">
                Mixing a color with grey.
              </ListItem>
              <ListItem href="/tools/converter" title="Color converter">
                Convert colors to different formats.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* <NavigationMenuItem>
          <NavigationMenuTrigger className="text-foreground/50 bg-transparent hover:text-foreground/75 ring-foreground focus-visible:ring-1 transition p-2 h-fit focus:bg-transparent hover:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent">Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem> */}
        <NavigationMenuItem >
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className="text-foreground/50 rounded-md p-2 hover:text-foreground/75 ring-foreground focus-visible:ring-1 outline-none transition text-sm">
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
