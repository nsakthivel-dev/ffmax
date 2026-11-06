import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import SelectMatchPage from './pages/SelectMatchPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#select-match' || hash === '#matches' || window.location.pathname === '/select-match') {
        return 'select-match';
      }
    }
    return 'home';
  });

  useEffect(() => {
    const handleHashOrRoute = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#select-match' || hash === '#matches' || window.location.pathname === '/select-match') {
        setCurrentPage('select-match');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashOrRoute);
    window.addEventListener('popstate', handleHashOrRoute);
    return () => {
      window.removeEventListener('hashchange', handleHashOrRoute);
      window.removeEventListener('popstate', handleHashOrRoute);
    };
  }, []);

  const navigateToSelectMatch = () => {
    window.location.hash = 'select-match';
    setCurrentPage('select-match');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = (targetSection = 'maps') => {
    window.location.hash = targetSection;
    setCurrentPage('home');
    setTimeout(() => {
      const el = document.getElementById(targetSection);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 60);
  };

  if (currentPage === 'select-match') {
    return <SelectMatchPage onBack={() => navigateToHome('maps')} />;
  }

  return <Home onSelectMatch={navigateToSelectMatch} />;
}
