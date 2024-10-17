"use client";
import { Image as Thumbnail, Portfolio } from "@/_model/portfolio";
import Image from "next/image";
import React from "react";
import { IoCloseOutline } from "react-icons/io5";

type Props = {
  thumbnail: Thumbnail;
  thumbnailModalController: (state: boolean) => void;
};

function ThmubnailModal({ thumbnail, thumbnailModalController }: Props) {
  return (
    <>
      <div
        className="modalOverlay fixed left-0 top-0 w-full h-full bg-apple-black backdrop-blur-lg bg-opacity-80 z-30"
        onClick={() => {
          thumbnailModalController(false);
        }}
      ></div>

      {thumbnail ? (
        <div className="fixed z-40 inset-x-0 inset-y-0 max-w-[50vw] aspect-[16/9] m-auto max-md:max-w-[100vw]">
          <div className="absolute right-2 top-2 z-10">
            <button
              className="border-2 border-orange-L3 w-[40px] h-[40px] rounded-full flex justify-center items-center hover:bg-white transition-all"
              onClick={() => {
                thumbnailModalController(false);
              }}
            >
              <IoCloseOutline
                size={30}
                className="stroke-orange-L3 "
              ></IoCloseOutline>
            </button>
          </div>
          <Image
            src={thumbnail.url}
            alt={thumbnail.alt}
            fill
            sizes="(max-width:768px) 100vw, 50vw"
          ></Image>
        </div>
      ) : (
        <>썸네일 내용이 존재하지 않습니다.</>
      )}
    </>
  );
}

export default ThmubnailModal;
