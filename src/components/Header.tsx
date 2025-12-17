import { Menu, Film } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header = ({ onMenuClick }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-30 bg-black bg-opacity-70 backdrop-blur-md border-b border-white border-opacity-10">
      <div className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-12 h-12 bg-sky-400 rounded-lg flex items-center justify-center transform transition-all duration-500 group-hover:rotate-180 group-hover:scale-110">
            <Film size={28} className="text-black" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-white tracking-wider">
              STUDIO 3D
            </h1>
            <p className="text-xs text-sky-400 tracking-widest">ANIMATION</p>
          </div>
        </div>

        <button
          onClick={onMenuClick}
          className="group relative w-12 h-12 flex flex-col items-center justify-center gap-1.5 hover:gap-2 transition-all duration-300"
          aria-label="Open menu"
        >
          <div className="w-8 h-0.5 bg-white group-hover:bg-sky-400 transform transition-all duration-300 group-hover:translate-x-1"></div>
          <div className="w-8 h-0.5 bg-white group-hover:bg-sky-400 transform transition-all duration-300"></div>
          <div className="w-8 h-0.5 bg-white group-hover:bg-sky-400 transform transition-all duration-300 group-hover:-translate-x-1"></div>

          <div className="absolute inset-0 border-2 border-transparent group-hover:border-sky-400 rounded-lg transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
        </button>
      </div>
    </header>
  );
};

export default Header;
