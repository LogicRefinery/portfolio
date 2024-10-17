"use client";

import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import { shrikhand } from "@/_fonts/fonts";

function Header() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    const scrollPosition = window.scrollY + 56;
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        setActiveSection(section.getAttribute("id") || "");
      }
    });
  };

  useEffect(() => {
    if (activeSection === "") {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  }, [activeSection]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1px] after:bg-[#00000029] fixed w-full backdrop-saturate-150 backdrop-blur-lg z-10 bg-[#fafafc9f] transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="wrap w-[400px] md:w-[700px] xl:w-[1100px] mx-auto flex justify-between p-4">
        <h1 className={`${shrikhand.className} text-orange-L2`}>taehyung.</h1>
        <Nav activeSection={activeSection}></Nav>
      </div>
    </header>
  );
}

export default Header;
