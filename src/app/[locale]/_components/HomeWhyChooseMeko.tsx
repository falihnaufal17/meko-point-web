"use client"

import FadeIn from "@/components/global/fadeIn"
import { Card, CardContent } from "@/components/ui/card"
import { Box, ChartNoAxesCombined, Clock, Cloud, QrCode, Smartphone } from "lucide-react"
import { useTranslations } from "next-intl";

export default function HomeWhyChooseMeko() {
  const t = useTranslations('homeWhyChooseMeko');

  const data = [
    {
      title: t('reason1Title'),
      icon: QrCode,
      shortDescription: t('reason1Description')
    },
    {
      title: t('reason2Title'),
      icon: Box,
      shortDescription: t('reason2Description')
    },
    {
      title: t('reason3Title'),
      icon: Cloud,
      shortDescription: t('reason3Description')
    },
    {
      title: t('reason4Title'),
      icon: Clock,
      shortDescription: t('reason4Description')
    },
    {
      title: t('reason5Title'),
      icon: Smartphone,
      shortDescription: t('reason5Description')
    },
    {
      title: t('reason6Title'),
      icon: ChartNoAxesCombined,
      shortDescription: t('reason6Description')
    }
  ];

  return (
    <section className="container mx-auto px-4 py-6 lg:py-10">
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold mb-2 sm:mb-3 lg:mb-4 text-center">{t('title')}</h2>
      <p className="text-sm sm:text-base md:text-lg lg:text-2xl mb-6 lg:mb-8 text-content-2 text-center">{t('description')}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-x-10 lg:gap-y-4">
        {data.map((item, index) => {
          const Icon = item.icon

          return (
            <FadeIn key={item.title} className="group h-full" delay={0.1 * index + 0.1}>
              <Card className="group-hover:bg-secondary transition-colors h-full">
                <CardContent className="flex flex-col gap-3 sm:gap-3 lg:gap-4 p-4 sm:p-5 lg:p-6">
                  <div className="p-2 sm:p-2.5 lg:p-3 rounded-full size-10 sm:size-11 lg:size-[52px] flex items-center justify-center bg-secondary group-hover:bg-background">
                    <Icon className="size-5 sm:size-6 lg:size-7 text-background group-hover:text-secondary" />
                  </div>
                  <h3 className="text-base sm:text-lg lg:text-2xl font-bold group-hover:text-secondary-foreground">{item.title}</h3>
                  <p className="text-sm sm:text-base lg:text-xl text-content-2 group-hover:text-secondary-foreground">{item.shortDescription}</p>
                </CardContent>
              </Card>
            </FadeIn>
          )
        })}
      </div>
    </section>
  )
}