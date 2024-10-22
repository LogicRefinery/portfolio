"use client";
import Link from "next/link";
import React from "react";

function Nav() {
  return (
    <nav>
      <h2 className="sr-only">글로벌네비게이션</h2>
      <ul className="flex gap-4">
        <li className={`hover:text-orange-L2 `}>
          <Link href="#about">About</Link>
        </li>
        <li className={`hover:text-orange-L2`}>
          <Link href="#career">Career</Link>
        </li>
        <li className={`hover:text-orange-L2 `}>
          <Link href="#skills">Skills</Link>
        </li>
        <li className={`hover:text-orange-L2`}>
          <Link href="#projects">Projects</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
