// CustomCursor.js
import React, {useState, useEffect} from "react";
import styles from "./CustomCursor.module.css";

const CustomCursor = () => {
  const [position, setPosition] = useState({x: 0, y: 0});
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e: {clientX: number; clientY: number}) => {
      setPosition({x: e.clientX - 25, y: e.clientY - 25});

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

    document.addEventListener("mousemove", updateCursorPosition);

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
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
