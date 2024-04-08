'use client'

import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

type Link = {
  title: string
  href: string
  description?: string,
}

export type SideBarLinksProps = {
  links: Link[]
}

export default function SideBarLinks({ links }: SideBarLinksProps) {

  const pathname = usePathname()

  return (
    <ul>
      {links.map((link, index) => (
        <li key={index}>
          <a className={cn("opacity-50 hover:underline focus-visible:opacity-75 py-0.5 inline-block w-full",{
            "opacity-100": pathname === link.href
          })} href={link.href}>{link.title}</a>
        </li>
      ))}
    </ul>
  )
}