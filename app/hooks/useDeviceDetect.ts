import { useState, useEffect } from 'react';

export default function useDeviceDetect() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.matchMedia('(max-width: 425px)').matches);
    };

    // Initial check
    checkDevice();

    // Add event listener for window resize
    const mediaQuery = window.matchMedia('(max-width: 425px)');
    mediaQuery.addEventListener('change', checkDevice);

    // Cleanup
    return () => {
      mediaQuery.removeEventListener('change', checkDevice);
    };
  }, []);

  return { isMobile };
}