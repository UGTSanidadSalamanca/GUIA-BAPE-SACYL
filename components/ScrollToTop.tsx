import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 bg-red-600 text-white p-3 rounded-full shadow-lg hover:bg-red-700 transition-all transform hover:scale-110 z-40 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
      aria-label="Volver arriba"
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  );
};

// Also export a functional component to handle scroll on route change
export const ScrollToTopOnNavigate: React.FC = () => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    };
    
    // We rely on the parent wrapper to remount or we can use useLocation
    // But since this is a simple static app, we can just ensure new pages start at top
    useEffect(() => {
        scrollToTop();
    });
    
    return null;
}