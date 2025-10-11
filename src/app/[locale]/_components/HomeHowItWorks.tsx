"use client"

import FadeIn from "@/components/global/fadeIn"
import { Card, CardContent } from "@/components/ui/card"

export default function HomeHowItWorks() {
  return (
    <section className="relative z-20 container mx-auto lg:py-10">
      <FadeIn>
        <h2 className="text-content-1 lg:text-3xl lg:mb-4 font-bold text-center">Cara Kerja Meko Point QR Ordering</h2>
        <p className="lg:text-2xl text-content-2 lg:mb-5 text-center font-normal">Proses sederhana 3 langkah yang menghilangkan antrian dan meningkatkan pengalaman pelanggan dengan manajemen POS dan inventory terintegrasi</p>
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

const data = [
  {
    title: "Scan QR Code",
    shortDescription: "Pelanggan duduk di meja dan scan QR code unik dengan smartphone mereka. Langsung membuka menu digital tanpa perlu download aplikasi"
  },
  {
    title: "Jelajahi & Pesan",
    shortDescription: "Jelajahi menu lengkap dengan foto, deskripsi, dan harga. Pilih makanan dan minuman, kustomisasi pesanan, dan tambahkan permintaan khusus dengan mudah."
  },
  {
    title: "Lewati Antrian",
    shortDescription: "Pesanan langsung ke dapur melalui sistem POS. Inventory otomatis terupdate. Tidak perlu antri di kasir. Makanan diantar langsung ke meja."
  }
]