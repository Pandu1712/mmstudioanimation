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

          {/* TEXT + HOURS */}
          <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
            {/* LEFT */}
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

            {/* RIGHT – BUSINESS HOURS */}
            <div className="business-hours">
              <h4>Business Hours</h4>
              <ul>
                <li><span>Mon – Fri</span><span>9:00 AM – 7:30 PM</span></li>
                <li><span>Saturday</span><span className="closed">Week-Off</span></li>
                <li><span>Sunday</span><span className="closed">Week-Off</span></li>
              </ul>
            </div>
          </div>

          {/* DIVIDER */}
          <div className="footer-divider" />

          {/* COPYRIGHT */}
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

        /* EMAIL */
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

        /* BUSINESS HOURS */
        .business-hours {
          min-width: 260px;
          animation: fadeUp 2.5s ease-in-out infinite alternate;
        }

        .business-hours h4 {
          font-size: 1rem;
          letter-spacing: 0.15em;
          margin-bottom: 1rem;
          text-transform: uppercase;
          color: #e5e7eb;
        }

        .business-hours ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .business-hours li {
          display: flex;
          justify-content: space-between;
          gap: 1rem;
          font-size: 0.9rem;
          color: #9ca3af;
          padding: 0.4rem 0;
          border-bottom: 1px dashed rgba(255,255,255,0.1);
        }

        .business-hours li span:first-child {
          letter-spacing: 0.05em;
        }

        .business-hours .closed {
          color: #f87171;
          font-weight: 600;
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

        /* COPYRIGHT */
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

        /* MOBILE */
        @media (max-width: 640px) {
          .footer-email,
          .footer-tagline,
          .business-hours {
            text-align: center;
          }

          .business-hours li {
            justify-content: center;
            gap: 0.5rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
