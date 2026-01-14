import { FaLinkedin, FaGithub, FaInstagram, FaFacebook, FaShareAlt, FaBullseye, FaEnvelope } from 'react-icons/fa';

interface ContactsProps {
  darkMode: boolean;
}

export default function Contacts({ darkMode }: ContactsProps) {
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

  return (
    <div className="w-full px-4 md:px-6 lg:px-8 py-4 md:py-2">
      <div className="w-full flex justify-center">
        <div className="w-full max-w-4xl">
          {/* Responsive layout: stacked on mobile, 3-column on desktop */}
          <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
            
            {/* Goal Box */}
            <div
              className="w-full lg:w-1/3 p-4 md:p-4 lg:p-5 flex flex-col transition-transform duration-300 hover:-translate-y-2"
              style={glassyStyle}
            >
              <h3 className={`font-heading flex items-center gap-2 text-base md:text-lg mb-3 ${textColor}`}>
                <FaBullseye className="text-blue-500 dark:text-blue-300 text-lg md:text-xl" /> Goal
              </h3>
              <p className={`font-body text-xs md:text-sm ${subTextColor} leading-relaxed`}>
                "To become a skilled full-stack software engineer who builds efficient, scalable, and user-friendly web applications. I aim to deepen my expertise in backend development, APIs, and database management while continuously learning new technologies."
              </p>
            </div>

            {/* Contact Box */}
            <div
              className="w-full lg:w-1/3 p-4 md:p-4 lg:p-5 flex flex-col transition-transform duration-300 hover:-translate-y-2"
              style={glassyStyle}
            >
              <h3 className={`font-heading text-base md:text-lg mb-3 flex items-center gap-2 ${textColor}`}>
                <FaEnvelope className="text-green-500 dark:text-green-300 text-lg md:text-xl" /> Contact
              </h3>

              <div className="space-y-3 flex-grow">
                {/* Email */}
                <div className="w-full">
                  <span className={`text-xs md:text-sm border px-3 py-1.5 rounded bg-white/20 dark:bg-black/20 ${textColor} w-full block text-center truncate`}>
                    📧 briansalise12@gmail.com
                  </span>
                </div>

                {/* Phone */}
                <div className="w-full">
                  <span className={`text-xs md:text-sm border px-3 py-1.5 rounded bg-white/20 dark:bg-black/20 ${textColor} w-full block text-center`}>
                    📱 +63 967 877 6664
                  </span>
                </div>

                {/* Button */}
                <div className="w-full mt-2">
                  <button
                    className={`w-full text-xs md:text-sm border px-3 py-1.5 rounded font-bold transition-all duration-200 ${
                      darkMode 
                        ? 'bg-white/20 text-white border-white hover:bg-white hover:text-black' 
                        : 'bg-black/20 text-black border-black hover:bg-black hover:text-white'
                    }`}
                  >
                    Schedule a Call
                  </button>
                </div>
              </div>
            </div>

            {/* Social Links Box */}
            <div
              className="w-full lg:w-1/3 p-4 md:p-4 lg:p-5 flex flex-col transition-transform duration-300 hover:-translate-y-2"
              style={glassyStyle}
            >
              {/* Social Links Heading */}
              <h3 className={`font-heading text-base md:text-lg mb-3 flex items-center gap-2 ${textColor}`}>
                <FaShareAlt className="text-purple-500 dark:text-purple-300 text-lg md:text-xl" /> Social
              </h3>

              {/* Social links grid */}
              <div className="grid grid-cols-2 gap-2 md:gap-3 w-full">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/brian-salise-692115268/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-1.5 border px-2 py-1.5 rounded bg-white/20 dark:bg-black/20 transition-all duration-200 text-xs md:text-sm ${
                    darkMode 
                      ? 'hover:bg-blue-900/50 hover:border-blue-400' 
                      : 'hover:bg-blue-100 hover:border-blue-600'
                  }`}
                >
                  <FaLinkedin className="text-blue-600 dark:text-blue-400" size={14} />
                  <span>LinkedIn</span>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/brybryyyy12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-1.5 border px-2 py-1.5 rounded bg-white/20 dark:bg-black/20 transition-all duration-200 text-xs md:text-sm ${
                    darkMode 
                      ? 'hover:bg-gray-800/50 hover:border-gray-400' 
                      : 'hover:bg-gray-100 hover:border-gray-600'
                  }`}
                >
                  <FaGithub className="text-gray-800 dark:text-gray-300" size={14} />
                  <span>GitHub</span>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/brybryyyy01?igsh=bjR0ZGF1eWdpNmM="
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-1.5 border px-2 py-1.5 rounded bg-white/20 dark:bg-black/20 transition-all duration-200 text-xs md:text-sm ${
                    darkMode 
                      ? 'hover:bg-pink-900/50 hover:border-pink-400' 
                      : 'hover:bg-pink-100 hover:border-pink-600'
                  }`}
                >
                  <FaInstagram className="text-pink-600 dark:text-pink-400" size={14} />
                  <span>Instagram</span>
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/brian.w3w/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-1.5 border px-2 py-1.5 rounded bg-white/20 dark:bg-black/20 transition-all duration-200 text-xs md:text-sm ${
                    darkMode 
                      ? 'hover:bg-blue-900/50 hover:border-blue-400' 
                      : 'hover:bg-blue-100 hover:border-blue-600'
                  }`}
                >
                  <FaFacebook className="text-blue-700 dark:text-blue-400" size={14} />
                  <span>Facebook</span>
                </a>
              </div>
              
              {/* Social links hint */}
              <div className="mt-2 text-center">
                <p className={`text-xs ${subTextColor}`}>
                  Connect with me
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}