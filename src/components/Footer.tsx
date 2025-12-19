import { useEffect, useState } from "react";
import { Instagram, Youtube, Linkedin, Twitter } from "lucide-react";

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
    <footer id="footer"
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
        <div className="flex flex-col gap-16">

          {/* ================= TOP ================= */}
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
              <a
  href="tel:+919121045950"
  className="footer-email"
>
  +91 91210 45950
</a>


              {/* SOCIAL ICONS */}
              <div className="footer-socials">
                <a href="#" aria-label="Instagram"><Instagram /></a>
                <a href="#" aria-label="YouTube"><Youtube /></a>
                <a href="https://www.linkedin.com/company/mm-studio7/?viewAsMember=true" aria-label="LinkedIn"><Linkedin /></a>
                <a href="#" aria-label="Twitter"><Twitter /></a>
              </div>
            </div>

            {/* RIGHT */}
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

          {/* BOTTOM */}
          <div className="footer-bottom">
            © 2025 Magic Motion Studio. All rights reserved
            <span>|</span>
            Crafted with passion for animation
          </div>
        </div>
      </div>

      {/* ================= STYLES ================= */}
      <style>{`
        .footer-tagline {
          font-size: clamp(0.95rem, 2vw, 1.1rem);
          color: #d1d5db;
          margin-bottom: 1.2rem;
          letter-spacing: 0.04em;
          animation: fadeUp 2.5s ease-in-out infinite alternate;
        }

        .footer-email {
          display: inline-block;
          font-size:20px;
          font-weight: 900;
          letter-spacing: 0.08em;
          line-height: 1.25;
          word-break: break-all;

          background: linear-gradient(90deg, #ffffff, #38bdf8, #2563eb);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;

          transform-style: preserve-3d;
          transition: transform 0.6s cubic-bezier(0.16,1,0.3,1), text-shadow 0.6s;
        }

        .footer-email:hover {
          transform: translateZ(32px) rotateY(-12deg);
          text-shadow:
            0 0 30px rgba(56,189,248,0.9),
            0 0 90px rgba(37,99,235,1);
        }

        .footer-socials {
          margin-top: 2.2rem;
          display: flex;
          gap: 1.4rem;
        }

        .footer-socials a {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;

          background: rgba(255,255,255,0.05);
          color: #9ca3af;

          transition: transform 0.4s ease, background 0.4s ease,
                      color 0.4s ease, box-shadow 0.4s ease;
        }

        .footer-socials a:hover {
          transform: translateY(-4px) scale(1.08);
          color: white;
          background: linear-gradient(135deg, #38bdf8, #2563eb);
          box-shadow: 0 10px 30px rgba(56,189,248,0.45);
        }

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
          font-size: 0.9rem;
          color: #9ca3af;
          padding: 0.4rem 0;
          border-bottom: 1px dashed rgba(255,255,255,0.1);
        }

        .closed {
          color: #f87171;
          font-weight: 600;
        }

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

        @keyframes fadeUp {
          from { opacity: 0.85; transform: translateY(2px); }
          to { opacity: 1; transform: translateY(-2px); }
        }

        @media (max-width: 640px) {
          .footer-tagline,
          .footer-email,
          .business-hours {
            text-align: center;
          }

          .footer-socials {
            justify-content: center;
          }

          .business-hours li {
            justify-content: center;
            gap: 0.6rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
