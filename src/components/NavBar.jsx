import { useState, useEffect } from "react";
import { navLinks } from "../constants";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a href="#hero" className="logo" onClick={() => setIsOpen(false)}>
          Lovelesh Kumar
        </a>

        {/* Desktop Nav */}
        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="/Lovelesh_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn group hidden lg:flex"
          >
            <div className="inner !bg-transparent border border-white !text-white hover:!bg-white-50">
              <span className="group-hover:!text-black transition-colors duration-300">
                Resume
              </span>
            </div>
          </a>
          <a href="#contact" className="contact-btn group hidden md:flex">
            <div className="inner">
              <span>Contact me</span>
            </div>
          </a>

          {/* Toggle Button for Mobile */}
          <button
            title="Toggle Menu"
            className="mobile-toggle lg:hidden flex flex-col gap-1.5 z-[110]"
            onClick={toggleMenu}
          >
            <span className={`w-8 h-0.5 bg-white transition-all transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-8 h-0.5 bg-white transition-opacity ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`w-8 h-0.5 bg-white transition-all transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black backdrop-blur-2xl z-[100] transform transition-transform duration-500 lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8">
          <ul className="flex flex-col items-center gap-8 text-2xl font-bold">
            {navLinks.map(({ link, name }) => (
              <li key={name}>
                <a href={link} onClick={() => setIsOpen(false)} className="hover:text-white-50 transition-colors">
                  {name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/Lovelesh_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="hover:text-white-50 transition-colors"
              >
                Resume
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="hover:text-white-50 transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
