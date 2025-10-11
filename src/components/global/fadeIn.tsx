"use client"

import React, { useRef, useEffect, useImperativeHandle, forwardRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FadeInProps } from '@/lib';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export interface FadeInRef {
  restartAnimation: () => void;
  killAnimation: () => void;
}

const FadeIn = forwardRef<FadeInRef, FadeInProps>(({
  children,
  direction = 'up',
  duration = 1,
  delay = 0,
  trigger = null,
  start = 'top 80%',
  end = 'bottom 20%',
  className = '',
  stagger = 0,
  once = true,
  ease = 'power2.out',
  distance = 50,
  onStart,
  onComplete
}, ref) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<gsap.core.Tween | null>(null);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

  useImperativeHandle(ref, () => ({
    restartAnimation: () => {
      if (animationRef.current) {
        animationRef.current.restart();
      }
    },
    killAnimation: () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
      }
    }
  }));

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    // Set initial state based on direction
    const setInitialState = (): void => {
      const initialState: gsap.TweenVars = {
        opacity: 0,
        overwrite: 'auto'
      };

      switch (direction) {
        case 'up':
          initialState.y = distance;
          break;
        case 'down':
          initialState.y = -distance;
          break;
        case 'left':
          initialState.x = distance;
          break;
        case 'right':
          initialState.x = -distance;
          break;
        case 'none':
          // No transform, just opacity
          break;
      }

      gsap.set(element, initialState);
    };

    setInitialState();

    // Animation properties
    const animationVars: gsap.TweenVars = {
      opacity: 1,
      duration: duration,
      delay: delay,
      stagger: stagger,
      ease: ease,
      onStart: onStart,
      onComplete: onComplete,
      overwrite: 'auto'
    };

    // Add transform properties based on direction
    switch (direction) {
      case 'up':
      case 'down':
        animationVars.y = 0;
        break;
      case 'left':
      case 'right':
        animationVars.x = 0;
        break;
      case 'none':
        // No transform animation
        break;
    }

    // ScrollTrigger configuration
    const scrollTriggerConfig: ScrollTrigger.StaticVars = {
      trigger: trigger || element,
      start: start,
      end: end,
      toggleActions: once ? 'play none none none' : 'play none reverse none',
      markers: false,
    };

    animationVars.scrollTrigger = scrollTriggerConfig;

    // Create the animation
    animationRef.current = gsap.to(element, animationVars);
    scrollTriggerRef.current = animationRef.current.scrollTrigger as ScrollTrigger;

    // Cleanup function
    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
      }
    };
  }, [
    direction,
    duration,
    delay,
    trigger,
    start,
    end,
    stagger,
    once,
    ease,
    distance,
    onStart,
    onComplete
  ]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
});

FadeIn.displayName = 'FadeIn';

export default FadeIn;