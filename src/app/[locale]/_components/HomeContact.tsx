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
  const t = useTranslations('homeContact');
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
      <div className="relative z-10 container mx-auto px-4 lg:px-4 py-12 lg:py-20">
        <FadeIn className="w-full">
          <div className="w-full max-w-[536px]">
            <Card className="bg-white shadow-xl mb-3 lg:mb-0">
              <CardContent className="py-8 px-6 lg:py-10 lg:px-14 space-y-3 lg:space-y-4">
                <h2 className="text-xl lg:text-3xl font-bold text-gray-800 mb-1 lg:mb-2">{t('title')}</h2>
                <p className="text-sm lg:text-base text-gray-500 mb-4 lg:mb-6 leading-relaxed">{t('description')}</p>

              <form onSubmit={handleSubmit} className="space-y-4 mt-4 lg:mt-6">
                {/* Nama Lengkap */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: '#0D4B94E5' }}>
                    {t('fullName')}
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder= {t('enterFullName')}
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full h-11 text-sm"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: '#0D4B94E5' }}>
                    {t('email')}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder= {t('enterEmail')}
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full h-11 text-sm"
                    required
                  />
                </div>

                {/* No Telepon */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2" style={{ color: '#0D4B94E5' }}>
                    {t('PhoneNumber')}
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder= {t('enterPhoneNumber')} 
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full h-11 text-sm"
                    required
                  />
                </div>

                {/* Pesan */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: '#0D4B94E5' }}>
                    {t('message')}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder={t('enterMessage')}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full min-h-[100px] lg:min-h-[100px] resize-none text-sm"
                    required
                  />
                </div>

                {/* Submit Button - Hidden on mobile, shown on desktop */}
                <Button type="submit" className="hidden lg:block w-full text-white py-2 px-4 hover:opacity-90" style={{ backgroundColor: '#0D4B94E5' }}>
                  {t('sendMessage')}
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Submit Button - Outside card on mobile */}
          <Button type="submit" onClick={handleSubmit} className="lg:hidden w-full text-white py-3 px-4 hover:opacity-90 font-semibold text-base" style={{ backgroundColor: '#0D4B94E5' }}>
            {t('sendMessage')}
          </Button>
        </div>
        </FadeIn>
      </div>
    </section>
  )
}