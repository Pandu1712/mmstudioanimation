import { useEffect, useState } from "react";
import logo from "../public/MMstudiologo.jpg";

interface HeaderProps {
  onMenuClick: () => void;
}

const Header = ({ onMenuClick }: HeaderProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      // SCROLL DOWN → COLLAPSE
      if (currentY > lastScrollY && currentY > 80) {
        setCollapsed(true);
      }

      // SCROLL UP → EXPAND
      if (currentY < lastScrollY) {
        setCollapsed(false);
      }

      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-30
        transition-all duration-700 ease-in-out
        ${collapsed ? "h-12 bg-transparent" : "h-20 bg-sky-900/30 backdrop-blur-md"}
      `}
    >
      <div className="container mx-auto px-4 sm:px-6 h-full flex items-center justify-between">
        
        {/* LOGO */}
        <div className="flex items-center gap-3 cursor-pointer">
          <div
            className={`
              w-12 h-12 flex items-center justify-center
              transition-transform duration-700
              ${collapsed ? "scale-110" : "scale-100"}
            `}
          >
            <img
              src={logo}
              alt="Logo"
              className="w-10 h-10 object-contain"
            />
          </div>

          {/* TEXT – ONLY ON SCROLL UP */}
          {!collapsed && (
            <div className="transition-opacity duration-500">
              <h1 className="text-xl sm:text-2xl font-bold text-white tracking-wider">
                MM Studio
              </h1>
              <p className="text-xs text-sky-300 tracking-widest">
              Magic Motion Studio
              </p>
            </div>
          )}
        </div>

        {/* MENU BUTTON – ONLY ON SCROLL UP */}
        {!collapsed && (
          <button
            onClick={onMenuClick}
            aria-label="Open menu"
            className="group w-12 h-12 flex flex-col items-center justify-center gap-1.5"
          >
            <span className="w-8 h-0.5 bg-white group-hover:bg-sky-400 transition" />
            <span className="w-8 h-0.5 bg-white group-hover:bg-sky-400 transition" />
            <span className="w-8 h-0.5 bg-white group-hover:bg-sky-400 transition" />
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
