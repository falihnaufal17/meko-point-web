"use client"

import FadeIn from "@/components/global/fadeIn"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import {imgScanQR, imgInventory, imgCloud, imgRealTime} from "@/assets"
import { useTranslations } from "next-intl";

   

export default function HomeMekoPointFeatures() {
  const t = useTranslations('homeMekoPointFeatures');
  
  const data = [
    {
      title: t('title'),
      shortDescription: t('description'),
      image: <Image 
        src={imgScanQR} 
        alt={t('title')}
        width={280}
        height={200}
        className="w-full h-auto"
        sizes="(max-width: 768px) 280px, 25vw"
        priority
      />,
    },
    {
      title: t('feature1Title'),
      shortDescription: t('feature1Description'),
      image: <Image 
        src={imgInventory} 
        alt={t('feature1Title')}
        width={280}
        height={200}
        className="w-full h-auto"
        sizes="(max-width: 768px) 280px, 25vw"
      />,
    },
    {
      title: t('feature2Title'),
      shortDescription: t('feature2Description'),
      image: <Image 
        src={imgCloud}
        alt={t('feature2Title')}
        width={280}
        height={200}
        className="w-full h-auto"
        sizes="(max-width: 768px) 280px, 25vw"
      />,
    },
    {
      title: t('feature4Title'),
      shortDescription: t('feature4Description'),
      image: <Image 
        src={imgRealTime}
        alt={t('feature4Title')}
        width={280}
        height={200}
        className="w-full h-auto"
        sizes="(max-width: 768px) 280px, 25vw"
      />,
    }
  ];

  return (
    <section className="py-6 lg:py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-xl lg:text-3xl font-bold mb-3 lg:mb-4 text-center">{t('title')}</h2>
        <p className="text-sm lg:text-2xl mb-6 lg:mb-4 text-content-2 text-center px-2">{t('description')}</p>
      </div>
      
      {/* Mobile: Horizontal Scroll */}
      <div className="lg:hidden overflow-x-auto scrollbar-hide px-4">
        <div className="flex gap-4 pb-4">
          {data.map((item) => (
            <div key={item.title} className="flex-shrink-0 w-[280px]">
              <Card className="h-full">
                <CardContent className="flex flex-col gap-3 p-4">
                  <div className="w-full rounded-lg overflow-hidden bg-gray-100">
                    {item.image}
                  </div>
                  <h3 className="text-base font-bold">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-content-2">
                    {item.shortDescription}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: Grid */}
      <div className="hidden lg:block container mx-auto px-4">
        <div className="grid lg:grid-cols-4 lg:gap-x-10 lg:gap-y-4">
          {data.map((item, index) => {
            return (
              <FadeIn key={item.title} className="group h-full" delay={0.1 * index + 0.1}>
                <Card className="group-hover:bg-secondary transition-colors h-full">
                  <CardContent className="flex flex-col lg:gap-4">
                    <div className="w-full rounded-lg overflow-hidden bg-gray-100">
                      {item.image}
                    </div>
                    <h3 className="lg:text-2xl font-bold group-hover:text-secondary-foreground">
                      {item.title}
                    </h3>
                    <p className="lg:text-base text-content-2 group-hover:text-secondary-foreground">
                      {item.shortDescription}
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}

