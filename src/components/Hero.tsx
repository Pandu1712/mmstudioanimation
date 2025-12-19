import { useState, useEffect } from "react";
import { ChevronDown, Play } from "lucide-react";

const Hero = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMouse({ x, y });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24"
      style={{ perspective: "1800px" }}
    >
      {/* ===== BACKGROUND VIDEO (YOU WILL ADD FILE) ===== */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        {/* replace src later */}
         <source src="https://res.cloudinary.com/dd4oiwnep/video/upload/bgvideo_1_bmxos2.mp4" type="video/mp4" /> 
      </video>

      {/* DARK OVERLAY (OPTIONAL – REMOVE IF NOT NEEDED) */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 text-center max-w-5xl px-6">
        <div
          className="transform-style-3d"
          style={{
            transform: `
              rotateY(${mouse.x * 0.3}deg)
              rotateX(${-mouse.y * 0.3}deg)
            `,
            transition: "transform 0.15s ease-out",
          }}
        >
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold leading-tight mb-8 space-y-4">
            {/* CREATE */}
            <span className="block perspective-text">
              <span className="hero-word text-white">"The Art of Crafting</span>
            </span>
            <span className="block perspective-text">
              <span className="hero-word amazing-text">
               Imagination
              </span>
            </span>

            {/* 3D WORLDS */}
            <span className="block perspective-text">
              <span className="hero-word text-white">
               into Living World"
            {/* AMAZING */}
              </span>
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-12">
           "We Dream it," We Animate It.
          </p>

          {/* <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="relative px-10 py-4 font-bold bg-sky-400 text-black rounded-xl overflow-hidden group hover:scale-110 transition-all duration-300 shadow-xl">
              <span className="relative z-10 flex items-center gap-2">
                <Play size={20} />
                GET STARTED
              </span>
              <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
            </button>

            <button className="relative px-10 py-4 font-bold border-2 border-sky-400 text-sky-400 rounded-xl overflow-hidden group hover:text-black hover:scale-110 transition-all duration-300">
              <span className="relative z-10">VIEW PORTFOLIO</span>
              <span className="absolute inset-0 bg-sky-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
            </button>
          </div> */}
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounceSlow z-10">
        <ChevronDown size={34} className="text-sky-400" />
      </div>

      {/* ===== STYLES ===== */}
      <style>{`
        .transform-style-3d {
          transform-style: preserve-3d;
        }

        .perspective-text {
          perspective: 1200px;
        }

        .hero-word {
          display: inline-block;
          transition:
            transform 0.6s cubic-bezier(0.16,1,0.3,1),
            letter-spacing 0.4s,
            text-shadow 0.4s;
        }

        /* 🔥 SAME HOVER FOR ALL THREE LINES */
        .perspective-text:hover .hero-word {
          transform:
            rotateY(-30deg)
            rotateX(8deg)
            scale(1.15);
          letter-spacing: 0.18em;
          text-shadow:
            0 0 25px rgba(125,211,252,0.8),
            0 0 60px rgba(56,189,248,1);
        }

        /* AMAZING SPECIAL GLOW */
        .amazing-text {
          background: linear-gradient(90deg, #38bdf8, #2563eb, #38bdf8);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          animation: glow 2.5s ease-in-out infinite;
        }

        @keyframes glow {
          0%,100% {
            filter: drop-shadow(0 0 20px rgba(56,189,248,0.6));
          }
          50% {
            filter: drop-shadow(0 0 60px rgba(56,189,248,1));
          }
        }

        @keyframes bounceSlow {
          0%,100% { transform: translate(-50%,0); }
          50% { transform: translate(-50%,-10px); }
        }

        .animate-bounceSlow {
          animation: bounceSlow 2.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
