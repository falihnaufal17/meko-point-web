"use client"

interface HeroProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export default function Hero({ title, description, children }: HeroProps) {
  return (
    <section className="relative bg-primary">
      <h1 className="lg:text-[52px] lg:mb-5 font-bold text-white">{title}</h1>
      <p className="lg:text-2xl text-white">{description}</p>
      {children}
    </section>
  )
}