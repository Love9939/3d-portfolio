import Navbar from "./components/NavBar";
import CustomCursor from "./components/CustomCursor";
import ErrorBoundary from "./components/ErrorBoundary";

import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import EngineeringDecisions from "./sections/EngineeringDecisions";
import LogoShowcase from "./sections/LogoShowcase";
import FeatureCards from "./sections/FeatureCards";
import Experience from "./sections/Experience";
import TechStack from "./sections/TechStack";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const App = () => (
  <ErrorBoundary>
    <CustomCursor />
    <Navbar />
    <Hero />
    <ShowcaseSection />
    <EngineeringDecisions />
    <LogoShowcase />
    <FeatureCards />
    <Experience />
    <TechStack />
    <Testimonials />
    <Contact />
    <Footer />
  </ErrorBoundary>
);

export default App;
