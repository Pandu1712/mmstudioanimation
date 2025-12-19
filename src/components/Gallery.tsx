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
  return (
    <section className="relative bg-black text-white overflow-hidden">

      {/* BACKGROUND VIDEO */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
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

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70" />

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col pt-32 pb-32">

        {/* TITLE */}
        <h2 className="text-center text-4xl sm:text-6xl font-extrabold tracking-widest mb-20">
          MM <span className="text-sky-400">GALLERY</span>
        </h2>

        {/* ROWS */}
        <div className="space-y-16">

          {/* ROW 1 */}
          <GalleryRow speed={0.45} />

          {/* ROW 3 (DENSE) */}
          <GalleryRow speed={0.25} dense />

        </div>
      </div>
    </section>
  );
};

export default Gallery;

/* =========================
   GALLERY ROW
========================= */
const GalleryRow = ({
  speed,
  dense = false,
}: {
  speed: number;
  dense?: boolean;
}) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY * speed);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [speed]);

  return (
    <div className="overflow-hidden">
      <div
        className={`flex ${dense ? "gap-10" : "gap-16"} px-6 will-change-transform`}
        style={{ transform: `translateX(-${offset}px)` }}
      >
        {[...images, ...images, ...images].map((img, i) => (
          <GalleryCard
            key={i}
            src={img.src}
            title={img.title}
            dense={dense}
          />
        ))}
      </div>
    </div>
  );
};

/* =========================
   GALLERY CARD (ADVANCED 3D)
========================= */
const GalleryCard = ({
  src,
  title,
  dense,
}: {
  src: string;
  title: string;
  dense?: boolean;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const onMove = (e: React.MouseEvent) => {
    if (!ref.current || !glareRef.current) return;

    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;

    setTilt({
      x: (y - 0.5) * 18,
      y: (x - 0.5) * 18,
    });

    glareRef.current.style.transform = `
      translate(${x * 100}%, ${y * 100}%)
    `;
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      style={{
        transform: `
          perspective(1600px)
          rotateX(${tilt.x}deg)
          rotateY(${tilt.y}deg)
        `,
      }}
      className={`
        group relative shrink-0 overflow-hidden rounded-3xl bg-black
        ${dense ? "w-[220px] h-[300px]" : "w-[300px] h-[420px]"}
        transform-gpu transition-all duration-500 ease-out
        hover:scale-105
      `}
    >
      {/* IMAGE */}
      <img
        src={src}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover
                   scale-110 transition-transform duration-700
                   group-hover:scale-125"
      />

      {/* GLARE */}
      <div
        ref={glareRef}
        className="pointer-events-none absolute inset-0
                   bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.25),transparent_60%)]
                   opacity-0 group-hover:opacity-100
                   transition-opacity duration-500"
      />

      {/* GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

      {/* TITLE */}
      <div className="absolute bottom-0 w-full px-6 py-4
                      translate-y-full group-hover:translate-y-0
                      transition-transform duration-500">
        <p className="text-xs tracking-[0.35em] uppercase text-white
                      drop-shadow-[0_0_16px_rgba(56,189,248,1)]">
          {title}
        </p>
      </div>

      {/* EDGE GLOW */}
      <div className="absolute inset-0 rounded-3xl opacity-0
                      group-hover:opacity-100 transition-opacity duration-500
                      shadow-[0_0_90px_rgba(56,189,248,0.5)]" />
    </div>
  );
};
