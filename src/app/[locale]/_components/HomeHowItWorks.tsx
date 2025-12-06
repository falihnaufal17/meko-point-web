"use client"

import FadeIn from "@/components/global/fadeIn"
import { Card, CardContent } from "@/components/ui/card"
import { QrCode, Utensils, Zap } from "lucide-react";
import { useTranslations } from "next-intl";

export default function HomeHowItWorks() {
  const t = useTranslations('homeHowItWorks');

  const data = [
    {
      title: t('step1Title'),
      icon: QrCode,
      shortDescription: t('step1Description')
    },
    {
      title: t('step2Title'),
      icon: Utensils,
      shortDescription: t('step2Description')
    },
    {
      title: t('step3Title'),
      icon: Zap,
      shortDescription: t('step3Description')
    }
  ];

  return (
    <section className="relative z-20 container mx-auto px-4 py-6 lg:py-10">
      <FadeIn>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl lg:mb-4 font-bold text-center">{t('title')}</h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-2xl text-content-2 lg:mb-5 text-center font-normal">{t('description')}</p>
      </FadeIn>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-x-[34px] mt-6 lg:mt-0">
        {data.map((item, index) => (
          <FadeIn key={item.title} delay={0.1 * index + 0.1} className="group h-full">
            <Card className="h-full group-hover:bg-secondary transition-colors cursor-pointer">
              <CardContent className="flex flex-col items-center">
                <div className="p-2 sm:p-2.5 lg:p-3 rounded-full size-10 sm:size-11 lg:size-[52px] flex items-center justify-center bg-secondary group-hover:bg-background mb-3">
                  {(() => {
                    const Icon = item.icon;
                    return <Icon className="size-5 sm:size-6 lg:size-7 text-background group-hover:text-secondary" aria-hidden="true" />;
                  })()}
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold lg:mb-2.5 text-center group-hover:text-secondary-foreground">{item.title}</h3>
                <p className="text-sm sm:text-base lg:text-xl text-content-2 text-center group-hover:text-secondary-foreground">{item.shortDescription}</p>
              </CardContent>
            </Card>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}