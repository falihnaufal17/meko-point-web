"use client"

import { useBreakpoints } from "@/hooks/useBreakpoints";
import { cn } from "@/lib";
import Image, { StaticImageData } from "next/image"
import FadeIn from "./fadeIn";

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
  const { lg } = useBreakpoints()

  return (
    <>
      <FadeIn className="absolute inset-0 z-0 h-full w-full" direction="none">
        {lg ?
          <Image
            src={imageDesktop ?? ""}
            className={cn("object-cover", className)}
            fill
            alt={alt ?? ""}
            priority={priority} /> :
          <Image
            src={imageMobile ?? imageDesktop ?? ""}
            className={cn("object-cover", className)}
            fill
            alt={alt ?? ""}
            priority={priority} />
        }
      </FadeIn>
    </>
  )
}