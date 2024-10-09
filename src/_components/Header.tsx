import React from "react";
import Nav from "./Nav";
import { shrikhand } from "@/_fonts/fonts";

function Header() {
  return (
    <header className="after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1px] after:bg-[#00000029] fixed w-full backdrop-saturate-150 backdrop-blur-lg z-10 bg-[#fafafc9f]">
      <div className="wrap w-[400px] md:w-[700px] xl:w-[1100px] mx-auto flex justify-between p-4">
        <h1 className={`${shrikhand.className} text-orange-L2`}>taehyung.</h1>
        <Nav></Nav>
      </div>
    </header>
  );
}

export default Header;
