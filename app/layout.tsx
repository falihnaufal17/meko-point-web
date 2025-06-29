import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Meko Point - QR-Based POS dan Inventory System',
  description: 'Revolutionary QR-based POS and inventory system for Indonesian restaurants. Skip the queue, scan QR codes at tables, and order directly. Complete point-of-sale solution with integrated inventory management.',
  keywords: 'POS system, inventory management, QR ordering, restaurant technology, Indonesia, SME, digital transformation',
  authors: [{ name: 'Meko Point' }],
  openGraph: {
    title: 'Meko Point - QR-Based POS dan Inventory System',
    description: 'Revolutionary QR-based POS and inventory system for Indonesian restaurants',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}