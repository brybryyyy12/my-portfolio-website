import { FaCertificate, FaThumbsUp } from 'react-icons/fa';
interface CertificationsProps {
  darkMode: boolean;
}

export default function Certifications({ darkMode }: CertificationsProps) {
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

  return (
    <div className="h-50 w-250 flex gap-6">
      
      {/* Certification Box */}
      <div
        className={`h-50 w-125 rounded p-2 flex flex-col justify-start ${textColor} transition-transform duration-300 hover:-translate-y-2`}
        style={glassyStyle}
      >
        <h3 className="font-heading text-sm mb-1 flex items-center gap-2">
          <FaCertificate className="text-black-500" /> Certification
        </h3>
        <p className={`font-body text-xs ${subTextColor}`}>
          [Placeholder for certification details]
        </p>
      </div>

      {/* Recommendation Box */}
      <div
        className={`h-50 w-125 rounded p-2 flex flex-col justify-start ${textColor} transition-transform duration-300 hover:-translate-y-2`}
        style={glassyStyle}
      >
        <h3 className="font-heading text-sm mb-1 flex items-center gap-2">
          <FaThumbsUp className="text-black-500" /> Recommendation
        </h3>
        <p className={`font-body text-xs ${subTextColor}`}>
          [Placeholder for recommendation details]
        </p>
      </div>
    </div>
  );
}
