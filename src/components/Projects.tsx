import pfp from '../assets/pfp.jpg';
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
  const glassyBg = darkMode
    ? 'rgba(50, 80, 120, 0.4)'
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
    <div className="w-full px-4 md:px-6 lg:px-8 py-4 md:py-6">
      <div className="w-full flex justify-center">
        <div className="w-full max-w-4xl">
          {/* Header with title and View All */}
          <div className="flex justify-between items-center mb-4 md:mb-6">
            <h2 className={`font-heading text-xl md:text-2xl lg:text-3xl ${textColor}`}>
              Projects
            </h2>
            <button
              className={`border-2 rounded cursor-pointer font-button ${glassyBg} px-4 py-1.5 md:px-5 md:py-2 transition-all duration-200 ${buttonHoverBg} text-sm md:text-base`}
              onClick={() => navigate('/projects')}
              style={{ borderColor }}
            >
              View All
            </button>
          </div>

          {/* Projects List */}
          <div className="flex flex-col gap-4 md:gap-6">
            {[1, 2].map(i => (
              <div
                key={i}
                className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full transition-transform duration-300 hover:-translate-y-2 p-3 md:p-4"
                style={glassyStyle}
              >
                {/* Image - Responsive sizing */}
                <div className="w-full sm:w-40 md:w-48 lg:w-56 h-48 sm:h-auto flex-shrink-0 overflow-hidden rounded-lg">
                  <img 
                    src={pfp} 
                    alt={`Project ${i}`} 
                    className="h-full w-full object-cover"
                  />
                </div>
                
                {/* Info - Responsive text and spacing */}
                <div className="flex flex-col justify-between p-1 md:p-2 w-full">
                  <div className="mb-2 md:mb-3">
                    <h3 className={`font-heading text-lg md:text-xl lg:text-2xl ${textColor} mb-1 md:mb-2`}>
                      Project Title {i}
                    </h3>
                    <p className={`font-body ${subTextColor} text-sm md:text-base`}>
                      [Short description placeholder] This is a brief description of what this project does and the technologies used. It should be concise but informative.
                    </p>
                  </div>
                  
                  {/* Tech tags - Responsive */}
                  <div className="flex flex-wrap gap-2 mt-2 md:mt-3">
                    {['React', 'Node.js', 'MongoDB', 'Tailwind'].map((tech, idx) => (
                      <span
                        key={idx}
                        className={`text-xs md:text-sm px-2 py-1 rounded border ${darkMode ? 'border-white/30 bg-white/10' : 'border-black/30 bg-black/10'} ${textColor}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>


        </div>
      </div>
    </div>
  );
}