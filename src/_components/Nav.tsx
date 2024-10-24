"use client";
import Link from "next/link";
import React from "react";

function Nav({ activeSection }: { activeSection: number }) {
  return (
    <nav>
      <h2 className="sr-only">글로벌네비게이션</h2>
      <ul className="flex gap-4">
        <li
          className={`${
            activeSection === 1 ? "text-orange-L2" : undefined
          } hover:text-orange-L2 `}
        >
          <Link href="#about">About</Link>
        </li>
        <li
          className={`${
            activeSection === 2 ? "text-orange-L2" : undefined
          } hover:text-orange-L2 `}
        >
          <Link href="#career">Career</Link>
        </li>
        <li
          className={`${
            activeSection === 3 ? "text-orange-L2" : undefined
          } hover:text-orange-L2 `}
        >
          <Link href="#skills">Skills</Link>
        </li>
        <li
          className={`${
            activeSection === 4 ? "text-orange-L2" : undefined
          } hover:text-orange-L2 `}
        >
          <Link href="#projects">Projects</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
