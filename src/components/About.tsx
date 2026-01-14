import { FaUser } from 'react-icons/fa';
import { FaBriefcase } from 'react-icons/fa'
import { FaReact, FaNodeJs, FaTools } from 'react-icons/fa';
import { MdCode } from 'react-icons/md'; // Icon for main Tech Stack heading
interface AboutProps {
  darkMode: boolean;
}

export default function About({ darkMode }: AboutProps) {
  const textColor = darkMode ? 'text-white' : 'text-black';
  const timelineColor = darkMode ? 'bg-white' : 'bg-black';

  // Glassy background style
  const glassyStyle = {
    borderRadius: '15px',
    border: `2px solid ${darkMode ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)'}`,
    backdropFilter: 'blur(2px)',
    WebkitBackdropFilter: 'blur(2px)',
    background: darkMode
    ? 'rgba(50, 80, 120, 0.4)'  // deep icy blue, semi-transparent
    : 'rgba(173, 216, 230, 0.4)',
    
    boxShadow: darkMode
      ? '6px 6px 0px rgba(255,255,255,1)'
      : '6px 6px 0px rgba(0,0,0,1)',
  };

  return (
    <div className="grid grid-cols-2 gap-1 h-130 w-250 mt-2 mb-2">
      {/* Left Box - About */}
      <div
        className={`h-90 w-175 border p-3 flex flex-col justify-start transition-transform duration-300 hover:-translate-y-2 ${textColor} font-body`}
        style={glassyStyle}
      >
        <h2 className="font-heading flex items-center gap-2 text-lg mb-1">
          <FaUser className="text-white-500" /> About
        </h2>
        <p className="text-sm">
          I'm an aspiring full-stack software engineer, specializing in developing backend and API solutions with JavaScript, Node.js, MongoDB, and a little bit of Python. I work on personal projects, mostly web development projects, that solve real problems and aim to improve user experience.
          <br /><br />
          As a student, I am constantly learning and exploring new technologies to enhance my skill set. I enjoy taking complex problems and breaking them down into practical, efficient solutions through code. My passion lies in building scalable applications that are not only functional but also maintainable and user-friendly.
          <br /><br />
          I am also interested in collaborating on projects and contributing to open-source communities. Through these experiences, I aim to strengthen my problem-solving abilities, improve my coding practices, and gain a deeper understanding of how real-world applications are designed and deployed. Ultimately, I hope to grow into a well-rounded developer capable of handling both frontend and backend challenges.
        </p>
      </div>

      {/* Right Box - Experience */}
      <div
        className={`h-90 w-70 p-2 flex flex-col justify-start justify-self-end transition-transform duration-300 hover:-translate-y-2 ${textColor} font-body`}
        style={glassyStyle}
      >
        <h2 className="font-heading flex gap-2 items-center text-lg mb-1">
          <FaBriefcase className="text-black-500" /> Experience

        </h2>
        <div className="flex flex-col gap-2 mt-1">
          {/* 4th Year */}
          <div className="flex items-start gap-2">
            <div className="flex flex-col items-center">
              <span className="text-xs font-bold">2026</span>
              <div className={`w-[1px] h-4 ${timelineColor}`}></div>
              <div className={`w-2 h-2 rounded-full mt-1 ${timelineColor}`}></div>
            </div>
            <div className="text-xs">
              4th year IT student<br />
              Learned MERN stack
            </div>
          </div>

          {/* 3rd Year */}
          <div className="flex items-start gap-2">
            <div className="flex flex-col items-center">
              <span className="text-xs font-bold">2025</span>
              <div className={`w-[1px] h-4 ${timelineColor}`}></div>
              <div className={`w-2 h-2 rounded-full mt-1 ${timelineColor}`}></div>
            </div>
            <div className="text-xs">
              3rd year<br />
              Made small projects using React + Python
            </div>
          </div>

          {/* 2nd Year */}
          <div className="flex items-start gap-2">
            <div className="flex flex-col items-center">
              <span className="text-xs font-bold">2024</span>
              <div className={`w-[1px] h-4 ${timelineColor}`}></div>
              <div className={`w-2 h-2 rounded-full mt-1 ${timelineColor}`}></div>
            </div>
            <div className="text-xs">
              2nd year<br />
              Learned how to use React and databases
            </div>
          </div>

          {/* 1st Year */}
          <div className="flex items-start gap-2">
            <div className="flex flex-col items-center">
              <span className="text-xs font-bold">2023</span>
              <div className={`w-[1px] h-4 ${timelineColor}`}></div>
              <div className={`w-2 h-2 rounded-full mt-1 ${timelineColor}`}></div>
            </div>
            <div className="text-xs">
              1st year<br />
              Learned fundamentals: OOP, Data Types, Python
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row - Tech Stack */}
      <div
        className={`col-span-2 h-auto w-250 p-2 flex flex-col justify-start mt-3 transition-transform duration-300 hover:-translate-y-2 ${textColor} font-body`}
        style={glassyStyle}
      >
        {/* Tech Stack Heading */}
        <h2 className="font-heading text-lg mb-3 flex items-center gap-2">
          <MdCode className="text-black-500 text-xl" /> Tech Stack
        </h2>

        <div className="flex justify-around w-full">
          {/* Frontend */}
          <div className="flex flex-col items-center">
            <FaReact className="text-black-400 text-2xl mb-1" />
            <h3 className="font-heading mb-1">Frontend</h3>
            <div className="grid grid-cols-3 gap-2">
              {['React', 'Tailwind', 'Vite', 'JavaScript', 'TypeScript', 'Tailwind CSS'].map((tech) => (
                <span
                  key={tech}
                  className="text-xs border px-2 py-1 rounded bg-white/20 text-center"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="flex flex-col items-center">
            <FaNodeJs className="text-black-500 text-2xl mb-1" />
            <h3 className="font-heading mb-1">Backend</h3>
            <div className="grid grid-cols-3 gap-2">
              {['Node.js', 'Express.js', 'MongoDB', 'MySQL', 'FastAPI', 'JWT'].map((tech) => (
                <span
                  key={tech}
                  className="text-xs border px-2 py-1 rounded bg-white/20 text-center"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="flex flex-col items-center">
            <FaTools className="text-black-500 text-2xl mb-1" />
            <h3 className="font-heading mb-1">Tools</h3>
            <div className="grid grid-cols-3 gap-2">
              {['Git', 'Postman', 'VSCode', 'GitHub'].map((tech) => (
                <span
                  key={tech}
                  className="text-xs border px-2 py-1 rounded bg-white/20 text-center"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
