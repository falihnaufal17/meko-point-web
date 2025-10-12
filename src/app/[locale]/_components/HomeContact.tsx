"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { bgContactCover } from "@/assets/background"
import FadeIn from "@/components/global/fadeIn"
import { useTranslations } from "next-intl";


export default function ContactFormSection() {
  const t = useTranslations('HomeContact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section className="relative min-h-[500px] lg:min-h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={bgContactCover}
          alt="Background"
          fill
          className="object-cover brightness-75"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12 lg:py-20">
        <FadeIn className="w-full">
          <div className="w-full max-w-[536px]">
            <Card className="bg-white shadow-xl rounded">
              <CardContent className="py-10 px-14 space-y-4">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">{t('title')}</h2>
                <p className="text-base text-gray-600 mb-6">{t('description')}</p>

              <form onSubmit={handleSubmit} className="space-y-4 mt-6">
                {/* Nama Lengkap */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1" style={{ color: '#0D4B94E5' }}>
                    {t('fullName')}
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder= {t('enterFullName')}
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1" style={{ color: '#0D4B94E5' }}>
                    {t('email')}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder= {t('enterEmail')}
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full"
                    required
                  />
                </div>

                {/* No Telepon */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1" style={{ color: '#0D4B94E5' }}>
                    {t('PhoneNumber')}
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder= {t('enterPhoneNumber')} 
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full"
                    required
                  />
                </div>

                {/* Pesan */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1" style={{ color: '#0D4B94E5' }}>
                    {t('message')}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder={t('enterMessage')}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full min-h-[100px] resize-none"
                    required
                  />
                </div>

                {/* Submit Button */}
                <Button type="submit" className="w-full text-white py-2 px-4 rounded hover:opacity-90" style={{ backgroundColor: '#0D4B94E5' }}>
                  {t('sendMessage')}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
        </FadeIn>
      </div>
    </section>
  )
}