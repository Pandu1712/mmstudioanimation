import { useEffect, useRef, useState } from "react";

/* =========================
   IMAGE DATA
========================= */
const images = [
  { src: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b", title: "Cinematic Depth" },
  { src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97", title: "Creative Coding" },
  { src: "https://images.unsplash.com/photo-1535223289827-42f1e9919769", title: "3D Motion Lab" },
  { src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee", title: "Visual Storytelling" },
  { src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac", title: "Immersive Design" },
  { src: "https://images.unsplash.com/photo-1518770660439-4636190af475", title: "Digital Reality" },
];

/* =========================
   GALLERY
========================= */
const Gallery = () => {
  const [scrollY, setScrollY] = useState(0);
  const [autoX, setAutoX] = useState(0);
  const isMobile =
    typeof window !== "undefined" && window.innerWidth < 1024;

  /* DESKTOP SCROLL */
  useEffect(() => {
    if (isMobile) return;
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isMobile]);

  /* MOBILE AUTO SCROLL */
  useEffect(() => {
    if (!isMobile) return;
    let raf: number;

    const animate = () => {
      setAutoX((p) => (p + 0.35) % 2500);
      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [isMobile]);

  return (
    <section
      id="gallery"
      className="relative bg-black text-white overflow-hidden py-24"
      style={{ perspective: "2000px" }}
    >
      {/* BACKGROUND VIDEO */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="https://res.cloudinary.com/dd4oiwnep/video/upload/bgvideo_1_bmxos2.mp4"
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 bg-black/70 z-0" />

      {/* CONTENT */}
      <div className="relative z-10">
        <h2 className="text-center text-4xl sm:text-6xl font-extrabold mb-20 tracking-widest">
          MM GALLERY
        </h2>

        {/* VIEWPORT (FIXES WHITE SPACE ISSUE) */}
        <div className="gallery-viewport">
          {/* ROW 1 */}
          <div className="gallery-row-wrapper">
            <div
              className="gallery-row"
              style={{
                transform: isMobile
                  ? `translateX(-${autoX}px)`
                  : `translateX(-${scrollY * 0.35}px)`,
              }}
            >
              {[...images, ...images, ...images].map((img, i) => (
                <GalleryCard
                  key={`r1-${i}`}
                  src={img.src}
                  title={img.title}
                  scrollY={scrollY}
                />
              ))}
            </div>
          </div>

          {/* ROW 2 */}
          <div className="gallery-row-wrapper">
            <div
              className="gallery-row"
              style={{
                transform: isMobile
                  ? `translateX(${autoX}px)`
                  : `translateX(${scrollY * 0.35}px)`,
              }}
            >
              {[...images, ...images, ...images].map((img, i) => (
                <GalleryCard
                  key={`r2-${i}`}
                  src={img.src}
                  title={img.title}
                  scrollY={scrollY}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* GLOBAL STYLES */}
      <style>{`
        .gallery-viewport {
          display: flex;
          flex-direction: column;
          gap: 5rem;
          overflow: hidden;
        }

        /* LOCK HEIGHT – PREVENTS DEAD SPACE */
        .gallery-row-wrapper {
          height: 460px;
          overflow: hidden;
          position: relative;
        }

        .gallery-row {
          display: flex;
          gap: 3rem;
          margin-left: -3rem;
          width: max-content;
          will-change: transform;
          transition: transform 0.12s linear;
        }

        @media (max-width: 768px) {
          .gallery-row-wrapper {
            height: 340px;
          }
        }
      `}</style>
    </section>
  );
};

export default Gallery;

/* =========================
   GALLERY CARD
========================= */
const GalleryCard = ({
  src,
  title,
  scrollY,
}: {
  src: string;
  title: string;
  scrollY: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const onMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;

    setTilt({
      x: y * 18,
      y: x * 18,
    });
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      className="gallery-card"
      style={{
        transform: `
          rotateX(${tilt.x}deg)
          rotateY(${tilt.y}deg)
          translateY(${Math.sin(scrollY * 0.002) * 8}px)
        `,
      }}
    >
      <img src={src} alt={title} />

      {/* TITLE */}
      <div className="title-panel">
        <span>{title}</span>
      </div>

      {/* EDGE GLOW */}
      <div className="edge-glow" />

      <style>{`
        .gallery-card {
          position: relative;
          width: 300px;
          height: 420px;
          border-radius: 22px;
          overflow: hidden;
          background: #000;
          transform-style: preserve-3d;
          transition: transform 0.45s cubic-bezier(0.16,1,0.3,1);
        }

        .gallery-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: translateZ(70px) scale(1.1);
        }

        .title-panel {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          padding: 1.3rem 1.6rem;
          background: linear-gradient(
            to top,
            rgba(0,0,0,0.95),
            rgba(0,0,0,0.6),
            transparent
          );
          transform: translateZ(90px) translateY(100%);
          transition: transform 0.5s cubic-bezier(0.16,1,0.3,1);
          pointer-events: none;
        }

        .title-panel span {
          font-size: 0.9rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: white;
          text-shadow:
            0 0 12px rgba(56,189,248,0.7),
            0 0 32px rgba(56,189,248,0.35);
        }

        .edge-glow {
          position: absolute;
          inset: 0;
          border-radius: 22px;
          box-shadow:
            inset 0 0 0 1px rgba(255,255,255,0.07),
            0 0 40px rgba(56,189,248,0.18);
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }

        .gallery-card:hover .title-panel {
          transform: translateZ(90px) translateY(0);
        }

        .gallery-card:hover .edge-glow {
          opacity: 1;
        }

        @media (max-width: 768px) {
          .gallery-card {
            width: 220px;
            height: 320px;
          }

          .title-panel {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};
