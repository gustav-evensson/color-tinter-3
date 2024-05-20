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
import { usePathname } from "next/navigation"

const manipulations: { title: string; href: string, description: string }[] = [
  {
    title: "Tints",
    href: "/tools/manipulation/tints",
    description: "Increasing the lightness value of a color.",
  },
  {
    title: "Shades",
    href: "/tools/manipulation/shades",
    description: "Decreasing the lightness value of a color.",
  },
  {
    title: "Tones",
    href: "/tools/manipulation/tones",
    description: "Mixing a color with grey.",
  },
]

const conversions: { title: string; href: string, description: string }[] = [
  {
    title: "Color converter",
    href: "/tools/conversion/converter",
    description: "Convert between different color formats.",
  },
]

const other: { title: string; href: string, description: string }[] = [
  {
    title: "Shadcn/colors",
    href: "/tools/other-tools/shadcn-colors",
    description: "A more advanced theme customization tool for shadcn/ui.",
  },
  {
    title: "100-900",
    href: "/tools/other-tools/100-900",
    description: "Generate a monochrome color palette based on a single color.",
  }
]

export function NavigationComponent() {

  const pathname = usePathname()

  return (
    <NavigationMenu>
      <NavigationMenuList className="flex">
        <NavigationMenuItem>
        <NavigationMenuTrigger className={cn("text-foreground/50 bg-transparent hover:text-foreground/75 ring-foreground focus-visible:ring-1 transition p-2 h-fit focus:bg-transparent hover:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent", {
            "text-foreground": pathname.includes("/manipulation"),
          })}>Manipulation</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-max max-w-[400px] gap-3 p-3 md:max-w-[500px] md:grid-cols-2 lg:max-w-[600px]">
              {manipulations.map((tool) => (
                <ListItem
                  key={tool.title}
                  title={tool.title}
                  href={tool.href}
                >
                  {tool.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
        <NavigationMenuTrigger className={cn("text-foreground/50 bg-transparent hover:text-foreground/75 ring-foreground focus-visible:ring-1 transition p-2 h-fit focus:bg-transparent hover:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent", {
            "text-foreground": pathname.includes("/conversion"),
          })}>Conversion</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-max max-w-[400px] gap-3 p-3 md:max-w-[500px] lg:max-w-[600px]">
              {conversions.map((tool) => (
                <ListItem
                  key={tool.title}
                  title={tool.title}
                  href={tool.href}
                >
                  {tool.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
        <NavigationMenuTrigger className={cn("text-foreground/50 bg-transparent hover:text-foreground/75 ring-foreground focus-visible:ring-1 transition p-2 h-fit focus:bg-transparent hover:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent", {
            "text-foreground": pathname.includes("/other-tools"),
          })}>Other</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-max max-w-[400px] gap-3 p-3 md:max-w-[500px] md:grid-cols-2 lg:max-w-[600px]">
              {other.map((tool) => (
                <ListItem
                  key={tool.title}
                  title={tool.title}
                  href={tool.href}
                >
                  {tool.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem >
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink className={cn("text-foreground/50 rounded-md p-2 hover:text-foreground/75 ring-foreground focus-visible:ring-1 outline-none transition text-sm", {
              "text-foreground": pathname.includes("/about"),
            })}>
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
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href as string}
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
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
