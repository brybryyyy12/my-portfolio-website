import pfp from '../assets/pfp.jpg'; // adjust path if needed
import { useNavigate } from 'react-router-dom';

interface ProjectsProps {
  darkMode: boolean;
}

export default function Projects({ darkMode }: ProjectsProps) {
  const navigate = useNavigate();
  const textColor = darkMode ? 'text-white' : 'text-black';
  const subTextColor = darkMode ? 'text-gray-300' : 'text-gray-700';
  const borderColor = darkMode ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.6)';
  const shadowColor = darkMode ? 'rgba(255,255,255,1)' : 'rgba(0,0,0,1)';
  const glassyBg =  darkMode
    ? 'rgba(50, 80, 120, 0.4)'  // deep icy blue, semi-transparent
    : 'rgba(173, 216, 230, 0.4)';

  const glassyStyle = {
    borderRadius: '15px',
    border: `2px solid ${borderColor}`,
    backdropFilter: 'blur(2px)',
    WebkitBackdropFilter: 'blur(2px)',
    backgroundColor: glassyBg,
    boxShadow: `6px 6px 0px 0px ${shadowColor}`,
  };

  const buttonHoverBg = darkMode
    ? 'hover:bg-white/80 hover:text-black'
    : 'hover:bg-black/50 hover:text-white';

  return (
    <div className="h-100 w-250 mt-4">
      {/* Header with title and View All */}
      <div className="flex justify-between items-center mt-2">
        <h2 className={`font-heading  text-lg ${textColor}`}>Projects</h2>
        <button
          className={`border-2 rounded cursor-pointer font-button ${glassyBg}  px-3 py-0 transition-all duration-200 ${buttonHoverBg}`}
          onClick={()=>navigate('/projects')}
          style={{ borderColor }}
        >
          View All
        </button>
      </div>

      {/* Projects List */}
      <div className={`flex flex-col gap-3 h-[calc(100%-48px)]`}>
        {[1, 2].map(i => (
          <div
            key={i}
            className="flex gap-2 mt-2 w-full transition-transform duration-300 hover:-translate-y-2"
            style={glassyStyle}
          >
            {/* Image */}
            <div className="h-full w-40 flex-shrink-0 overflow-hidden" style={{ borderRadius: '15px' }}>
              <img src={pfp} alt={`Project ${i}`} className="h-full w-full object-cover" />
            </div>
            {/* Info */}
            <div className="flex flex-col justify-between p-1 w-full">
              <h3 className={`font-heading  ${textColor}`}>Project Title {i}</h3>
              <p className={`font-body ${subTextColor} text-sm`}>
                [Short description placeholder]
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
