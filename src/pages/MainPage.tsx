import { useState } from 'react';
import Background from '../components/Background';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Certifications from '../components/Certifications';
import Contacts from '../components/Contacts';
import Footer from '../components/Footer';

export default function MainPage() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`relative min-h-screen flex flex-col gap-2 items-center ${darkMode ? 'text-white' : 'text-black'}`}>
      
      <Background darkMode={darkMode} />

      <Hero darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
      <About darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Certifications darkMode={darkMode} />
      <Contacts darkMode={darkMode} />
      <Footer darkMode={darkMode} />

    </div>
  );
}
