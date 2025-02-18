"use client";
import { useEffect, useRef, useState } from "react";

const NavBar = () => {
  const lastScrollY = useRef<number>(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current && window.scrollY > 100) {
        setIsVisible(false); // Hide navbar when scrolling down
      } else {
        setIsVisible(true); // Show navbar when scrolling up
      }

      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 p-3  ${
        isVisible ? "bg-transparent" : "bg-[#333] shadow-md"
      }`}
    >
      <ul className="flex gap-8 justify-center font-sans font-bold text-[12px] tracking-[2.5px] uppercase">
        <a href="#home">Home</a>
        <a href="#resume">Resume</a>
      </ul>
    </nav>
  );
};

export default NavBar;
