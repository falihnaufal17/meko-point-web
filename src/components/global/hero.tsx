"use client"

import { cn } from "@/lib/utils";
import FadeIn from "./fadeIn";
import { StaticImageData } from "next/image";
import Background from "./background";

interface HeroContentProps {
  title?: string;
  description?: string;
  children?: React.ReactNode;
}

export function HeroContent({ title, description, children }: HeroContentProps) {
  return (
    <div className="container mx-auto relative z-20">
      <FadeIn className="max-w-[629px]">
        <h1 className="text-white lg:text-[52px] lg:mb-5 font-bold lg:max-w-md">{title}</h1>
        <p className="lg:text-2xl text-white lg:mb-10">{description}</p>
        {children}
      </FadeIn>
    </div>
  )
}

interface HeroImageProps {
  imageDesktop?: string | StaticImageData;
  imageMobile?: string | StaticImageData;
  className?: string;
  alt?: string;
  priority?: boolean;
}

export function HeroImage({
  imageDesktop,
  imageMobile,
  className,
  alt,
  priority
}: HeroImageProps) {
  return (
    <div className="absolute top-0 left-0 w-full h-full bottom-0">
      <Background imageDesktop={imageDesktop} imageMobile={imageMobile} className={cn("w-full aspect-video", className)} alt={alt} priority={priority} />
    </div>
  )
}

interface HeroProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Hero({ className, children }: HeroProps) {
  return (
    <section className={cn("relative flex flex-col justify-center", className)}>
      <div className="w-[1514px] h-[131px] bg-secondary blur-3xl absolute -top-9 left-0 right-0 z-10" />
      <div className="w-[1460px] h-[587px] bg-secondary blur-[150px] absolute -top-20 -left-96 z-10" />
      {children}
    </section>
  )
}