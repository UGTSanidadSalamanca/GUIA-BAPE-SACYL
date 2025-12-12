import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { ScrollToTopButton } from './components/ScrollToTop';
import { AccessView } from './views/Access';
import { ScoreView } from './views/Score';
import { CallupsView } from './views/Callups';
import { PenaltiesView } from './views/Penalties';

// Component to handle scroll restoration on route change
const ScrollHandler = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
        <ScrollHandler />
        <Header />
        <Navigation />
        
        <main className="flex-grow max-w-6xl mx-auto w-full p-4 md:p-6 lg:p-8">
          <Routes>
            <Route path="/" element={<Navigate to="/acceso" replace />} />
            <Route path="/acceso" element={<AccessView />} />
            <Route path="/puntuacion" element={<ScoreView />} />
            <Route path="/llamamientos" element={<CallupsView />} />
            <Route path="/penalizaciones" element={<PenaltiesView />} />
          </Routes>
        </main>

        <Footer />
        <ScrollToTopButton />
      </div>
    </HashRouter>
  );
};

export default App;