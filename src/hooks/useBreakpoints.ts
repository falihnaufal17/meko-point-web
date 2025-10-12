import { useState, useEffect } from 'react';

// types/breakpoints.types.ts
interface Breakpoints {
  sm: boolean;
  md: boolean;
  lg: boolean;
  xl: boolean;
  xxl: boolean;
}

interface BreakpointConfig {
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
}

// Default breakpoints (Tailwind CSS inspired)
const DEFAULT_BREAKPOINTS: BreakpointConfig = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  xxl: 1536,
};

/**
 * Hook to track current breakpoint based on window width
 * @param breakpoints - Custom breakpoint configuration
 * @returns Object with boolean values for each breakpoint
 */
export const useBreakpoints = (
  breakpoints: BreakpointConfig = DEFAULT_BREAKPOINTS
): Breakpoints => {
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );

  useEffect(() => {
    // Skip SSR
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Set initial width
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Calculate breakpoints
  const breakpointsResult: Breakpoints = {
    sm: windowWidth >= breakpoints.sm,
    md: windowWidth >= breakpoints.md,
    lg: windowWidth >= breakpoints.lg,
    xl: windowWidth >= breakpoints.xl,
    xxl: windowWidth >= breakpoints.xxl,
  };

  return breakpointsResult;
};