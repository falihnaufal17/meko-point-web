"use client"

import { bgHomeCover, bgHomeCoverMobile } from "@/assets";
import Hero, { HeroContent, HeroImage } from "@/components/global/hero";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export default function HomeHero() {
  const t = useTranslations('homePage');

  return (
    <Hero className="w-full aspect-auto sm:aspect-video lg:aspect-[2.18/1] min-h-screen sm:min-h-auto overflow-hidden">
      <HeroImage imageMobile={bgHomeCoverMobile} imageDesktop={bgHomeCover} className="w-full h-full object-cover" priority/>
       <HeroContent title={t("title")} description={t("description")} className="px-6 sm:px-0">
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 md:gap-6 lg:gap-10 w-full max-w-full">
          <Button className="w-full sm:flex-1 text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold py-3 sm:py-3 md:py-3.5 h-auto whitespace-nowrap rounded-md" variant="outline">
            {t("cta1Label")}
          </Button>
          <Button className="w-full sm:flex-1 text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold py-3 sm:py-3 md:py-3.5 h-auto bg-white hover:bg-secondary hover:text-primary-foreground text-primary whitespace-nowrap rounded-md" variant="ghost">
            {t("cta2Label")}
          </Button>
        </div>
      </HeroContent>
    </Hero>
  )
}