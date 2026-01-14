import { FaLinkedin, FaGithub, FaInstagram, FaFacebook,FaShareAlt  } from 'react-icons/fa';
import { FaBullseye, FaEnvelope } from 'react-icons/fa';

interface ContactsProps {
  darkMode: boolean;
}

export default function Contacts({ darkMode }: ContactsProps) {

  const subTextColor = darkMode ? 'text-gray-300' : 'text-gray-700';
  const borderColor = darkMode ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.6)';
  const shadowColor = darkMode ? 'rgba(255,255,255,1)' : 'rgba(0,0,0,1)';
  const glassyBg =  darkMode
    ? 'rgba(50, 80, 120, 0.4)'  // deep icy blue, semi-transparent
    : 'rgba(173, 216, 230, 0.4)';


  const glassyStyle = {
    borderRadius: '15px',
    border: `2px solid ${borderColor}`,
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
    backgroundColor: glassyBg,
    boxShadow: `6px 6px 0px 0px ${shadowColor}`,
  };

  const buttonStyle = {
    borderRadius: '8px',
    border: `2px solid ${borderColor}`,
    backdropFilter: 'blur(2px)',
    WebkitBackdropFilter: 'blur(2px)',
    backgroundColor: glassyBg,
    color: darkMode ? 'white' : 'black',
    fontWeight: 'bold',
    padding: '2px 6px',
    fontSize: '0.75rem',
    transition: 'all 0.2s',
  };

  return (
    <div className="h-40 w-250 flex gap-6 mt-2">
      {/* Goal Box */}
      <div
        className="h-40 w-80 p-1 flex flex-col items-center justify-center text-center transition-transform duration-300 hover:-translate-y-2"
        style={glassyStyle}
      >
        <h3 className="font-heading flex items-center gap-2 text-sm mb-2">
          <FaBullseye className="text-black-500" /> Goal
        </h3>
        <p className={`font-body text-xs ${subTextColor}`}>
          "To become a skilled full-stack software engineer who builds efficient, scalable, and user-friendly web applications. I aim to deepen my expertise in backend development, APIs, and database management while continuously learning new technologies, contributing to meaningful projects, and creating solutions that have a real impact."
        </p>
      </div>

      {/* Contact Box */}
      <div
        className="h-40 w-80 p-4 flex flex-col items-center justify-center gap-2 transition-transform duration-300 hover:-translate-y-2"
        style={glassyStyle}
      >
        <h3 className="font-heading text-sm mb-2 flex items-center gap-2">
          <FaEnvelope className="text-black-500" /> Contact
        </h3>

        {/* Email */}
        <div className="w-full flex justify-center">
          <span className={`text-xs border px-3 py-1 rounded bg-white/20 ${subTextColor}`}>
            Email: briansalise12@gmail.com
          </span>
        </div>

        {/* Phone */}
        <div className="w-full flex justify-center">
          <span className={`text-xs border px-3 py-1 rounded bg-white/20 ${subTextColor}`}>
            Phone: +63 967 877 6664
          </span>
        </div>

        {/* Button */}
        <div className="w-full flex justify-center">
          <button
            style={buttonStyle}
            className="text-xs border px-3 py-1 rounded bg-white/20 hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white transition-colors"
          >
            Schedule a Call
          </button>
        </div>
      </div>

      {/* Social Links Box */}
      <div
        className="h-40 w-80 p-4 flex flex-col items-center justify-center transition-transform duration-300 hover:-translate-y-2"
        style={glassyStyle}
      >
        {/* Social Links Heading with Icon */}
        <h3 className="font-heading  text-sm mb-3 flex items-center gap-2">
          <FaShareAlt className="text-black-500" /> Social Links
        </h3>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-2 gap-2 w-full">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/brian-salise-692115268/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 border px-3 py-2 rounded bg-white/20 hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white transition-colors"
          >
            <FaLinkedin className="text-black-600" size={16} /> LinkedIn
          </a>

          {/* GitHub */}
         <a
          href="https://github.com/brybryyyy12"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 border px-3 py-2 rounded bg-white/20 hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white transition-colors"
        >
          <FaGithub className="text-current" size={16} /> GitHub
        </a>


          {/* Instagram */}
          <a
            href="https://www.instagram.com/brybryyyy01?igsh=bjR0ZGF1eWdpNmM="
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 border px-3 py-2 rounded bg-white/20 hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white transition-colors"
          >
            <FaInstagram className="text-black-500" size={16} /> Instagram
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/brian.w3w/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 border px-3 py-2 rounded bg-white/20 hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white transition-colors"
          >
            <FaFacebook className="text-black-700" size={16} /> Facebook
          </a>
        </div>
      </div>
    </div>
  );
}
