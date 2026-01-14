import { FaRegCopyright } from 'react-icons/fa';

interface FooterProps {
  darkMode: boolean;
}

export default function Footer({ darkMode }: FooterProps) {
  const textColor = darkMode ? 'text-white' : 'text-black';
  const borderColor = darkMode ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.6)';
  const glassyBg = darkMode
    ? 'rgba(50, 80, 120, 0.4)'
    : 'rgba(173, 216, 230, 0.4)';

  return (
    <div className="w-full px-4 md:px-6 lg:px-8 py-4 md:py-6">
      <div className="w-full flex justify-center">
        <div className="w-full max-w-4xl">
          <div
            className="w-full flex items-center justify-center transition-colors duration-200 py-4 md:py-5 rounded-lg"
            style={{
              border: `2px solid ${borderColor}`,
              backdropFilter: 'blur(2px)',
              WebkitBackdropFilter: 'blur(2px)',
              backgroundColor: glassyBg,
            }}
          >
            <p className={`font-body text-sm md:text-base flex items-center gap-1.5 ${textColor} px-4 text-center`}>
              <FaRegCopyright size={16} />
              2025 Brian Salise. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}