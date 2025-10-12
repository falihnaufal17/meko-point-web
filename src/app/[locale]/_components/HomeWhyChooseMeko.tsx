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
    <section className="container mx-auto lg:py-10">
      <h2 className="lg:text-3xl font-bold lg:mb-4 text-center">{t('reason1Title')}</h2>
      <p className="lg:text-2xl lg:mb-4 text-content-2 text-center">{t('reason1Description')}</p>
      <div className="grid lg:grid-cols-3 lg:gap-x-10 lg:gap-y-4">
        {data.map((item, index) => {
          const Icon = item.icon

          return (
            <FadeIn key={item.title} className="group h-full" delay={0.1 * index + 0.1}>
              <Card className="group-hover:bg-secondary transition-colors h-full">
                <CardContent className="flex flex-col lg:gap-4">
                  <div className="lg:p-3 rounded-full bg-secondary lg:size-[52px] group-hover:bg-background">
                    <Icon className="lg:size-7 text-background group-hover:text-secondary" />
                  </div>
                  <h3 className="lg:text-2xl font-bold group-hover:text-secondary-foreground">{item.title}</h3>
                  <p className="lg:text-xl text-content-2 group-hover:text-secondary-foreground">{item.shortDescription}</p>
                </CardContent>
              </Card>
            </FadeIn>
          )
        })}
      </div>
    </section>
  )
}