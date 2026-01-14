import { useEffect, useRef, useState } from 'react';
import { BsGeoAlt } from 'react-icons/bs';
import { FaHeart, FaMoon, FaSun } from 'react-icons/fa';
import pfp from '../assets/pfp.jpg';
import pfpDark from '../assets/pfpdark.png';
import myPfp from '../assets/mypfp.jpg';
import { useNavigate } from 'react-router-dom'; 

interface HeroProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Hero({ darkMode, toggleDarkMode }: HeroProps) {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);
  const heartsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    heartsRef.current.forEach((el, i) => {
      if (!el) return;
      const anim = el.animate(
        [
          { transform: 'translateY(0px) scale(1)', opacity: 1 },
          { transform: 'translateY(-10px) scale(1.2)', opacity: 0.7 },
          { transform: 'translateY(0px) scale(1)', opacity: 1 },
        ],
        { duration: 2000 + i * 300, iterations: Infinity, easing: 'ease-in-out' }
      );
      return () => anim.cancel();
    });
  }, []);

  const textColor = darkMode ? 'text-white' : 'text-black';
  const heartColor = darkMode ? 'text-pink-300' : 'text-pink-400';
  const locationIconColor = darkMode ? '#fff' : '#4B5563';

  const buttonWhiteBg = darkMode
    ? 'bg-black/80 text-white border-white hover:bg-white/50 hover:text-black'
    : 'bg-white/50 text-black border-black hover:bg-black/80 hover:text-white';
  const buttonBlackBg = darkMode
    ? 'bg-white/50 text-black border-white hover:bg-black/80 hover:text-white'
    : 'bg-black/80 text-white border-black hover:bg-white/50 hover:text-black';

  // Image logic
  const currentImage = hovered ? myPfp : darkMode ? pfpDark : pfp;

  // Info box icy background style
  const infoBoxStyle = {
    boxShadow: darkMode
      ? 'inset 0 0 15px rgba(255,255,255,1), 6px 6px 0 rgba(255,255,255,1)'
      : 'inset 0 0 15px rgba(255,255,255,1), 6px 6px 0 rgba(0,0,0,1)',
    background: darkMode
      ? 'rgba(50, 80, 120, 0.4)'  // deep icy blue, semi-transparent
      : 'rgba(173, 216, 230, 0.4)', // light icy blue, semi-transparent
    backdropFilter: 'blur(2px) saturate(150%)', // glass effect
    WebkitBackdropFilter: 'blur(2px) saturate(150%)',
    border: darkMode ? '2px solid rgba(255,255,255,0.3)' : '2px solid rgba(255,255,255,0.4)',
    borderRadius: '15px',
  };

  return (
    <div className="w-full flex flex-col md:flex-row justify-center items-center md:items-stretch gap-4 md:gap-6 lg:gap-8 px-4 md:px-6 lg:px-8 py-4 md:py-6 relative">
      {/* Image Box - Match height with info box on PC */}
      <div
        className="w-32 h-32 md:h-auto md:w-40 lg:w-48 flex-shrink-0 border rounded flex items-center justify-center overflow-hidden relative transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
        style={{
          boxShadow: darkMode
            ? '6px 6px 0px rgba(255,255,255,1)'
            : '6px 6px 0px rgba(0,0,0,1)',
          backgroundColor: darkMode ? '#333' : '#f3f3f3',
          borderRadius: '15px',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => setHovered(!hovered)} // Mobile toggle
      >
        <img 
          src={currentImage} 
          alt="Profile" 
          className="h-full w-full object-cover md:h-full md:object-cover"
        />
      </div>

      {/* Info Box - Set min-height to match image on PC */}
      <div
        className="w-full md:w-auto md:flex-1 max-w-2xl rounded-lg p-4 md:p-6 flex flex-col justify-between relative transition-transform duration-300 hover:-translate-y-2"
        style={infoBoxStyle}
      >
        {/* Dark Mode Toggle - Responsive positioning */}
        <div className="absolute top-3 right-3 md:top-4 md:right-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full border-2 border-white bg-gray-400 hover:bg-white hover:text-black transition-colors duration-200 text-sm md:text-base"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>

        {/* Hearts - Responsive sizing */}
        <div className="absolute -top-3 right-12 md:-top-4 md:right-14 flex gap-1">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              ref={el => {
                heartsRef.current[i] = el!;
              }}
              className="inline-block"
            >
              <FaHeart className={`${heartColor} text-sm md:text-base`} />
            </div>
          ))}
        </div>

        {/* Content Container with proper spacing */}
        <div className="space-y-2 md:space-y-3 lg:space-y-4 md:flex-1 md:flex md:flex-col md:justify-between">
          <div>
            {/* Name - Responsive font sizes */}
            <h1 className={`font-heading tracking-tight ${textColor} text-xl md:text-2xl lg:text-3xl`}>
              Brian Salise
            </h1>

            {/* Location - Responsive font sizes and spacing */}
            <div
              className="flex items-center gap-1 font-body font-semibold text-sm md:text-base mt-1 md:mt-2"
              style={{ color: locationIconColor }}
            >
              <BsGeoAlt className="text-xs md:text-sm" />
              <span>Tagoloan, Philippines</span>
            </div>

            {/* Title - Responsive font sizes */}
            <p className={`font-body font-medium ${textColor} text-base md:text-lg lg:text-xl mt-1 md:mt-2`}>
              Software Engineer
            </p>
          </div>

          {/* Buttons - Responsive layout and sizing */}
          <div className="flex flex-col sm:flex-row gap-2 md:gap-3 mt-4 md:mt-6">
            <button
              className={`cursor-pointer font-button font-bold px-4 py-2 md:px-3 md:py-1 transition-all duration-200 relative overflow-hidden border-2 rounded text-sm md:text-base ${buttonWhiteBg}`}
              onClick={() => navigate('/projects')}
            >
              View Projects
            </button>
            <button
              className={`cursor-pointer font-button font-bold px-4 py-2 md:px-3 md:py-1 transition-all duration-200 relative border-2 rounded text-sm md:text-base ${buttonBlackBg}`}
            >
              Send Email
            </button>
          </div>
        </div>

        {/* Mobile tap hint */}
        <div className="md:hidden text-xs text-center mt-4 text-gray-500 dark:text-gray-400">
          Tap image to toggle
        </div>
      </div>
    </div>
  );
}