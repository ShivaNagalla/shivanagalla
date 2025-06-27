
import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import TechStack from '@/components/TechStack';
import ServicesPreview from '@/components/ServicesPreview';
import Footer from '@/components/Footer';

const Index = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-slate-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />
      <HeroSection />
      <TechStack />
      <ServicesPreview />
      <Footer />
    </div>
  );
};

export default Index;
