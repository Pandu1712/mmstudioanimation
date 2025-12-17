import { useEffect, useRef, useState } from "react";

/* =========================
   IMAGES
========================= */
const images = [
  "https://images.unsplash.com/photo-1549880338-65ddcdfd017b",
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
  "https://images.unsplash.com/photo-1535223289827-42f1e9919769",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac",
  "https://images.unsplash.com/photo-1518770660439-4636190af475",
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
      setAutoX((prev) => (prev + 0.4) % 2500);
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
      {/* ================= BACKGROUND VIDEO (CORRECT) ================= */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source
          src="https://res.cloudinary.com/dd4oiwnep/video/upload/bgvideo_1_bmxos2.mp4"
          type="video/mp4"
        />
      </video>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70 z-0" />

      {/* CONTENT */}
      <div className="relative z-10">
        <h2 className="text-center text-4xl sm:text-6xl font-extrabold mb-20 tracking-widest">
          3D GALLERY
        </h2>

        <div className="overflow-hidden space-y-16">
          {/* ROW 1 */}
          <div
            className="gallery-row"
            style={{
              transform: isMobile
                ? `translateX(-${autoX}px)`
                : `translateX(-${scrollY * 0.35}px)`,
            }}
          >
            {[...images, ...images, ...images].map((src, i) => (
              <GalleryCard key={`r1-${i}`} src={src} scrollY={scrollY} />
            ))}
          </div>

          {/* ROW 2 */}
          <div
            className="gallery-row"
            style={{
              transform: isMobile
                ? `translateX(${autoX}px)`
                : `translateX(${scrollY * 0.35}px)`,
            }}
          >
            {[...images, ...images, ...images].map((src, i) => (
              <GalleryCard key={`r2-${i}`} src={src} scrollY={scrollY} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .gallery-row {
          display: flex;
          gap: 3rem;
          padding: 0 3rem;
          width: max-content;
          will-change: transform;
          transition: transform 0.12s linear;
        }
      `}</style>
    </section>
  );
};

export default Gallery;

/* =========================
   CARD
========================= */
const GalleryCard = ({
  src,
  scrollY,
}: {
  src: string;
  scrollY: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current!.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;

    setTilt({
      x: y * 16,
      y: x * 16,
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
      <img src={src} alt="gallery" />
      <div className="highlight" />

      <style>{`
        .gallery-card {
          width: 300px;
          height: 420px;
          border-radius: 22px;
          overflow: hidden;
          transform-style: preserve-3d;
          transition: transform 0.45s cubic-bezier(0.16,1,0.3,1);
        }

        .gallery-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: translateZ(50px) scale(1.08);
        }

        @media (max-width: 768px) {
          .gallery-card {
            width: 220px;
            height: 320px;
          }
        }
      `}</style>
    </div>
  );
};
