import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg transition-all duration-300 ${
        showButton 
          ? 'bg-red-500 text-white shadow-red-500/50 hover:bg-red-600 hover:scale-110' 
          : 'bg-white/80 shadow-white/50 hover:bg-red-500'
      } border-2 border-red-400 flex items-center justify-center text-xl`}
      title="Back to Top"
    >
      <i className="fas fa-arrow-up"></i>
    </button>
  );
}
