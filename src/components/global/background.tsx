"use client"

import { cn } from "@/lib";
import Image, { StaticImageData } from "next/image"
import FadeIn from "./fadeIn";
import { useState, useEffect } from "react";

interface BackgroundProps {
  imageDesktop?: string | StaticImageData;
  imageMobile?: string | StaticImageData;
  className?: string;
  alt?: string;
  priority?: boolean;
}

export default function Background({
  imageDesktop,
  imageMobile,
  className,
  alt,
  priority
}: BackgroundProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [isLg, setIsLg] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    // Check initial breakpoint
    const checkLg = () => {
      setIsLg(window.innerWidth >= 1024);
    };
    
    checkLg();
    
    // Listen to resize events
    const handleResize = () => checkLg();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Default to desktop image for SSR to avoid hydration mismatch
  const image = isMounted && !isLg ? imageMobile : imageDesktop;

  return (
    <>
      <FadeIn className="absolute inset-0 z-0 h-full w-full" direction="none">
        <Image
          src={image ?? ""}
          className={cn("object-cover", className)}
          fill
          alt={alt ?? ""}
          priority={priority}
        />
      </FadeIn>
    </>
  )
}