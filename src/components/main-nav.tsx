"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

import { Separator } from "@/components/ui/separator"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex">
      {/* <Link href="/" className="mr-4 flex items-center gap-2 lg:mr-6">
        <Icons.logo className="h-6 w-6" />
        <span className="hidden font-bold lg:inline-block">
          TOP
        </span>
      </Link> */}
      <nav className="flex items-center gap-4 text-sm xl:gap-6">
        <Link
          href="/"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/" ? "text-foreground" : "text-foreground/80"
          )}
        >
          home
        </Link>
        <Separator orientation="vertical"/>
        <Link
          href="/about"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/about" ? "text-foreground" : "text-foreground/80"
          )}
        >
          about
        </Link>
        <Separator orientation="vertical"/>
        <Link
          href="/blog"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/blog")
              ? "text-foreground"
              : "text-foreground/80"
          )}
        >
          blog
        </Link>
        <Separator orientation="vertical"/>
        <Link
          href="/links"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/links" ? "text-foreground" : "text-foreground/80"
          )}
        >
          links
        </Link>
      </nav>
    </div>
  )
}
