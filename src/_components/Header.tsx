"use client";

import React from "react";
import Nav from "./Nav";
import { shrikhand } from "@/_fonts/fonts";
import Link from "next/link";

function Header({ activeSection }: { activeSection: number }) {
  return (
    <header
      className={`${
        activeSection > 0 && activeSection < 5 ? "opacity-100" : "opacity-0"
      } after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1px] after:bg-[#00000029] fixed w-full backdrop-saturate-150 backdrop-blur-lg z-10 bg-[#fafafc9f] transition-opacity duration-300`}
    >
      <div className="wrap w-[400px] md:w-[700px] xl:w-[1100px] mx-auto flex justify-between p-4">
        <h1 className={`${shrikhand.className} text-orange-L2`}>
          <Link href={"/"}>taehyung.</Link>
        </h1>
        <Nav></Nav>
      </div>
    </header>
  );
}

export default Header;
