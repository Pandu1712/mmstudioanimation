import { useRef, useState } from 'react';
import {
  Box,
  Video,
  Zap,
  Palette,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const services = [
    {
      icon: Box,
      title: 'Our Mission',
      description: `To empower storytellers and content creators with unparalleled 
efficiency, creative freedom, and visual fidelity across all digital mediums, from 
cinematic blockbusters to immersive metaverse experiences`,
    },
    {
      icon: Video,
      title: 'The Innovation',
      description: `We are disrupting traditional, siloed production pipelines by 
leveraging cutting-edge real-time rendering technologies (like Unreal Engine 5) and 
AI-driven workflows. Unlike conventional studios that specialize in a single domain, 
Magic Motion Studio's unique approach allows us to: 
1. Create Universal Assets: Develop highly detailed digital assets (characters, 
environments, props) that are inherently optimized for seamless deployment 
across film, animation, and interactive game engines. This eliminates 
redundant work and ensures visual consistency across all client touchpoints. 
2. Enable Real-Time Iteration: Provide clients with instantaneous visual 
feedback and collaborative decision-making, drastically accelerating 
production cycles and reducing costs associated with slow, traditional 
rendering processes. 
3. Future-Proof Content: Build content natively for the burgeoning interactive 
and immersive digital landscape, including virtual reality, augmented reality, 
and the metaverse, ensuring our clients are always at the leading edge.`,
    },
    {
      icon: Zap,
      title: 'Intellectual Property (IP) Strategy',
      description: `At the heart of Magic Motion Studio's long-term value and scalability is a robust IP 
strategy designed to generate multiple revenue streams beyond core service work: 
● Proprietary Asset Library: We are actively building and curating an 
extensive library of high-fidelity, production-ready 3D assets, character rigs, 
and environmental templates developed through our converged pipeline. 
This library represents a significant competitive advantage and a valuable 
licensable resource for future projects and external clients. 
● Workflow Methodologies & Tools: Our unique "Real-Time Converged 
Production Ecosystem" isn't just a concept; it's a meticulously developed set 
of proprietary workflows, scripts, and internal tools. These methodologies 
streamline complex tasks, enhance efficiency, and differentiate our 
service offering, representing valuable intangible IP. 
● Original Content Development: Magic Motion Studio is committed to 
incubating and developing its own original intellectual property.`,
    },
    {
      icon: Palette,
      title: 'Our Vision',
      description: `To become the premier partner for next-generation visual content, 
recognized globally for our innovative pipeline, unparalleled efficiency, and the 
creation of compelling, future-ready digital experiences and valuable intellectual 
property. Magic Motion Studio is not just a service provider; we are architects of the 
future of visual storytelling`,
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
      }, 180);
    }
  };

  return (
    <section id="service" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-6xl font-bold mb-4">
            MM <span className="text-sky-400">Strategy</span>
          </h2>
        </div>

        {/* 2×2 RESPONSIVE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {services.map((service, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative transform-gpu"
                style={{
                  transform:
                    hoveredIndex === index || isExpanded
                      ? 'translateZ(60px) scale(1.06)'
                      : 'translateZ(0) scale(1)',
                  transition: 'transform 0.55s ease',
                }}
              >
                <div
                  className={`relative h-full p-8 sm:p-9 rounded-2xl glass-effect border transition-all duration-500
                  ${
                    isExpanded
                      ? 'border-sky-400 shadow-[0_0_70px_rgba(56,189,248,0.35)]'
                      : 'border-white/10'
                  }`}
                >
                  <div className="relative z-10 max-w-prose">
                    <div
                      className={`w-16 h-16 mb-6 rounded-xl bg-sky-400/20 flex items-center justify-center transition-all duration-500
                      ${
                        hoveredIndex === index
                          ? 'shadow-[0_0_30px_rgba(56,189,248,0.6)]'
                          : ''
                      }`}
                    >
                      <service.icon size={32} className="text-sky-400" />
                    </div>

                    <h3 className="text-2xl font-bold mb-4 text-white tracking-wide">
                      {service.title}
                    </h3>

                    <p
                      className={`text-gray-300 text-[15.5px] leading-relaxed whitespace-pre-line transition-all duration-500
                      ${isExpanded ? 'max-h-[2200px]' : 'line-clamp-4'}`}
                    >
                      {service.description}
                    </p>

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

                    <div className="mt-6 w-14 h-1 bg-sky-400 rounded-full" />
                  </div>

                  <div
                    className={`absolute -bottom-24 -right-24 w-48 h-48 bg-sky-400 rounded-full blur-3xl transition-opacity duration-700
                    ${isExpanded ? 'opacity-30' : 'opacity-10'}`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
