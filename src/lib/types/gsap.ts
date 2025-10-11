export interface FadeInProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  delay?: number;
  trigger?: string | Element | null;
  start?: string;
  end?: string;
  className?: string;
  stagger?: number;
  once?: boolean;
  ease?: string;
  distance?: number;
  onStart?: () => void;
  onComplete?: () => void;
}

export interface ScrollTriggerConfig {
  trigger?: string | Element | null;
  start?: string;
  end?: string;
  toggleActions?: string;
  markers?: boolean;
  onEnter?: () => void;
  onLeave?: () => void;
  onEnterBack?: () => void;
  onLeaveBack?: () => void;
}