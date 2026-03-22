import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    // Basic mouse move listener
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // Complex interaction listener to identify links and buttons safely
    const handleMouseOver = (e) => {
      // Ensure target is a valid element before trying to access tagName or closest
      if (!e.target || !e.target.tagName || typeof e.target.closest !== "function") {
        setHovered(false);
        return;
      }
      
      if (
        e.target.tagName.toLowerCase() === "a" ||
        e.target.tagName.toLowerCase() === "button" ||
        e.target.closest("a") ||
        e.target.closest("button")
      ) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  // Use CSS media query via global class to hide on mobile
  return (
    <div className="custom-cursor-container">
      <div
        className={`custom-cursor-dot ${hovered ? "hovered" : ""}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      <div
        className={`custom-cursor-outline ${hovered ? "hovered" : ""}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
    </div>
  );
};

export default CustomCursor;
