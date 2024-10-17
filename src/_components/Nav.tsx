"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Nav({ activeSection }: { activeSection: string }) {
  return (
    <nav>
      <h2 className="sr-only">글로벌네비게이션</h2>
      <ul className="flex gap-4">
        <li
          className={`hover:text-orange-L2 ${
            activeSection === "about" ? "text-orange-L2" : ""
          }`}
        >
          <Link href="#about">About</Link>
        </li>
        <li
          className={`hover:text-orange-L2 ${
            activeSection === "career" ? "text-orange-L2" : ""
          }`}
        >
          <Link href="#career">Career</Link>
        </li>
        <li
          className={`hover:text-orange-L2 ${
            activeSection === "skills" ? "text-orange-L2" : ""
          }`}
        >
          <Link href="#skills">Skills</Link>
        </li>
        <li
          className={`hover:text-orange-L2 ${
            activeSection === "projects" ? "text-orange-L2" : ""
          }`}
        >
          <Link href="#projects">Projects</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
