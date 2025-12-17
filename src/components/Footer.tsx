import { useEffect, useState } from "react";

const Footer = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 3;
      const y = (e.clientY / window.innerHeight - 0.5) * 3;
      setTilt({ x, y });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <footer
      className="relative bg-black text-white overflow-hidden"
      style={{ perspective: "1600px" }}
    >
      <div
        className="max-w-7xl mx-auto px-6 sm:px-10 py-16 sm:py-20"
        style={{
          transform: `rotateY(${tilt.x}deg) rotateX(${-tilt.y}deg)`,
          transition: "transform 0.3s ease-out",
        }}
      >
        {/* ===== TOP CONTENT ===== */}
        <div className="flex flex-col gap-16">
          
          {/* TEXT + EMAIL */}
          <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
            <div className="max-w-xl">
              <p className="footer-tagline">
                Thousands of professional artists at your reach
              </p>

              <a
                href="mailto:magicmotionstudiomm@gmail.com"
                className="footer-email"
              >
                MAGICMOTIONSTUDIOMM@GMAIL.COM
              </a>
            </div>
          </div>

          {/* DIVIDER */}
          <div className="footer-divider" />

          {/* COPYRIGHT – ALWAYS BELOW */}
          <div className="footer-bottom">
            © 2024 Studio 3D. All rights reserved. <span>|</span> Crafted with passion for animation
          </div>
        </div>
      </div>

      {/* ===== STYLES ===== */}
      <style>{`
        /* TAGLINE */
        .footer-tagline {
          font-size: clamp(0.95rem, 2vw, 1.1rem);
          color: #d1d5db;
          margin-bottom: 1.2rem;
          letter-spacing: 0.04em;
          animation: fadeUp 2.5s ease-in-out infinite alternate;
        }

        /* EMAIL – FULL RESPONSIVE */
        .footer-email {
          display: block;
          max-width: 100%;
          font-size: clamp(1.6rem, 5vw, 3.6rem);
          font-weight: 800;
          letter-spacing: 0.06em;
          line-height: 1.3;
          word-break: break-all;
          overflow-wrap: anywhere;
          color: white;
          position: relative;
          transform-style: preserve-3d;
          transition:
            transform 0.6s cubic-bezier(0.16,1,0.3,1),
            text-shadow 0.6s;
        }

        .footer-email::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -12px;
          width: 0%;
          height: 3px;
          background: linear-gradient(90deg, #38bdf8, #2563eb);
          transition: width 0.6s cubic-bezier(0.16,1,0.3,1);
        }

        .footer-email:hover {
          transform: translateZ(24px) rotateY(-10deg);
          text-shadow:
            0 0 25px rgba(56,189,248,0.8),
            0 0 70px rgba(56,189,248,1);
        }

        .footer-email:hover::after {
          width: 100%;
        }

        /* DIVIDER */
        .footer-divider {
          width: 100%;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255,255,255,0.35),
            transparent
          );
        }

        /* COPYRIGHT BOTTOM */
        .footer-bottom {
          text-align: center;
          font-size: 0.85rem;
          color: #9ca3af;
          letter-spacing: 0.05em;
          animation: fadeUp 2s ease-in-out infinite alternate;
        }

        .footer-bottom span {
          opacity: 0.4;
          margin: 0 0.5rem;
        }

        /* ANIMATION */
        @keyframes fadeUp {
          from {
            opacity: 0.85;
            transform: translateY(2px);
          }
          to {
            opacity: 1;
            transform: translateY(-2px);
          }
        }

        /* MOBILE CENTERING */
        @media (max-width: 640px) {
          .footer-email {
            text-align: center;
          }

          .footer-tagline {
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
