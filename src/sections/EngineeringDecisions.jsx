import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const engineeringDecisions = [
  {
    title: "Lazy Loading & Code Splitting",
    description: "Reduced initial UI bundle size by 40% through component-level code splitting and React.lazy(), resulting in an instantaneous First Contentful Paint (FCP).",
    icon: "⚡"
  },
  {
    title: "RTK Query & Firebase Caching",
    description: "Implemented sophisticated state machines via Redux Toolkit and active Firestore listeners to eliminate redundant API calls and enable PWA support.",
    icon: "🧠"
  },
  {
    title: "Atomic Transactions vs Race Conditions",
    description: "Architected Firestore document atomic transactions to accurately deduct variant-level stock (size × color) only post verification, solving concurrent checkouts.",
    icon: "🛡️"
  },
  {
    title: "React Three Fiber Overlays",
    description: "Chosen over standard WebGL for declarative, component-based 3D setups, abstracting the render loop while heavily memoizing geometry and materials.",
    icon: "🎮"
  }
];

const EngineeringDecisions = () => {
  const containerRef = useRef();

  useGSAP(() => {
    gsap.fromTo(
      ".engineering-card",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.out", scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%"
      }}
    );
  });

  return (
    <section ref={containerRef} className="padding-x-lg py-20 relative w-full overflow-hidden">
      <div className="flex flex-col gap-5 items-center justify-center relative z-10 mb-10">
        <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#d9ecff] to-[#839cb5]">
          Engineering Decisions
        </h2>
        <p className="text-white-50 text-center max-w-2xl text-lg mt-2">
          Building production-ready systems is about choices, not just code. Here is a look under the hood.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto relative z-10">
        {engineeringDecisions.map((decision, index) => (
          <div key={index} className="engineering-card card-border rounded-xl p-6 bg-[#0e0e10]/80 backdrop-blur-md border border-[#2d2d38] hover:border-white transition-all duration-300 transform hover:-translate-y-2">
            <span className="text-4xl mb-4 block drop-shadow-lg">{decision.icon}</span>
            <h3 className="text-xl font-semibold text-white mb-2">{decision.title}</h3>
            <p className="text-white-50 text-sm leading-relaxed">{decision.description}</p>
          </div>
        ))}
      </div>
      
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[800px] max-h-[400px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />
    </section>
  );
};

export default EngineeringDecisions;
