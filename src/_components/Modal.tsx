"use client";
import { SkillDetail, SkillItem } from "@/_model/skills";
import React, { useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";

type Props = {
  selectSkill: SkillItem | null;
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
        className="modalOverlay fixed left-0 top-0 w-full h-full bg-apple-black backdrop-blur-lg bg-opacity-80 z-10"
        onClick={() => {
          modalController(false);
        }}
      ></div>

      <div className="fixed inset-x-0 inset-y-0 z-[20] overflow-y-auto my-10 mx-40 max-md:mx-0 max-md:my-0 bg-white px-[20%] pt-10">
        <div className="header flex flex-col items-center p-10">
          <div className="bg-apple-gray p-3 pt-[6px] rounded-[40px] hover:bg-orange-L2 group hover:scale-105 hover:-translate-y-2 transition-all cursor-pointer">
            <div className="bg-white rounded-[20px] p-6">
              {selectSkill?.icon}
            </div>
          </div>
        </div>
        <div className="body">
          <ul className="flex flex-col gap-6">
            {selectSkill &&
              selectSkill.skills?.map((skill: SkillDetail) => (
                <li key={skill.title} className="flex flex-col gap-2">
                  <div className="text-xl text-orange-L2 font-bold">
                    {skill.title}
                  </div>
                  <div className="text-apple-gray">{skill.description}</div>
                </li>
              ))}
          </ul>
        </div>

        <div className="footer"></div>
      </div>

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
        </ul>
      </div>
    </>
  );
}

export default Modal;
