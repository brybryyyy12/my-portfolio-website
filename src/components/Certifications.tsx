import { FaCertificate, FaThumbsUp } from 'react-icons/fa';

interface CertificationsProps {
  darkMode: boolean;
}

export default function Certifications({ darkMode }: CertificationsProps) {
  const textColor = darkMode ? 'text-white' : 'text-black';
  const subTextColor = darkMode ? 'text-gray-300' : 'text-gray-700';
  const borderColor = darkMode ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.6)';
  const shadowColor = darkMode ? 'rgba(255,255,255,1)' : 'rgba(0,0,0,1)';
  const glassyBg = darkMode
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

  return (
    <div className="w-full px-4 md:px-6 lg:px-8 py-4 md:py-6">
      <div className="w-full flex justify-center">
        <div className="w-full max-w-4xl">
          {/* Two column layout on desktop, stacked on mobile */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8">
            
            {/* Certification Box */}
            <div
              className={`w-full md:w-1/2 rounded-lg p-4 md:p-5 lg:p-6 flex flex-col justify-start ${textColor} transition-transform duration-300 hover:-translate-y-2`}
              style={glassyStyle}
            >
              <h3 className="font-heading text-lg md:text-xl lg:text-2xl mb-3 md:mb-4 flex items-center gap-2 md:gap-3">
                <FaCertificate className="text-blue-500 dark:text-blue-300 text-xl md:text-2xl" /> 
                Certifications
              </h3>
              <div className="space-y-3 md:space-y-4">
                <div>
                  <h4 className="font-heading text-base md:text-lg mb-1 md:mb-2">Frontend Developer Certification</h4>
                  <p className={`font-body text-sm md:text-base ${subTextColor}`}>
                    Completed advanced React and TypeScript courses with focus on modern frontend architecture.
                  </p>
                </div>
                <div>
                  <h4 className="font-heading text-base md:text-lg mb-1 md:mb-2">Backend API Development</h4>
                  <p className={`font-body text-sm md:text-base ${subTextColor}`}>
                    Certified in Node.js, Express, and MongoDB for building scalable RESTful APIs.
                  </p>
                </div>
                <div>
                  <h4 className="font-heading text-base md:text-lg mb-1 md:mb-2">Responsive Web Design</h4>
                  <p className={`font-body text-sm md:text-base ${subTextColor}`}>
                    Mastered CSS Grid, Flexbox, and modern responsive design principles.
                  </p>
                </div>
              </div>
              
              {/* View more link */}
              <div className="mt-4 md:mt-6">
                <button className={`text-sm md:text-base ${darkMode ? 'text-blue-300 hover:text-blue-200' : 'text-blue-600 hover:text-blue-800'} font-medium transition-colors duration-200`}>
                  View all certifications →
                </button>
              </div>
            </div>

            {/* Recommendation Box */}
            <div
              className={`w-full md:w-1/2 rounded-lg p-4 md:p-5 lg:p-6 flex flex-col justify-start ${textColor} transition-transform duration-300 hover:-translate-y-2`}
              style={glassyStyle}
            >
              <h3 className="font-heading text-lg md:text-xl lg:text-2xl mb-3 md:mb-4 flex items-center gap-2 md:gap-3">
                <FaThumbsUp className="text-green-500 dark:text-green-300 text-xl md:text-2xl" /> 
                Recommendations
              </h3>
              <div className="space-y-4 md:space-y-5">
                <div className="p-3 md:p-4 rounded-lg bg-white/10 dark:bg-black/10">
                  <p className={`font-body italic text-sm md:text-base ${subTextColor} mb-2 md:mb-3`}>
                    "Brian consistently delivers high-quality code and shows exceptional problem-solving skills. His attention to detail is remarkable."
                  </p>
                  <div className="flex items-center">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-300 dark:bg-gray-600 mr-2 md:mr-3"></div>
                    <div>
                      <p className={`font-heading text-sm md:text-base ${textColor}`}>John Doe</p>
                      <p className={`font-body text-xs md:text-sm ${subTextColor}`}>Senior Developer at TechCorp</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-3 md:p-4 rounded-lg bg-white/10 dark:bg-black/10">
                  <p className={`font-body italic text-sm md:text-base ${subTextColor} mb-2 md:mb-3`}>
                    "A quick learner with great communication skills. Brian contributed significantly to our project's success."
                  </p>
                  <div className="flex items-center">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-300 dark:bg-gray-600 mr-2 md:mr-3"></div>
                    <div>
                      <p className={`font-heading text-sm md:text-base ${textColor}`}>Jane Smith</p>
                      <p className={`font-body text-xs md:text-sm ${subTextColor}`}>Project Manager at StartupXYZ</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* View more link */}
              <div className="mt-4 md:mt-6">
                <button className={`text-sm md:text-base ${darkMode ? 'text-green-300 hover:text-green-200' : 'text-green-600 hover:text-green-800'} font-medium transition-colors duration-200`}>
                  View more recommendations →
                </button>
              </div>
            </div>
          </div>

          {/* Mobile hint */}
          <div className="md:hidden text-xs text-center mt-4 text-gray-500 dark:text-gray-400">
            Swipe or scroll to see both sections
          </div>
        </div>
      </div>
    </div>
  );
}