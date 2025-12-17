import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { Eye, Layers, Cpu, Globe2 } from "lucide-react";
import { useRef } from "react";

const cards = [
  {
    icon: Eye,
    title:
      '1. “What You See Is What You Get” (WYSIWYG) Collaboration & Iteration',
    preview:
      'Traditional Problem:  In conventional pipelines, artists and directors often wait hours or even days for renders to see final output. Iteration is slow and costly',
    content: (
      <>
        <p>
          Magic Motion's Solution: With real-time engines, clients and teams can
          visualize complex scenes, character performances, and environmental
          effects instantly.
        </p>
        <p>
          Directors can approve shots, make camera changes, adjust lighting, and
          see the final pixel output in real-time during review sessions.
        </p>
        <p>
          This drastically speeds up feedback loops and reduces re-work.
        </p>
        <p>
          Uniqueness:  This isn't just real-time pre-visualization; it's real-time final-pixel 
rendering. This means the assets and scenes being used for a game can be 
immediately integrated into a high-quality cinematic or even a live-action VFX 
composite, maintaining photorealism and consistency without multiple 
conversion stages.
        </p>
      </>
    ),
  },
  {
    icon: Layers,
    title: "2. Asset Agnosticism & Universal Utility",
    preview:
      "Traditional Problem:  Assets built for a game often aren't detailed enough for film VFX, and film assets are too heavy for games. Artists are forced to create multiple versions of the same asset. .",
    content: (
      <>
        <p>
          Our artists are trained to build "universal assets" 
that are optimized for high-fidelity across all mediums. Leveraging 
technologies like Nanite (Unreal Engine 5), we can manage incredibly detailed 
geometry for cinematic quality while dynamically scaling it for real-time game 
performance.
        </p>
       
        <p>
          Uniqueness: A single digital character, environment, or prop can be animated 
for an episodic series, dropped into a live-action plate for a blockbuster film, 
or integrated as a playable asset in a video game—all originating from the 
same master file and pipeline. This maximizes asset ROI for clients and 
minimizes production overhead. 
        </p>
      </>
    ),
  },
  {
    icon: Cpu,
    title: "3. Cross-Disciplinary Talent & AI Integration",
    preview:
      "Traditional Problem:  Specialization leads to narrow skill sets and communication gaps between departments (e.g., a game animator might not understand film VFX requirements).",
    content: (
      <>
        <p>
         Magic Motion's Solution: We foster a culture of "generalist specialists" 
proficient in real-time workflows that blur traditional lines. Our artists are 
trained across disciplines, enabling more holistic problem-solving. We further 
augment human talent with AI and Machine Learning tools for procedural 
generation, motion capture processing, and automated rotoscoping.
        </p>
        <p>
          Uniqueness: This creates a nimble, adaptable workforce capable of fluidly 
transitioning between project types, boosting efficiency and fostering a truly 
integrated creative environment. The AI tools handle repetitive tasks, freeing 
human creativity for complex, high-value artistic decisions.
        </p>
      </>
    ),
  },
  {
    icon: Globe2,
    title: "4. Metaverse & Interactive Experience Readiness",
    preview:
      "Traditional Problem: The burgeoning metaverse and interactive content space requires assets and environments optimized for real-time interaction, something traditional linear content pipelines struggle with. ",
    content: (
      <>
        <p>
          Magic Motion's Solution: Since our core pipeline is real-time, every asset and 
environment we create is inherently "metaverse-ready." We build worlds that 
can be explored, characters that can be interacted with, and experiences that 
are dynamic from the outset. 
        </p>
        <p>
          Uniqueness: We are not adapting old techniques for new platforms; we are 
building new content natively for these platforms, positioning us as leaders in 
the next generation of digital experience creation. 
In essence, Magic Motion Studio's innovative solution transforms disparate production 
processes into a unified, agile, and cost-effective ecosystem, setting a new standard for 
visual content creation in the digital age. 
        </p>
      </>
    ),
  },
];

const Services = () => {
  const [open, setOpen] = useState<number | null>(null);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="service"
      ref={sectionRef}
      className="relative py-24 sm:py-32 overflow-hidden text-white"
    >
      {/* ================= BACKGROUND VIDEO ================= */}
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

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-6xl font-bold mb-4">
            Innovative <span className="text-sky-400">Solution</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
           Our solution is not just about combining services; it's about fundamentally rethinking the 
production paradigm for visual content. The innovation lies in our "Real-Time Converged 
Production Ecosystem." 
          </p>
        </motion.div>

        {/* ================= PITCH-DECK SLIDES ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 perspective-[2000px]">
          {cards.map((card, index) => {
            const Icon = card.icon;
            const isOpen = open === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.15, type: "spring", stiffness: 80 }}
                whileHover={{
                  rotateX: -6,
                  rotateY: 6,
                  scale: 1.04,
                }}
                className="transform-gpu"
              >
                <div className="relative h-full rounded-2xl p-8 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-sky-400 transition-all duration-500">
                  {/* Icon */}
                  <div className="w-14 h-14 mb-6 rounded-xl bg-sky-400/20 flex items-center justify-center">
                    <Icon className="text-sky-400" size={28} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-sky-400 mb-4">
                    {card.title}
                  </h3>

                  {/* Preview */}
                  <p className="text-gray-300 mb-4">{card.preview}</p>

                  {/* Expand */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: isOpen ? "auto" : 0,
                      opacity: isOpen ? 1 : 0,
                    }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden space-y-3 text-gray-300"
                  >
                    {card.content}
                  </motion.div>

                  {/* Button */}
                  <button
                    onClick={() =>
                      setOpen(isOpen ? null : index)
                    }
                    className="mt-6 text-sky-400 font-semibold hover:underline"
                  >
                    {isOpen ? "Read Less" : "Read More"}
                  </button>

                  {/* Glow */}
                  <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-sky-400 opacity-0 group-hover:opacity-20 blur-3xl transition-all duration-700" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
