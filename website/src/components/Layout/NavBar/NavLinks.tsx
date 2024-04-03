'use client'

import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function NavLinks() {

  const pathname = usePathname()

  return (
    <div className="flex items-center gap-6">
      <Link href="/manipulation" className={cn("text-sm transition font-normal opacity-50 hover:opacity-75 focus-visible:opacity-75", { "opacity-100": pathname === "/manipulation" })}>
        Manipulation
      </Link>
      <Link href="/palettes" className={cn("text-sm transition font-normal opacity-50 hover:opacity-75 focus-visible:opacity-75", { "opacity-100": pathname === "/palettes" })}>
        Palettes
      </Link>
      <Link href="/converter" className={cn("text-sm transition font-normal opacity-50 hover:opacity-75 focus-visible:opacity-75", { "opacity-100": pathname === "/converter" })}>
        Converter
      </Link>
      <Link href="/shadcn-colors" className={cn("text-sm transition font-normal opacity-50 hover:opacity-75 focus-visible:opacity-75", { "opacity-100": pathname === "/shadcn-colors" })}>
        shadcn / colors
      </Link>
    </div>
  )
}