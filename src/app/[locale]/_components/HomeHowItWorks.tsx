"use client"

import FadeIn from "@/components/global/fadeIn"
import { Card, CardContent } from "@/components/ui/card"
import { useTranslations } from "next-intl";

export default function HomeHowItWorks() {
  const t = useTranslations('homeHowItWorks');

  const data = [
    {
      title: t('step1Title'),
      shortDescription: t('step1Description')
    },
    {
      title: t('step2Title'),
      shortDescription: t('step2Description')
    },
    {
      title: t('step3Title'),
      shortDescription: t('step3Description')
    }
  ];

  return (
    <section className="relative z-20 container mx-auto lg:py-10">
      <FadeIn>
        <h2 className="text-content-1 lg:text-3xl lg:mb-4 font-bold text-center">{t('title')}</h2>
        <p className="lg:text-2xl text-content-2 lg:mb-5 text-center font-normal">{t('description')}</p>
      </FadeIn>
      <div className="grid lg:grid-cols-3 gap-x-[34px]">
        {data.map((item, index) => (
          <FadeIn key={item.title} delay={0.1 * index + 0.1} className="block h-full">
            <Card className="h-full">
              <CardContent>
                <h3 className="lg:text-2xl font-bold lg:mb-2.5 text-center">{item.title}</h3>
                <p className="lg:text-xl text-content-2 text-center">{item.shortDescription}</p>
              </CardContent>
            </Card>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}