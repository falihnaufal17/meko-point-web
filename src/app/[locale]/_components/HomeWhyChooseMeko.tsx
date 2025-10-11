"use client"

import FadeIn from "@/components/global/fadeIn"
import { Card, CardContent } from "@/components/ui/card"
import { Box, ChartNoAxesCombined, Clock, Cloud, QrCode, Smartphone } from "lucide-react"

export default function HomeWhyChooseMeko() {
  return (
    <section className="container mx-auto lg:py-10">
      <h2 className="lg:text-3xl font-bold lg:mb-4 text-center">Mengapa Memilih Meko?</h2>
      <p className="lg:text-2xl lg:mb-4 text-content-2 text-center">Meko Point menggabungkan QR Code Ordering dengan Point-Of-Sale (POS) dan manajemen inventory yang komprehensif.</p>
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

const data = [
  {
    title: "QR Code Ordering",
    icon: QrCode,
    shortDescription: "Pelanggan scan QR code meja untuk mengakses menu digital dan memesan langsung dari ponsel mereka."
  },
  {
    title: "Manajemen Inventory",
    icon: Box,
    shortDescription: "Pelacakan inventory real-time dengan update stok otomatis saat pesanan dibuat dan dipenuhi."
  },
  {
    title: "POS Berbasis Cloud",
    icon: Cloud,
    shortDescription: "Akses sistem POS Anda kapan saja, di mana saja. Tidak perlu instalasi, update otomatis, dan penyimpanan cloud aman."
  },
  {
    title: "Waktu Antrian Nol",
    icon: Clock,
    shortDescription: "Hilangkan antrian kasir sepenuhnya. Pesanan langsung ke dapur, mengurangi waktu tunggu hingga 70%."
  },
  {
    title: "Dioptimalkan Mobile",
    icon: Smartphone,
    shortDescription: "Pengalaman mobile sempurna untuk pelanggan. Tidak perlu download aplikasi - bekerja langsung di browser web."
  },
  {
    title: "Analitik Real-Time",
    icon: ChartNoAxesCombined,
    shortDescription: "Lacak pesanan, level inventory, item populer, jam sibuk, dan pendapatan secara real-time dengan dashboard komprehensif."
  }
]