"use client"

import { bgHomeCover } from "@/assets";
import Hero, { HeroContent, HeroImage } from "@/components/global/hero";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export default function HomeHero() {
  const t = useTranslations('HomePage');

  return (
    <Hero className="aspect-[2.18/1]">
      <HeroImage imageDesktop={bgHomeCover} className="aspect-video" priority/>
      <HeroContent title={t("title")} description={t("description")}>
        <div className="flex gap-x-10">
          <div className="w-full">
            <Button className="w-full md:text-2xl font-bold py-3 h-auto" variant="outline">{t("cta1Label")}</Button>
          </div>
          <div className="w-full">
            <Button className="w-full md:text-2xl font-bold py-3 h-auto bg-white hover:bg-primary hover:text-primary-foreground text-primary" variant="ghost">{t("cta2Label")}</Button>
          </div>
        </div>
      </HeroContent>
    </Hero>
  )
}