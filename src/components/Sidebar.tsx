import {
  Gauge,
  BookOpen,
  Network,
  BarChart,
  GitFork,
  Cog,
} from 'lucide-react';

export default function Sidebar() {
  return (
    <div className="bg-gemini-dark-gray text-gray-300 w-60 flex flex-col h-screen">
      <div className="p-4">
        <div className="text-white font-bold text-lg">WORLDQUVN LEARNING</div>
      </div>
      <nav className="flex-grow px-2">
        <ul>
          <NavItem icon={<Gauge size={20} />} label="Overview" />
          <NavItem icon={<BookOpen size={20} />} label="Learning Objectives" />
          <NavItem icon={<Network size={20} />} label="Ontology" />
          <NavItem icon={<BarChart size={20} />} label="Source Library" />
        </ul>
        <div className="mt-6">
          <h3 className="text-gray-500 text-xs font-bold uppercase px-2">
            Learning Paths
          </h3>
          <ul>
            <NavItem
              icon={<Network size={20} />}
              label="WQU Administration"
              active
            />
            <NavItem icon={<GitFork size={20} />} label="Intro to Python" />
            <NavItem icon={<GitFork size={20} />} label="Python foundations" />
          </ul>
          <button className="w-full text-left px-2 py-2 text-gray-300 flex items-center text-sm mt-2">
            <span className="mr-2">+</span> New path
          </button>
        </div>
        <div className="mt-6">
          <ul>
            <NavItem icon={<Cog size={20} />} label="Settings" />
          </ul>
        </div>
      </nav>
      <div className="p-4 border-t border-gray-700">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-white font-bold">
            A
          </div>
          <div className="ml-3 text-sm">ayhan @tap...</div>
        </div>
      </div>
    </div>
  );
}

function NavItem({ icon, label, active = false }: { icon: React.ReactNode; label: string; active?: boolean }) {
  return (
    <li>
      <a
        href="#"
        className={`flex items-center px-2 py-2 text-sm rounded-md ${
          active
            ? 'bg-gemini-light-gray-bg text-white'
            : 'text-gray-300 hover:bg-gemini-light-gray-bg hover:text-white'
        }`}
      >
        <span className="mr-3">{icon}</span>
        {label}
      </a>
    </li>
  );
}
