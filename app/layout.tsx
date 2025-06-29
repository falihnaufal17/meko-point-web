import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { translations, Language } from './lib/translations'

const inter = Inter({ subsets: ['latin'] })

interface Props {
  params: Promise<{ lang: string }>
}

export async function generateStaticParams() {
  return [
    { lang: 'id' },
    { lang: 'en' }
  ]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params
  const t = (key: string) => {
    const keys = key.split('.')
    let value: any = translations[lang as Language] || translations.id
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k]
      } else {
        return key
      }
    }
    
    return typeof value === 'string' ? value : key
  }

  return {
    title: 'Meko Point - QR-Based POS dan Inventory System',
    description: lang === 'id' 
      ? 'Sistem POS dan inventory revolusioner berbasis QR untuk restoran Indonesia. Lewati antrian, scan QR code di meja, dan pesan langsung. Solusi point-of-sale lengkap dengan manajemen inventory terintegrasi.'
      : 'Revolutionary QR-based POS and inventory system for Indonesian restaurants. Skip the queue, scan QR codes at tables, and order directly. Complete point-of-sale solution with integrated inventory management.',
    keywords: 'POS system, inventory management, QR ordering, restaurant technology, Indonesia, SME, digital transformation',
    authors: [{ name: 'Meko Point' }],
    robots: {
      index: false,
      follow: false,
      nocache: true,
      googleBot: {
        index: false,
        follow: false,
        noimageindex: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title: 'Meko Point - QR-Based POS dan Inventory System',
      description: lang === 'id'
        ? 'Sistem POS dan inventory revolusioner berbasis QR untuk restoran Indonesia'
        : 'Revolutionary QR-based POS and inventory system for Indonesian restaurants',
      type: 'website',
    },
  }
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  
  return (
    <html lang={lang} className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}