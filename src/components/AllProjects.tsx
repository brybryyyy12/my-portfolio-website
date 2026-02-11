
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import Background from '../components/Background';
import pfp from '../assets/pfp.jpg';

interface AllProjectsProps {
  darkMode: boolean;
}

export default function AllProjects({ darkMode }: AllProjectsProps) {
  const navigate = useNavigate();

  const textColor = darkMode ? 'text-white' : 'text-black';
  const borderColor = darkMode ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.6)';
  const shadowColor = darkMode ? 'rgba(255,255,255,1)' : 'rgba(0,0,0,1)';
  const glassyBg = darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,120,255,0.05)';


  const projects = [
    {
      id:1,
      title: "Simple Chat App",
      image: pfp,
      description: "This project is a real-time web-based chat application that allows users to send and receive messages instantly. It supports user authentication, real-time messaging using WebSockets, and persistent message storage in a database. The system enables seamless communication between users with a responsive and interactive interface.",
      techStack: ["React","Nodejs","MongoDB","TailwindCSS"],
      link: 'https://chat-app-clientside.vercel.app/homepage'
    }
  ]
  return (
    <div className={`relative min-h-screen flex flex-col items-center p-6 ${textColor}`}>
      {/* Background */}
      <Background darkMode={darkMode} />

      {/* Heading and Back Button */}
      <div className="flex items-center gap-4 w-full max-w-6xl z-10 mb-6">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 px-3 py-1 rounded-lg transition-colors cursor-pointer"
          style={{
            backgroundColor: glassyBg,
            border: `2px solid ${borderColor}`,
            boxShadow: `6px 6px 0px 0px ${shadowColor}`,
          }}
        >
          <FaArrowLeft /> Back to Home
        </button>

        <h1 className="font-heading text-2xl">All Projects</h1>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl z-10">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col justify-between p-4 rounded-lg cursor-pointer hover:-translate-y-2 transition-transform"
            style={{
              borderRadius: '15px',
              border: `2px solid ${borderColor}`,
              boxShadow: `6px 6px 0px 0px ${shadowColor}`,
              backgroundColor: glassyBg,
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
            }}
          >
            <h2 className="font-heading text-lg mb-2">{project.title}</h2>
            <p className="text-sm mb-4">{project.description}</p>
            <button
              className="mt-auto px-3 py-1 rounded-lg border-2 text-sm transition-colors cursor-pointer"
              style={{
                backgroundColor: glassyBg,
                border: `2px solid ${borderColor}`,
                boxShadow: `4px 4px 0px 0px ${shadowColor}`,
              }}
              onClick={(e) => {
                e.preventDefault(); // prevent the <a> click if button click
                window.open(project.link, '_blank');
              }}
            >
              View Project
            </button>
          </a>
        ))}

      </div>
    </div>
  );
}
