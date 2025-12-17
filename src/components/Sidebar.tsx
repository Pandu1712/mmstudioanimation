import {
  X,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "What Is IP", href: "#service" },
    { name: "MM-Vision", href: "#portfolio" },
    { name: "About", href: "#about" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <>
      {/* OVERLAY */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/70 backdrop-blur-md transition-opacity duration-700 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* SIDEBAR */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-80 sm:w-96 transform transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          background:
            "linear-gradient(120deg, #020617, #020617, #0f172a, #020617)",
          backgroundSize: "400% 400%",
          animation: "bgMove 18s ease infinite",
          boxShadow: "-25px 0 120px rgba(56,189,248,0.45)",
        }}
      >
        <div className="relative flex h-full flex-col p-8">
          {/* CLOSE */}
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="absolute right-6 top-6 text-white transition-all duration-300 hover:rotate-90 hover:scale-125 hover:text-sky-400"
          >
            <X size={34} />
          </button>

          {/* NAV */}
          <div className="mt-20 flex-1">
            <nav className="space-y-10">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={onClose}
                  className="nav-3d-link block text-4xl sm:text-5xl font-extrabold tracking-wide text-white"
                  style={{
                    animation: isOpen
                      ? `navEnter 0.8s cubic-bezier(0.16,1,0.3,1) ${
                          index * 0.15
                        }s forwards`
                      : "none",
                    opacity: 0,
                  }}
                >
                  <span className="relative z-10">{link.name}</span>
                  <span className="nav-glow" />
                </a>
              ))}
            </nav>
          </div>

          {/* FOOTER */}
          <div className="border-t border-white/10 pt-8">
            <a
              href="mailto:studio@animation3d.com"
              className="mb-6 flex items-center gap-3 text-white transition-all duration-300 hover:text-sky-400"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-400/20">
                <Mail size={20} />
              </div>
              <span className="text-sm">studio@animation3d.com</span>
            </a>

            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:scale-125 hover:bg-sky-400/30"
                  style={{
                    animation: isOpen
                      ? `fadeIn 0.6s ease ${0.6 + index * 0.12}s forwards`
                      : "none",
                    opacity: 0,
                  }}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* STYLES */}
      <style>{`
        /* BACKGROUND */
        @keyframes bgMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* NAV ENTER */
        @keyframes navEnter {
          0% {
            opacity: 0;
            transform: translateX(120px) rotateY(-35deg) scale(0.75);
            filter: blur(6px);
          }
          100% {
            opacity: 1;
            transform: translateX(0) rotateY(0) scale(1);
            filter: blur(0);
          }
        }

        /* SOCIAL */
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.6) rotate(-180deg);
          }
          to {
            opacity: 1;
            transform: scale(1) rotate(0);
          }
        }

        /* NAV CORE */
        .nav-3d-link {
          position: relative;
          isolation: isolate;
          will-change: transform;
          transition:
            transform 0.55s cubic-bezier(0.16,1,0.3,1),
            letter-spacing 0.35s,
            color 0.35s,
            text-shadow 0.35s;
        }

        .nav-3d-link::before {
          content: '';
          position: absolute;
          inset: -20px -40px;
          background: radial-gradient(
            circle,
            rgba(56,189,248,0.3),
            transparent 70%
          );
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        /* HOVER – ISOLATED */
        .nav-3d-link:hover {
          transform:
            translateX(24px)
            rotateY(-18deg)
            rotateX(4deg)
            scale(1.15);
          letter-spacing: 0.14em;
          color: #7dd3fc;
          text-shadow:
            0 0 20px rgba(125,211,252,0.8),
            0 0 50px rgba(56,189,248,0.9);
          z-index: 10;
        }

        .nav-3d-link:hover::before {
          opacity: 1;
        }

        /* GLOW LINE */
        .nav-glow {
          position: absolute;
          left: 0;
          bottom: -14px;
          width: 0%;
          height: 5px;
          background: linear-gradient(90deg, #38bdf8, #0ea5e9);
          border-radius: 999px;
          filter: blur(3px);
          transition: width 0.45s cubic-bezier(0.16,1,0.3,1);
        }

        .nav-3d-link:hover .nav-glow {
          width: 80%;
        }
      `}</style>
    </>
  );
};

export default Sidebar;
