"use client";
import Link from "next/link";
import React, { useEffect } from "react";

type Props = {
  selectSkill: any | null;
  modalController: (state: boolean) => void;
};

function Modal({ selectSkill, modalController }: Props) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      <div
        className="modalOverlay fixed left-0 top-0 w-full h-full bg-slate-500 backdrop-blur-lg bg-opacity-50 z-10"
        onClick={() => {
          modalController(false);
        }}
      ></div>
      <div className="fixed inset-x-0 inset-y-0 z-20 overflow-y-auto my-10 mx-40 max-md:px-0 max-md:py-0 bg-white">
        <div className="header">{selectSkill.title}</div>
        <div className="body"></div>
        <div className="footer"></div>
      </div>

      <div className="btnBox fixed right-0 top-0 z-20">
        <ul>
          <li>
            <button
              onClick={() => {
                modalController(false);
              }}
            >
              X버튼
            </button>
          </li>
          <li>
            <Link href="#">깃헙 버튼</Link>
          </li>
          <li>
            <Link href="#">사이트 링크버튼</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Modal;
