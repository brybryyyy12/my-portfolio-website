import { FaRegCopyright } from 'react-icons/fa';

interface FooterProps {
  darkMode: boolean;
}

export default function Footer({ darkMode }: FooterProps) {
  const textColor = darkMode ? 'text-white' : 'text-black';
  const borderColor = darkMode ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.6)';

  const glassyBg =  darkMode
    ? 'rgba(50, 80, 120, 0.4)'  // deep icy blue, semi-transparent
    : 'rgba(173, 216, 230, 0.4)';


  return (
    <div
      className="h-20 w-250 flex items-center justify-center transition-colors duration-200"
      style={{
        borderRadius: '15px',
        border: `2px solid ${borderColor}`,
        backdropFilter: 'blur(2px)',
        WebkitBackdropFilter: 'blur(2px)',
        backgroundColor: glassyBg,
    
      }}
    >
      <p className={`font-body text-sm flex items-center gap-1 ${textColor}`}>
        <FaRegCopyright size={14} />
        2025 Brian Salise. All rights reserved.
      </p>
    </div>
  );
}
