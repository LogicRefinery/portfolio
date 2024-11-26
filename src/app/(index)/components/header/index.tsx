"use client";
import Link from "next/link";
import React, { useState } from "react";
import EmailForm from "../email";
import { createPortal } from "react-dom";

function Header() {
  const [mailToggle, setMailToggle] = useState<boolean>(false);

  const onEmailToggle = () => {
    setMailToggle((prev) => !prev);
  };

  return (
    <header className="flex justify-between py-10 sticky top-0 z-50 bg-white bg-opacity-50 backdrop-blur-lg">
      <div>
        <h1 className="text-4xl">김태형</h1>
        <p className="text-xl font-thin">프론트엔드 엔지니어</p>
      </div>
      <div>
        <ul className="flex">
          <li className="relative p-2 pt-0 flex items-center justify-center hover:font-bold transition-all">
            <Link
              href={"https://velog.io/@taehyung/posts"}
              target="_blank"
              className="flex items-center  after:content-[''] after:absolute after:w-[1px] after:h-[20px] after:right-0 after:bg-[#1d1d1f]"
            >
              블로그
            </Link>
          </li>
          <li className="relative p-2 pt-0 hover:font-bold transition-all">
            <Link
              href={"https://github.com/LogicRefinery"}
              target="_blank"
              className="flex items-center after:content-[''] after:absolute after:w-[1px] after:h-[20px] after:right-0 after:bg-[#1d1d1f]"
            >
              깃허브
            </Link>
          </li>
          <li className="relative p-2 pt-0 hover:font-bold transition-all">
            <button onClick={onEmailToggle}>이메일</button>
          </li>
        </ul>
      </div>
      {mailToggle &&
        createPortal(
          <EmailForm onEmailToggle={onEmailToggle}></EmailForm>,
          document.body
        )}
    </header>
  );
}

export default Header;