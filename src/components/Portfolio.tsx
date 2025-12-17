import { useState, useRef } from 'react';
import { Eye, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

const Portfolio = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const projects = [
    {
      title: 'The Problem',
      category: 'Market Challenge',
      color: 'from-red-500 to-orange-600',
      description: `The global appetite for high-fidelity visual content is exploding across streaming platforms, 
cinema, mobile gaming, and the emerging metaverse. However, the traditional production 
landscape is dangerously fragmented. 

Content creators currently face siloed workflows; they must hire separate vendors for 
character animation, live-action VFX integration, and interactive game assets. This 
fragmentation leads to inflated budgets, inconsistent artistic direction, communication 
bottlenecks, and significantly slower times-to-market in an industry where speed is critical.`,
    },
    {
      title: 'The Solution & Uniqueness',
      category: 'Converged Production Pipeline',
      color: 'from-sky-500 to-blue-600',
      description: `Magic Motion Studio solves this fragmentation by offering a "Converged Production 
Pipeline." 

Our unique value proposition is the dissolution of barriers between disciplines. Unlike 
traditional studios that specialize in only one vertical, our workflows are integrated from the 
ground up, leveraging advanced real-time rendering technology (such as Unreal Engine 5) as 
a unifying backbone.

● The "Create Once, Deploy Everywhere" Advantage: An environmental asset modeled 
for a AAA game title can be seamlessly utilized in a high-end VFX shot for a 
live-action commercial, or adapted for an animated series cinematic. This ensures 
absolute visual consistency across media while dramatically reducing redundant 
asset creation costs for our clients. 

● Tech-Forward Efficiency: By integrating AI-assisted toolsets for repetitive tasks (like 
rotoscoping or crowd simulation) alongside real-time rendering, we deliver 
studio-quality results at a fraction of traditional rendering times.`,
    },
    {
      title: 'Scalability',
      category: 'Growth & IP Strategy',
      color: 'from-purple-500 to-pink-600',
      description: `Our business model is built for rapid, sustainable scaling through a hybrid approach of 
high-tech services and intellectual property generation:

● Infrastructure Scalability: We utilize cloud-based rendering and virtual workstations, 
allowing us to instantly scale computational power and onboard specialized global 
talent for project spikes without heavy capital expenditures on physical real estate. 

● Asset Reusability & Licensing: Because our converged pipeline creates versatile 
assets, we are building a massive library of proprietary 3D models, rigs, and 
environments that can be licensed for future projects, creating high-margin passive 
revenue streams. 

● IP Development: Moving beyond pure service work, we use our downtime capacity to 
develop original internal IP—incubating our own games and animated 
shorts—transitioning the studio from solely fee-for-service revenue to exponential 
valuation based on owned content.`,
    },
  ];

  const handleToggle = (index: number) => {
    const isExpanding = expandedIndex !== index;
    setExpandedIndex(isExpanding ? index : null);

    if (isExpanding) {
      setTimeout(() => {
        cardRefs.current[index]?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }, 160);
    }
  };

  return (
    <section id="portfolio" className="relative py-20 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-black" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-6xl font-bold mb-4">
            Business <span className="text-sky-400">Overview</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            At Magic Motion Studio, we operate at the convergence of Animation, Visual Effects (VFX), 
            and Gaming, redefining how visual stories are told across platforms.
          </p>
        </div>

        {/* BUSINESS OVERVIEW CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 perspective-container">
          {projects.map((project, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className="group relative rounded-2xl overflow-hidden cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  transform:
                    hoveredIndex === index || isExpanded
                      ? 'translateZ(45px) rotateY(5deg)'
                      : 'translateZ(0) rotateY(0deg)',
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.6s ease',
                }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-85 group-hover:opacity-100 transition-opacity duration-500`}
                />
                <div className="absolute inset-0 bg-black/55 group-hover:bg-black/35 transition-all duration-500" />

                <div className="relative z-10 h-full p-8 flex flex-col justify-between">
                  <div>
                    <p className="text-sky-400 text-sm mb-2 tracking-wide">
                      {project.category}
                    </p>
                    <h3 className="text-3xl font-bold mb-6">
                      {project.title}
                    </h3>

                    <p
                      className={`text-gray-300 text-[15.5px] leading-relaxed whitespace-pre-line transition-all duration-500
                      ${isExpanded ? 'max-h-[3000px]' : 'line-clamp-6'}`}
                    >
                      {project.description}
                    </p>

                    {/* READ MORE / LESS */}
                    <button
                      onClick={() => handleToggle(index)}
                      className="mt-6 inline-flex items-center gap-2 text-sky-400 font-semibold tracking-wide hover:text-white transition-colors"
                    >
                      {isExpanded ? (
                        <>
                          Read Less <ChevronUp size={18} />
                        </>
                      ) : (
                        <>
                          Read More <ChevronDown size={18} />
                        </>
                      )}
                    </button>
                  </div>

                  <div className="mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="text-sm tracking-wide">EXPLORE</span>
                    <ArrowRight
                      size={20}
                      className="transform group-hover:translate-x-2 transition-transform duration-300"
                    />
                  </div>
                </div>

                <div className="absolute inset-0 border-2 border-sky-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -inset-1 bg-gradient-to-r from-sky-400 to-blue-600 opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-700" />
              </div>
            );
          })}
        </div>
      </div>

      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-400 rounded-full opacity-5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600 rounded-full opacity-5 blur-3xl" />
    </section>
  );
};

export default Portfolio;
