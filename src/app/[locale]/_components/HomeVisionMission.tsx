"use client"

import { CircleCheckBig } from "lucide-react"
import FadeIn from "@/components/global/fadeIn"
import { useTranslations } from "next-intl";

export default function HomeVisionMission() {
  const t = useTranslations('homeVisionMission');

  return (
    <section className="bg-secondary text-primary-foreground relative py-8 lg:py-16">
      <div className="container mx-auto lg:px-4">
         <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
        <FadeIn>
          <div className="lg:max-w-[708px]">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-6 text-center">{t('vision')}</h2>
            <p className="lg:text-2xl lg:mb-6 lg:leading-[1.2] text-center">{t('visionDescription')}</p>
          </div>
        </FadeIn>

        <FadeIn direction="right">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-6 text-center">{t('mission')}</h2>
              <div className="flex flex-col gap-[15px] w-full h-auto pr-6 pl-6">
                <div className="flex items-start gap-[15px]">
                  <div className="flex-shrink-0">
                    <CircleCheckBig className="w-8 h-8 text-white" strokeWidth={2} />
                  </div>
                  <p className="text-xs lg:text-2xl font-bold">{t('mission1')}</p>
                </div>
                <div className="flex items-start gap-[15px]">
                  <div className="flex-shrink-0">
                    <CircleCheckBig className="w-8 h-8 text-white" strokeWidth={2} />
                  </div>
                  <p className="text-xs lg:text-2xl font-bold">{t('mission2')}</p>
                </div>
                <div className="flex items-start gap-[15px]">
                  <div className="flex-shrink-0">
                    <CircleCheckBig className="w-8 h-8 text-white" strokeWidth={2} />
                  </div>
                  <p className="text-xs lg:text-2xl font-bold">{t('mission3')}</p>
                </div>
              </div>
            </div>
          </FadeIn>
          </div>
      </div>
    </section>
    
  )
}