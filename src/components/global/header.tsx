"use client";

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
import { cn } from "@/lib/utils";
import Image from "next/image";
import { logoMekoPointLight, logoMekoPointMobile } from "@/assets";
import { Locale, useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { startTransition, useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

interface HeaderProps {
  transparent?: boolean;
}

export function Header({ transparent }: HeaderProps) {
  const t = useTranslations('Header');
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams()
  const locale = useLocale()
  const [scrolled, setScrolled] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  function onSelectChange(nextLocale: Locale) {
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        {pathname, params},
        {locale: nextLocale}
      );
      router.refresh();
    });
  }

  return (
    <header className={cn("fixed top-0 left-0 right-0 z-50 text-white transition-colors duration-300", {
      "bg-[#0D4B94]": transparent && scrolled,
      "bg-transparent": transparent && !scrolled,
    })}>
      <div className="container mx-auto flex items-center justify-between py-2 sm:py-3 px-4 sm:px-0">
        <div className="flex items-center gap-4">
          <Link href={`/${locale}`} className="font-semibold flex-shrink-0">
            {isMounted ? (
              <>
                <Image
                  src={logoMekoPointMobile}
                  width={160}
                  height={160}
                  alt="meko point"
                  className="object-cover md:hidden"
                />
                <Image
                  src={logoMekoPointLight}
                  width={260}
                  height={57}
                  alt="meko point"
                  className="object-cover hidden md:block"
                />
              </>
            ) : (
              <Image
                src={logoMekoPointLight}
                width={260}
                height={57}
                alt="meko point"
                className="object-cover"
              />
            )}
          </Link>
        </div>

        <div className="flex items-center gap-2">
          {/* Mobile menu trigger */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  {/* Hamburger icon */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 6H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
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

          {/* Desktop navigation */}
          <div className="hidden md:block">
            <NavigationMenu viewport={false}>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/" className="px-3 py-2 hover:underline text-base">
                      {t('menu.menuLabel1')}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="#service" className="px-3 py-2 hover:underline text-base">
                      {t('menu.menuLabel2')}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="#feature" className="px-3 py-2 hover:underline text-base">
                      {t('menu.menuLabel3')}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="#contact" className="px-3 py-2 hover:underline text-base">
                      {t('menu.menuLabel4')}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="p-2 border border-white rounded">
                    <div className="flex items-center gap-2">
                      {locale === 'id' ? (
                        <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width="20" height="7.5" fill="#E70011"/>
                          <rect y="7.5" width="20" height="7.5" fill="#FFFFFF"/>
                        </svg>
                      ) : (
                        <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width="20" height="15" fill="#012169"/>
                          <path d="M0 0L20 15M20 0L0 15" stroke="white" strokeWidth="2"/>
                          <path d="M0 0L20 15M20 0L0 15" stroke="#C8102E" strokeWidth="1.33"/>
                          <path d="M10 0V15M0 7.5H20" stroke="white" strokeWidth="3.33"/>
                          <path d="M10 0V15M0 7.5H20" stroke="#C8102E" strokeWidth="2"/>
                        </svg>
                      )}
                      <span>{locale.toUpperCase()}</span>
                    </div>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul>
                      {routing.locales.map((loc) => (
                        <li key={loc}>
                          <Button variant="ghost" onClick={() => onSelectChange(loc)} className="w-full justify-start">
                            <div className="flex items-center gap-2">
                              {loc === 'id' ? (
                                <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <rect width="20" height="7.5" fill="#E70011"/>
                                  <rect y="7.5" width="20" height="7.5" fill="#FFFFFF"/>
                                </svg>
                              ) : (
                                <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <rect width="20" height="15" fill="#012169"/>
                                  <path d="M0 0L20 15M20 0L0 15" stroke="white" strokeWidth="2"/>
                                  <path d="M0 0L20 15M20 0L0 15" stroke="#C8102E" strokeWidth="1.33"/>
                                  <path d="M10 0V15M0 7.5H20" stroke="white" strokeWidth="3.33"/>
                                  <path d="M10 0V15M0 7.5H20" stroke="#C8102E" strokeWidth="2"/>
                                </svg>
                              )}
                              <span>{loc.toUpperCase()}</span>
                            </div>
                          </Button>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;