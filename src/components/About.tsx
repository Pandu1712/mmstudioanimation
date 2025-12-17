import { useState } from "react";

const AboutBusinessText = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="relative py-24 bg-black text-gray-300">
      <div className="max-w-5xl mx-auto px-4">

        {/* ================= HEADING ================= */}
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-wide">
            Scalability and Potential{" "}
            <span className="text-sky-400">
              for Employment / Wealth Creation
            </span>
          </h2>
          <div className="mt-4 w-24 h-1 bg-sky-400 mx-auto rounded-full" />
        </div>

        {/* ================= DEFAULT SUMMARY (ALWAYS VISIBLE) ================= */}
        <p className="text-lg leading-relaxed mb-8">
         Magic Motion Studio's innovative "Real-Time Converged Production Ecosystem"{" "}
          <span className="text-white font-semibold">exponential scalability</span>,
          inherently 
builds a foundation for aggressive scalability and robust economic impact through 
employment and wealth generation. 
        </p>

        {/* ================= EXPANDED CONTENT ================= */}
        {expanded && (
          <div className="space-y-14 text-lg leading-relaxed">

            {/* ================= SCALABILITY ================= */}
            <div className="border-l-4 border-sky-400 pl-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                1. Scalability: Beyond Linear Growth
              </h3>

              <p className="mb-4">
                Our scalability isn't just about taking on more projects; it's about exponential growth fueled 
by technology, strategic asset utilization, and diversified revenue streams.
              </p>
<ul className="list-disc ml-6 space-y-6"> <li> <strong className="text-white">Technology-Driven Elasticity:</strong> <ul className="list-circle ml-6 mt-3 space-y-4"> <li> <strong className="text-white">Cloud Infrastructure:</strong>{" "} By leveraging cloud-based rendering farms and virtual workstations (e.g., AWS, Azure, Google Cloud), we can dynamically scale our computational power up or down based on project demands. This eliminates the need for massive, expensive on-premise hardware investments and allows us to take on blockbuster-level projects without prohibitive upfront costs </li> <li> <strong className="text-white">Remote Collaboration:</strong>{" "} Our real-time, integrated pipeline supports seamless global remote collaboration. This means we can tap into a worldwide talent pool, bringing in specialized artists for specific tasks regardless of their physical location, rapidly expanding our capacity. </li> <li> <strong className="text-white">AI & Automation:</strong>{" "} As AI tools for animation, VFX, and asset creation mature, we will integrate them to automate repetitive, time-consuming tasks (e.g., procedural animation, texture generation, initial blocking). This allows our existing human talent to focus on higher-value creative work, effectively increasing the output capacity per artist. </li> </ul> </li> <li> <strong className="text-white"> Asset Monetization & Reusability: </strong> <ul className="list-circle ml-6 mt-3 space-y-4"> <li> <strong className="text-white"> Proprietary Asset Library: </strong>{" "} Every universal asset (character, environment, prop) created for a client project or internal IP can be cataloged and potentially licensed for future use. This builds a valuable intellectual property library.. </li> <li className="ml-4"> <strong className="text-white">Example:</strong> A highly detailed futuristic city environment built for a game cinematic can be adapted and licensed for a corporate VR experience, a film background, or a metaverse event, generating recurring revenue without significant additional production cost. </li> <li> <strong className="text-white"> Template & Framework Development: </strong>{" "} As we complete projects, we develop reusable templates, scripts, and production frameworks within our real-time engine environment. These become accelerators for future projects, drastically reducing setup times and increasing efficiency, allowing us to handle more projects with the same team. </li> </ul> </li> <li> <strong className="text-white"> Diversified Revenue Streams (Beyond Services): </strong> <ul className="list-circle ml-6 mt-3 space-y-3"> <li> <strong className="text-white">Licensing & Royalties:</strong>{" "} Licensing our proprietary asset library, specialized tools, or even unique procedural generation workflows to other studios. </li> <li> <strong className="text-white"> Original IP Development: </strong>{" "} Incubating and developing our own games, animated series, or interactive experiences. This shifts revenue from direct service fees to potentially much larger, long-term royalty streams, merchandise, and franchise development. </li> <li> <strong className="text-white"> Training & Education: </strong>{" "} As pioneers in converged real-time production, we can develop and sell training modules or certification programs, leveraging our expertise to educate the next generation of digital artists and generating additional revenue. </li> </ul> </li> </ul>
              {/* (YOUR FULL CONTENT CONTINUES HERE — UNCHANGED) */}
              {/* KEEP EVERYTHING YOU ALREADY HAVE */}
            </div>

            {/* ================= EMPLOYMENT & WEALTH ================= */}
            <div className="border-l-4 border-sky-400 pl-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                2. Potential for Employment & Wealth Creation
              </h3>
<p className="mb-4"> Magic Motion Studio is poised to be a significant engine for high-skill employment and wealth creation due to its innovative approach and growth trajectory. </p> <ul className="list-disc ml-6 space-y-6"> <li> <strong className="text-white">High-Skill Job Creation:</strong> <ul className="list-circle ml-6 mt-3 space-y-3"> <li> <strong className="text-white">Specialized Roles:</strong>{" "} We will create demand for a new generation of "converged artists" – individuals skilled across modeling, animation, lighting, and real-time engine integration. This includes Technical Artists, Real-time VFX Artists, Environment Designers, Character Riggers, and Pipeline Developers. </li> <li> <strong className="text-white">Cross-Functional Teams:</strong>{" "} Our model necessitates robust project management, production coordination, and creative direction, leading to roles that oversee interdisciplinary teams, fostering higher-level strategic thinking. </li> <li> <strong className="text-white"> Technological Expertise: </strong>{" "} Continuous investment in R&D will drive demand for engineers specializing in AI, machine learning, cloud architecture, and real-time graphics programming. </li> </ul> </li> <li> <strong className="text-white"> Upskilling & Re-skilling Opportunities: </strong>{" "} For traditional animators or VFX artists, Magic Motion Studio offers the opportunity to upskill into real-time pipelines, expanding their market value and future-proofing their careers. This creates a valuable talent pipeline within the creative economy. </li> <li> <strong className="text-white">Indirect Economic Impact:</strong> <ul className="list-circle ml-6 mt-3 space-y-3"> <li> <strong className="text-white"> Supporting Ecosystem: </strong>{" "} Our growth will stimulate demand for complementary services such as motion capture studios, sound design houses, voice actors, hardware providers, and software developers, creating a broader economic ripple effect. </li> <li> <strong className="text-white"> Attracting Investment: </strong>{" "} As a cutting-edge studio, we will attract significant venture capital and strategic partnerships, bringing external wealth and opportunity into the ecosystem. </li> </ul> </li> <li> <strong className="text-white"> Wealth Creation for Stakeholders: </strong> <ul className="list-circle ml-6 mt-3 space-y-3"> <li> <strong className="text-white"> Employee Ownership / Equity: </strong>{" "} Offering equity or performance bonuses to key employees aligns incentives, allowing staff to directly participate in the studio's success and accumulate personal wealth. </li> <li> <strong className="text-white">Investor Returns:</strong>{" "} The diversified revenue streams, high scalability, and IP generation potential offer attractive returns for investors, fueling further growth and innovation. </li> </ul> </li> </ul> <p className="mt-6 font-semibold text-white"> In summary, Magic Motion Studio's scalability is not merely incremental but exponential, driven by smart technology adoption and strategic asset management. This growth, in turn, translates directly into the creation of high-value, future-proof jobs and significant wealth generation for its employees, investors, and the broader creative economy. </p>
            </div>
          </div>
        )}

        {/* ================= SINGLE BUTTON ================= */}
        <div className="text-center mt-12">
          <button
            onClick={() => setExpanded(!expanded)}
            className="px-10 py-3 bg-sky-400 text-black font-bold rounded-lg hover:scale-105 transition"
          >
            {expanded ? "READ LESS" : "READ MORE"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutBusinessText;
