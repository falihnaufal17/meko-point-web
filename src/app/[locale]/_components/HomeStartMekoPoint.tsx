"use client"

import { imgStartMekoPoint } from "@/assets"
import FadeIn from "@/components/global/fadeIn"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function HomeStartMekoPoint() {
  return (
    <section className="bg-secondary text-primary-foreground relative">
      <div className="container mx-auto lg:py-10">
        <FadeIn>
          <div className="lg:max-w-[708px]">
            <h2 className="text-xs lg:text-3xl font-bold lg:mb-4">Mulai dengan Meko Point</h2>
            <p className="lg:text-2xl lg:mb-6 lg:leading-[1.2]">Sistem POS dan inventory revolusioner berbasis QR Code. Pelanggan men-scan QR Code di meja, pilih makanan, dan lewati antrian kasir sepenuhnya dengan metode point-of-sale (POS) lengkap untuk Bisnis Anda.</p>
            <Button variant="ghost" className="bg-background text-primary lg:text-xl lg:py-4 h-auto font-bold px-12 w-auto min-w-0 hover:text-primary-foreground hover:bg-primary">Ayo Mulai Bergabung Dengan Kami!</Button>
          </div>
        </FadeIn>
      </div>
      <FadeIn direction="left" className="absolute bottom-0 right-1">
        <Image src={imgStartMekoPoint} alt="meko point" className="max-w-full" />
      </FadeIn>
    </section>
  )
}