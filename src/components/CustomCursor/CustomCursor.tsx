// CustomCursor.js
import React, {useState, useEffect} from "react";
import styles from "./CustomCursor.module.css";

const CustomCursor = () => {
  const [position, setPosition] = useState({x: 0, y: 0});
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({x: e.clientX - 15, y: e.clientY - 15});

      // Lógica para detectar si el cursor está sobre el botón o enlace
      const buttonOrLink = document.elementFromPoint(e.clientX, e.clientY);

      if (
        buttonOrLink &&
        (buttonOrLink.tagName === "BUTTON" ||
          (buttonOrLink.tagName === "SPAN" && buttonOrLink.closest("button")) ||
          buttonOrLink.tagName === "A")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      setPosition({x: -100, y: -100}); // Establecer posición fuera de la ventana
    };

    document.addEventListener("mousemove", updateCursorPosition);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseout", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseout", handleMouseLeave);
    };
  }, []);

  return (
    <div
      className={`${styles.cursor} ${isHovered ? styles.hovered : ""}`}
      style={{left: `${position.x}px`, top: `${position.y}px`}}
    />
  );
};

export default CustomCursor;
