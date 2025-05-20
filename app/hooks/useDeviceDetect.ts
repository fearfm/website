import { useState, useEffect } from 'react';

export default function useDeviceDetect() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const checkDevice = () => {
      const isMobileWidth = window.matchMedia('(max-width: 768px)').matches;
      const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      setIsMobile(isMobileWidth && isTouch);
    };

    // Initial check
    checkDevice();

    // Add event listener for window resize
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    mediaQuery.addEventListener('change', checkDevice);

    // Cleanup
    return () => {
      mediaQuery.removeEventListener('change', checkDevice);
    };
  }, []);

  return { isMobile };
}