import { useEffect, useRef, useState } from 'react';
import { BsGeoAlt } from 'react-icons/bs';
import { FaHeart, FaMoon, FaSun } from 'react-icons/fa';
import pfp from '../assets/pfp.jpg';
import pfpDark from '../assets/pfpdark.png';
import myPfp from '../assets/mypfp.jpg'; // hover image
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
    ? 'inset 0 0 15px rgba(255,255,255,0.2), 6px 6px 0 rgba(255,255,255,0.8)'
    : 'inset 0 0 15px rgba(255,255,255,0.2), 6px 6px 0 rgba(0,0,0,0.8)',
  background: darkMode
    ? 'rgba(50, 80, 120, 0.4)'  // deep icy blue, semi-transparent
    : 'rgba(173, 216, 230, 0.4)', // light icy blue, semi-transparent
  backdropFilter: 'blur(2px) saturate(150%)', // glass effect
  WebkitBackdropFilter: 'blur(2px) saturate(150%)',
  border: darkMode ? '2px solid rgba(255,255,255,0.3)' : '2px solid rgba(255,255,255,0.4)',
  borderRadius: '15px',
};


  return (
    <div className="w-full h-40 flex justify-center gap-2 mt-5 relative">
      {/* Image Box */}
      <div
        className={`h-40 w-40 border rounded flex items-center justify-center overflow-hidden relative transition-transform duration-300 hover:-translate-y-2`}
        style={{
          boxShadow: darkMode
            ? '6px 6px 0px rgba(255,255,255,1)'
            : '6px 6px 0px rgba(0,0,0,1)',
          backgroundColor: darkMode ? '#333' : '#f3f3f3',
          borderRadius: '15px',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img src={currentImage} alt="Profile" className="h-full w-full object-cover" />
      </div>

      {/* Info Box */}
      <div
        className="h-40 w-210 rounded p-4 flex flex-col justify-between relative transition-transform duration-300 hover:-translate-y-2"
        style={infoBoxStyle}
      >
        {/* Dark Mode Toggle */}
        <div className="absolute top-2 right-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full border-2 border-white bg-gray-400 hover:bg-white hover:text-black transition-colors duration-200"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>

        {/* Hearts */}

        <div className="absolute -top-4 right-14 flex gap-1">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              ref={el => {
                heartsRef.current[i] = el!;
              }}
              className="inline-block"
            >
              <FaHeart className={heartColor} />
            </div>
          ))}
        </div>


        {/* Name */}
        <h1 className={`text-2xl font-heading tracking-tight ${textColor}`}>Brian Salise</h1>

        {/* Location */}
        <div
          className="flex items-center gap-1 font-body font-semibold"
          style={{ color: locationIconColor }}
        >
          <BsGeoAlt size={16} />
          <span>Tagoloan, Philippines</span>
        </div>

        {/* Title */}
        <p className={`font-body font-medium text-lg ${textColor}`}>Software Engineer</p>

        {/* Buttons */}
        <div className="flex gap-2 mt-2 relative">
          <button
            className={`w-50 cursor-pointer font-button font-bold px-3 py-1 transition-all duration-200 relative overflow-hidden border-2 rounded ${buttonWhiteBg}`}
            onClick={()=> navigate('/projects')}
          >
            View Projects
          </button>
          <button
            className={`w-50 cursor-pointer font-button font-bold px-3 py-1 transition-all duration-200 relative border-2 rounded ${buttonBlackBg}`}
          >
            Send Email
          </button>
        </div>
      </div>
    </div>
  );
}
