"use client";
import { Portfolio } from "@/_model/portfolio";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect } from "react";
import { FaLink, FaSquareGithub } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";

type Props = {
  selectPortfolio: Portfolio | null;
  modalController: (state: boolean) => void;
};

function Modal({ selectPortfolio, modalController }: Props) {
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

      {selectPortfolio ? (
        <div className="fixed inset-x-0 inset-y-0 z-[20] overflow-y-auto my-10 mx-40 max-md:mx-0 max-md:my-0 bg-white px-[20%] pt-10">
          <div className="header flex flex-col items-center mb-4 gap-2">
            <div className="text-3xl text-bold">{selectPortfolio.title}</div>
            <div className="text-sm mt-4">
              {selectPortfolio.workDuration} ( 1인 )
            </div>
            <div className="relative h-[300px] w-full rounded-md overflow-hidden shadow-md">
              <Image
                src={selectPortfolio.image.url}
                alt={selectPortfolio?.image.description}
                fill
                sizes="50vw"
              />
            </div>
            <div>{selectPortfolio.detailDescription}</div>
          </div>
          <div className="body">
            <ul className="flex flex-col gap-10">
              <li>
                <div className="text-2xl mb-2">Stack</div>
                <ul className="flex gap-2">
                  {selectPortfolio.stack.map((stack, i) => (
                    <li key={i}>{stack}</li>
                  ))}
                </ul>
              </li>
              <li>
                <div className="text-2xl mb-2">주요 기능</div>
                <ul>
                  <li>기능 1</li>
                  <li>기능 1</li>
                  <li>기능 1</li>
                  <li>기능 1</li>
                  <li>기능 1</li>
                </ul>
              </li>
              <li>
                <div className="text-2xl mb-2">트러블 슈팅</div>
                <ul>
                  <li>기능 1</li>
                  <li>기능 1</li>
                  <li>기능 1</li>
                  <li>기능 1</li>
                  <li>기능 1</li>
                </ul>
              </li>
              <li>
                <div className="text-2xl mb-2">화면</div>
                <ul>
                  <li>기능 1</li>
                  <li>기능 1</li>
                  <li>기능 1</li>
                  <li>기능 1</li>
                  <li>기능 1</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="footer"></div>
        </div>
      ) : (
        <>포트폴리오 내용이 존재하지 않습니다.</>
      )}

      <div className="btnBox fixed right-20 top-10 z-20 max-md:right-0 max-md:top-0">
        <ul className="flex flex-col gap-4 max-md:flex-row-reverse">
          <li>
            <button
              className="bg-white w-[50px] h-[50px] rounded-full flex justify-center items-center"
              onClick={() => {
                modalController(false);
              }}
            >
              <IoCloseOutline
                size={30}
                className="stroke-apple-gray"
              ></IoCloseOutline>
            </button>
          </li>
          <li>
            <Link
              href="#"
              className="bg-white w-[50px] h-[50px] rounded-full flex justify-center items-center"
            >
              <FaSquareGithub size={30}></FaSquareGithub>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="bg-white w-[50px] h-[50px] rounded-full flex justify-center items-center"
            >
              <FaLink size={30}></FaLink>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Modal;
