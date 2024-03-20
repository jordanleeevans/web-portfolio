"use client";
import { useState, useEffect, useMemo } from "react";
import { useInView } from "react-intersection-observer";

export const useRoughNotationAnimation = () => {
  // Create a state to hold the window width
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  // Update the window width state when the window is resized
  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setWindowWidth(window.innerWidth);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getAnimationDelay = () => {
    if (windowWidth > 768) {
      return 1300;
    } else {
      return 700;
    }
  };

  // Create a ref to the section
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const animationDelay = useMemo(getAnimationDelay, [windowWidth]);

  return { ref, inView, animationDelay };
};
