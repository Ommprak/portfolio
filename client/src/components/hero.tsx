import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [splineError, setSplineError] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [shouldLoadSpline, setShouldLoadSpline] = useState(false);

  useEffect(() => {
    // Detect mobile devices
    const checkMobile = () => {
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
                           window.innerWidth <= 768;
      setIsMobile(isMobileDevice);
      
      // For mobile devices, delay loading or use reduced quality
      if (isMobileDevice) {
        // Load after a short delay to improve initial page load
        setTimeout(() => setShouldLoadSpline(true), 1500);
      } else {
        setShouldLoadSpline(true);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Spline 3D Model Embed - Mobile Optimized */}
      {!splineError && shouldLoadSpline ? (
        <div className="absolute inset-0 w-full h-full z-10">
          <iframe
            src="https://my.spline.design/robotfollowcursorforlandingpage-10IZP3Rc7GqnxCb7Kw4yJMu0/"
            frameBorder={0}
            width="100%"
            height="100%"
            className={`w-full h-full ${isMobile ? 'pointer-events-none' : ''}`}
            title="Interactive 3D Robot Model"
            data-testid="spline-3d-model"
            loading="lazy"
            onError={() => {
              console.warn('Spline model failed to load, falling back to gradient background');
              setSplineError(true);
            }}
            style={{ 
              border: 'none',
              transform: isMobile ? 'scale(0.8)' : 'none',
              transformOrigin: 'center'
            }}
          />
        </div>
      ) : (
        <div className="absolute inset-0 w-full h-full z-10 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
          {/* Loading indicator for mobile */}
          {isMobile && !shouldLoadSpline && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-pulse text-white/50">Loading 3D Experience...</div>
            </div>
          )}
        </div>
      )}
      
      
    </section>
  );
}
