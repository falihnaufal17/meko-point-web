"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DialogDescription, DialogTitle } from "../ui/dialog";

export function Header() {
  return (
    <header className="border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-4">
          <Link href="/" className="font-semibold">
            meko
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="p-4">
                      <ul className="grid gap-2">
                        <li>
                          <NavigationMenuLink asChild>
                            <Link href="/features" className="block rounded-md px-3 py-2 hover:bg-accent">
                              Features
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link href="/pricing" className="block rounded-md px-3 py-2 hover:bg-accent">
                              Pricing
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/docs" className="px-3 py-2 hover:underline">
                      Docs
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Mobile menu trigger */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  {/* Hamburger icon */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 6H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-72 p-0">
                <DialogTitle></DialogTitle>
                <DialogDescription></DialogDescription>
                <div className="px-4 pb-4 pt-6">
                  <Link href="/" className="font-semibold">
                    meko
                  </Link>
                </div>
                <nav className="grid gap-1 px-2 pb-4">
                  <Link href="/features" className="rounded-md px-3 py-2 hover:bg-accent">
                    Features
                  </Link>
                  <Link href="/pricing" className="rounded-md px-3 py-2 hover:bg-accent">
                    Pricing
                  </Link>
                  <Link href="/docs" className="rounded-md px-3 py-2 hover:bg-accent">
                    Docs
                  </Link>
                  <div className="px-1 pt-2">
                    <Button asChild variant="ghost" className="w-full justify-start">
                      <Link href="/login">Log in</Link>
                    </Button>
                  </div>
                  <div className="px-1">
                    <Button asChild className="w-full justify-start">
                      <Link href="/signup">Sign up</Link>
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop actions */}
          <div className="hidden md:flex items-center gap-2">
            <Button asChild variant="ghost">
              <Link href="/login">Log in</Link>
            </Button>
            <Button asChild>
              <Link href="/signup">Sign up</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;


