
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import Background from '../components/Background';

interface AllProjectsProps {
  darkMode: boolean;
}

export default function AllProjects({ darkMode }: AllProjectsProps) {
  const navigate = useNavigate();

  const textColor = darkMode ? 'text-white' : 'text-black';
  const borderColor = darkMode ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.6)';
  const shadowColor = darkMode ? 'rgba(255,255,255,1)' : 'rgba(0,0,0,1)';
  const glassyBg = darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,120,255,0.05)';

  // Placeholder projects
  const projects = [
    { id: 1, title: 'Project One', description: 'Description of project one.' },
    { id: 2, title: 'Project Two', description: 'Description of project two.' },
    { id: 3, title: 'Project Three', description: 'Description of project three.' },
    { id: 4, title: 'Project Four', description: 'Description of project four.' },
  ];

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
          <div
            key={project.id}
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
              className="mt-auto px-3 py-1 rounded-lg border-2 text-sm transition-colors"
              style={{
                backgroundColor: glassyBg,
                border: `2px solid ${borderColor}`,
                boxShadow: `4px 4px 0px 0px ${shadowColor}`,
              }}
              onClick={() => alert(`Open project ${project.title}`)}
            >
              View Project
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
