import { FaUser, FaBriefcase, FaReact, FaNodeJs, FaTools } from 'react-icons/fa';
import { MdCode } from 'react-icons/md';

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
    <div className="w-full flex justify-center  px-4 md:px-6 lg:px-8 py-4 md:py-2">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        {/* Top Row - About & Experience */}
        <div className="lg:col-span-2 xl:ml-30 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* Left Box - About */}
          <div
            className={`w-full h-auto p-4 md:p-6 xl:w-140 flex flex-col transition-transform duration-300 hover:-translate-y-2 ${textColor} font-body`}
            style={glassyStyle}
          >
            <h2 className="font-heading flex items-center gap-2 text-lg md:text-xl lg:text-2xl mb-3 md:mb-4">
              <FaUser className="text-blue-500 dark:text-blue-300" /> About
            </h2>
            <div className="text-sm md:text-base space-y-3 md:space-y-4">
              <p>
                I'm an aspiring full-stack software engineer, specializing in developing backend and API solutions with JavaScript, Node.js, MongoDB, and a little bit of Python. I work on personal projects, mostly web development projects, that solve real problems and aim to improve user experience.
              </p>
              <p>
                As a student, I am constantly learning and exploring new technologies to enhance my skill set. I enjoy taking complex problems and breaking them down into practical, efficient solutions through code. My passion lies in building scalable applications that are not only functional but also maintainable and user-friendly.
              </p>
              <p>
                I am also interested in collaborating on projects and contributing to open-source communities. Through these experiences, I aim to strengthen my problem-solving abilities, improve my coding practices, and gain a deeper understanding of how real-world applications are designed and deployed. Ultimately, I hope to grow into a well-rounded developer capable of handling both frontend and backend challenges.
              </p>
            </div>
          </div>

          {/* Right Box - Experience */}
          <div
            className={`w-full h-auto p-4 md:p-6 xl:w-80 xl:ml-15 flex flex-col transition-transform duration-300 hover:-translate-y-2 ${textColor} font-body`}
            style={glassyStyle}
          >
            <h2 className="font-heading flex gap-2 items-center text-lg md:text-xl lg:text-2xl mb-3 md:mb-4">
              <FaBriefcase className="text-blue-500 dark:text-blue-300" /> Experience
            </h2>
            <div className="flex flex-col gap-3 md:gap-4">
              {/* 4th Year */}
              <div className="flex items-start gap-3 md:gap-4">
                <div className="flex flex-col items-center flex-shrink-0">
                  <span className="text-xs md:text-sm font-bold">2026</span>
                  <div className={`w-[1px] h-4 md:h-6 ${timelineColor}`}></div>
                  <div className={`w-2 h-2 md:w-3 md:h-3 rounded-full mt-1 ${timelineColor}`}></div>
                </div>
                <div className="text-xs md:text-sm">
                  <span className="font-semibold">4th year IT student</span><br />
                  Learned MERN stack and advanced concepts
                </div>
              </div>

              {/* 3rd Year */}
              <div className="flex items-start gap-3 md:gap-4">
                <div className="flex flex-col items-center flex-shrink-0">
                  <span className="text-xs md:text-sm font-bold">2025</span>
                  <div className={`w-[1px] h-4 md:h-6 ${timelineColor}`}></div>
                  <div className={`w-2 h-2 md:w-3 md:h-3 rounded-full mt-1 ${timelineColor}`}></div>
                </div>
                <div className="text-xs md:text-sm">
                  <span className="font-semibold">3rd year</span><br />
                  Made small projects using React + Python
                </div>
              </div>

              {/* 2nd Year */}
              <div className="flex items-start gap-3 md:gap-4">
                <div className="flex flex-col items-center flex-shrink-0">
                  <span className="text-xs md:text-sm font-bold">2024</span>
                  <div className={`w-[1px] h-4 md:h-6 ${timelineColor}`}></div>
                  <div className={`w-2 h-2 md:w-3 md:h-3 rounded-full mt-1 ${timelineColor}`}></div>
                </div>
                <div className="text-xs md:text-sm">
                  <span className="font-semibold">2nd year</span><br />
                  Learned how to use React and databases
                </div>
              </div>

              {/* 1st Year */}
              <div className="flex items-start gap-3 md:gap-4">
                <div className="flex flex-col items-center flex-shrink-0">
                  <span className="text-xs md:text-sm font-bold">2023</span>
                  <div className={`w-[1px] h-4 md:h-6 ${timelineColor}`}></div>
                  <div className={`w-2 h-2 md:w-3 md:h-3 rounded-full mt-1 ${timelineColor}`}></div>
                </div>
                <div className="text-xs md:text-sm">
                  <span className="font-semibold">1st year</span><br />
                  Learned fundamentals: OOP, Data Types, Python
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row - Tech Stack */}
        <div
          className={`lg:col-span-2 w-full h-auto xl:w-227 xl:ml-30 p-4 md:p-6 flex flex-col transition-transform duration-300 hover:-translate-y-2 ${textColor} font-body`}
          style={glassyStyle}
        >
          {/* Tech Stack Heading */}
          <h2 className="font-heading text-lg md:text-xl lg:text-2xl mb-4 md:mb-6 flex items-center gap-2">
            <MdCode className="text-blue-500 dark:text-blue-300 text-xl md:text-2xl" /> Tech Stack
          </h2>

          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6 md:gap-8 lg:gap-12">
            {/* Frontend */}
            <div className="flex flex-col items-center w-full md:w-1/3">
              <FaReact className="text-blue-400 dark:text-blue-300 text-2xl md:text-3xl lg:text-4xl mb-2 md:mb-3" />
              <h3 className="font-heading mb-2 md:mb-3 text-base md:text-lg">Frontend</h3>
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 w-full">
                {['React', 'Tailwind', 'Vite', 'JavaScript', 'TypeScript', 'HTML/CSS'].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs md:text-sm border px-2 py-1 md:px-3 md:py-2 rounded bg-white/20 dark:bg-black/20 text-center truncate"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="flex flex-col items-center w-full md:w-1/3">
              <FaNodeJs className="text-green-500 dark:text-green-300 text-2xl md:text-3xl lg:text-4xl mb-2 md:mb-3" />
              <h3 className="font-heading mb-2 md:mb-3 text-base md:text-lg">Backend</h3>
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 w-full">
                {['Node.js', 'Express.js', 'MongoDB', 'MySQL', 'FastAPI', 'JWT'].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs xl:text-sm border px-2 py-1 md:px-3 md:py-2 rounded bg-white/20 dark:bg-black/20 text-center truncate"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="flex flex-col items-center w-full md:w-1/3">
              <FaTools className="text-gray-600 dark:text-black-300 text-2xl md:text-3xl lg:text-4xl mb-2 md:mb-3" />
              <h3 className="font-heading mb-2 md:mb-3 text-base md:text-lg">Tools</h3>
              <div className="grid grid-cols-2 md:grid-cols-2 gap-2 md:gap-3 w-full">
                {['Git', 'Postman', 'VSCode', 'GitHub'].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs md:text-sm border px-2 py-1 md:px-3 md:py-2 rounded bg-white/20 dark:bg-black/20 text-center truncate"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}