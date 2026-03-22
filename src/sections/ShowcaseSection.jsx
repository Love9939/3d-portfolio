import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/1765698003746.jpg" alt="Choudhary Vastralya" />
            </div>
            <div className="text-content">
              <h2>
                Choudhary Vastralya — Premium Indian Ethnic Wear E-Commerce Platform
              </h2>
              <p className="text-white-50 md:text-xl">
                A full-stack, production-ready boutique e-commerce platform for royal Indian couture with AI-powered features, real-time inventory, and secure payment processing.
              </p>
              <div className="flex flex-wrap gap-2 mt-4 text-sm font-medium">
                {['React 19', 'TypeScript', 'Tailwind CSS', 'Redux Toolkit', 'Firebase', 'Razorpay', 'Gemini AI'].map((tag) => (
                  <span key={tag} className="bg-white/10 text-white-50 px-3 py-1 rounded-full border border-white/20">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project flex flex-col gap-4" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB] overflow-hidden rounded-3xl">
                <img
                  src="/images/project2.png"
                  alt="Netflix_GPT"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-bold">Netflix_GPT</h2>
                <p className="text-white-50 text-sm">
                  An AI movie discovery platform integrating TMDB API and OpenAI GPT to allow natural language movie searches with optimized state management.
                </p>
                <div className="flex flex-wrap gap-2 mt-2 text-xs font-medium">
                  {['React', 'Redux Toolkit', 'Firebase', 'OpenAI API'].map((tag) => (
                    <span key={tag} className="bg-white/10 text-white-50 px-2 py-1 rounded-md border border-white/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="project flex flex-col gap-4" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB] overflow-hidden rounded-3xl">
                <img src="/images/qr-dine-in.png" alt="Pallet QR Dine-In" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-bold">Pallet QR Dine-In Platform</h2>
                <p className="text-white-50 text-sm">
                  A high-performance B2C table-ordering flow featuring React Query caching, custom cart flows, and geolocation & logistics bypass optimizations.
                </p>
                <div className="flex flex-wrap gap-2 mt-2 text-xs font-medium">
                  {['React', 'TanStack Query', 'Redux', 'Performance'].map((tag) => (
                    <span key={tag} className="bg-white/10 text-white-50 px-2 py-1 rounded-md border border-white/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
