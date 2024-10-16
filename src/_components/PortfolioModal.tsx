"use client";
import { Portfolio } from "@/_model/portfolio";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect } from "react";
import { FaLink, FaSquareGithub } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";
import { FaFilePdf } from "react-icons/fa";

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
        className="modalOverlay fixed left-0 top-0 w-full h-full bg-apple-black backdrop-blur-lg bg-opacity-80 z-10"
        onClick={() => {
          modalController(false);
        }}
      ></div>

      {selectPortfolio ? (
        <div className="fixed inset-x-0 inset-y-0 z-[20] overflow-y-auto my-10 mx-40 max-md:mx-0 max-md:my-0 py-10 bg-white">
          <div className="w-[calc(100vw-60vw)] rounded-2xl max-md:w-[calc(100vw-10vw)] m-auto">
            <div className="header flex flex-col items-center gap-2 px-10 ">
              <div className="text-4xl font-bold mt-10">
                {selectPortfolio.title}
              </div>
              <div className="text-sm mt-4 text-apple-gray">
                {selectPortfolio.workDuration} ( 1인 )
              </div>
              <div className=" border-orange-L3 border-[0.0625rem] p-3 rounded-2xl">
                <Image
                  src={selectPortfolio.image.url}
                  alt={selectPortfolio?.image.alt}
                  width={500}
                  height={300}
                  style={{ objectFit: "cover", width: "100%" }}
                  sizes="50vw"
                  className="rounded-xl"
                />
              </div>
              <div className="mt-4 text-apple-gray">
                {selectPortfolio.detailDescription}
              </div>
            </div>
            <div className="body before:content-[''] before:w-full before:h-[1px] before:bg-orange-L3 before:block before:my-10">
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
                  <ul className="list-inside list-disc">
                    {selectPortfolio.keyFeatures.map((keyFeature, i) => (
                      <li key={i}>{keyFeature}</li>
                    ))}
                  </ul>
                </li>
                <li>
                  <div className="text-2xl mb-2">트러블 슈팅</div>
                  <ul>
                    {selectPortfolio.troubleshooting.map((trouble, i) => (
                      <li key={i}>
                        <div>{trouble.trouble}</div>
                        <div>{trouble.solution}</div>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <div className="text-2xl mb-2">회고</div>
                  <div>{selectPortfolio.retrospect}</div>
                </li>
                <li>
                  <div className="text-2xl mb-2">화면</div>
                  <div className="text-apple-gray text-sm">
                    썸네일을 클릭하면 크게 볼 수 있습니다.
                  </div>
                  <ul className="grid grid-cols-3 gap-2 max-lg:grid-cols-2">
                    {selectPortfolio.viewsImage.map((image, i) => (
                      <li
                        key={i}
                        className="border-[1px] border-[#e5e7eb] hover:cursor-pointer hover:opacity-70"
                      >
                        {
                          <Image
                            src={image.url}
                            alt={image.alt}
                            width={400}
                            height={200}
                            style={{ objectFit: "cover" }}
                            sizes="(max-width: 768px) 50vw,(max-width: 1280px) 33vw"
                          />
                        }
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>
            <div className="footer"></div>
          </div>
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
            {selectPortfolio?.links.github ? (
              <Link
                href={selectPortfolio.links.github}
                className="bg-white w-[50px] h-[50px] rounded-full flex justify-center items-center"
                target="_blank"
              >
                <FaSquareGithub size={30}></FaSquareGithub>
              </Link>
            ) : null}
          </li>
          <li>
            {selectPortfolio?.links.deployment ? (
              <Link
                href={selectPortfolio.links.deployment}
                className="bg-white w-[50px] h-[50px] rounded-full flex justify-center items-center"
                target="_blank"
              >
                <FaLink size={30}></FaLink>
              </Link>
            ) : null}
          </li>
          <li>
            {selectPortfolio?.links.pdf ? (
              <Link
                href={selectPortfolio.links.pdf}
                className="bg-white w-[50px] h-[50px] rounded-full flex justify-center items-center"
                target="_blank"
              >
                <FaFilePdf size={30}></FaFilePdf>
              </Link>
            ) : null}
          </li>
        </ul>
      </div>
    </>
  );
}

export default Modal;
