"use client"

import { imgStartMekoPoint, imgStartMekoPointMobile } from "@/assets"
import FadeIn from "@/components/global/fadeIn"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useTranslations } from "next-intl";


export default function HomeStartMekoPoint() {
const t = useTranslations('homeStartMekoPoint');

  return (
    <section className="bg-secondary text-primary-foreground relative overflow-hidden">
      {/* Desktop Layout: 1440x331 with padding 40px top/bottom, 165px left/right, gap 24px */}
      <div className="hidden lg:block">
        <div className="w-full pl-[165px] py-10 flex items-center gap-6">
          <FadeIn className="flex-1 max-w-[600px]">
            <h2 className="text-3xl font-bold mb-4 leading-tight">{t('title')}</h2>
            <p className="text-2xl mb-6 leading-[1.2]">{t('description')}</p>
            <Button variant="ghost" className="bg-background text-primary text-xl py-4 h-auto font-bold px-12 hover:text-primary-foreground hover:bg-primary">{t('buttonLabel')}</Button>
          </FadeIn>
          
          <FadeIn direction="left" className="flex-1 flex items-center justify-end absolute right-0 bottom-0 top-0">
            <Image 
              src= {imgStartMekoPoint}
              alt="meko point" 
              width={544}
              height={492}
              className="h-auto w-auto max-w-full object-contain" 
              priority 
            />
          </FadeIn>
        </div>
      </div>

      {/* Mobile Layout: matching the design */}
      <div className="lg:hidden">
        <div className="w-full flex flex-col">
          <FadeIn className="px-6 pt-10 pb-6">
            <h2 className="text-xl font-bold mb-3 leading-tight">{t('title')}</h2>
            <p className="text-sm mb-5 leading-relaxed opacity-90">{t('description')}</p>
            <Button variant="ghost" className="bg-background text-primary text-sm py-3 h-auto font-semibold px-6 w-full hover:text-primary-foreground hover:bg-primary rounded-md">{t('buttonLabel')}</Button>
          </FadeIn>
          
          <FadeIn direction="left" className="flex items-center justify-center w-full">
            <Image
              src={imgStartMekoPointMobile}
              alt="meko point"
              width={375}
              height={225}
              className="h-auto w-full max-w-full object-cover" 
              priority 
            />
          </FadeIn>
        </div>
      </div>
    </section>
  )
}