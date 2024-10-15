import React from "react";
import Svg from "./Svg";
import { Portfolio } from "@/_model/portfolio";
import { v4 as uuidv4 } from "uuid";
import { SiPrisma } from "react-icons/si";
import { RiSupabaseLine } from "react-icons/ri";

export const portfolios: Portfolio[] = [
  {
    id: uuidv4(),
    title: "포트폴리오 웹",
    workDuration: "2024.04.01 ~ 2024.05.01",
    description: "프론트엔드 개발자로서 김태형을 세일즈하기위한 웹",
    image: {
      url: "/portfolio.png",
      description: "포트폴리오 웹사이트 이미지",
    },
    detailDescription: "상세설명",
    stack: [
      <>
        <span className="sr-only">next 로고</span>
        {Svg("next", 40, 40, "fill-[#1d1d1f]", false)}
      </>,
      <>
        <span className="sr-only">typescript 로고</span>
        {Svg("ts", 40, 40, "fill-[#007acc]", false)}
      </>,
      <>
        <span className="sr-only">tailwind 로고</span>
        {Svg("tailwind", 40, 40, "fill-[#38bdf8]", false)}
      </>,
    ],
    keyFeatures: "주요기능에 대한 내용",
    troubleshooting: "주요기능에 대한 내용",
    viewsUrl: ["각화면 사진 URL", "url"],
  },
  {
    id: uuidv4(),
    title: "공통 컴포넌트",
    workDuration: "2024.04.01 ~ 2024.05.01",
    image: { url: "/common.png", description: "공통 컴포넌트 이미지" },
    detailDescription: "상세설명",
    description: "재사용 가능한 공통 컴포넌트 제작 및 관리 프로젝트",
    stack: [
      <>
        <span className="sr-only">next 로고</span>
        {Svg("next", 40, 40, "fill-[#1d1d1f]", false)}
      </>,
      <>
        <span className="sr-only">typescript 로고</span>
        {Svg("ts", 40, 40, "fill-[#007acc]", false)}
      </>,
      <>
        <span className="sr-only">tailwind 로고</span>
        {Svg("tailwind", 40, 40, "fill-[#38bdf8]", false)}
      </>,
    ],
    keyFeatures: "주요기능에 대한 내용",
    troubleshooting: "주요기능에 대한 내용",
    viewsUrl: ["각화면 사진 URL", "url"],
  },
  {
    id: uuidv4(),
    title: "supatodo",
    description: "supabase를 적용한 투두리스트",
    workDuration: "2024.04.01 ~ 2024.05.01",
    image: { url: "/supatodo.png", description: "투두리스트 이미지" },
    detailDescription: "상세설명",
    stack: [
      <>
        <span className="sr-only">next 로고</span>
        {Svg("next", 40, 40, "fill-[#1d1d1f]", false)}
      </>,
      <>
        <span className="sr-only">typescript 로고</span>
        {Svg("ts", 40, 40, "fill-[#007acc]", false)}
      </>,
      <>
        <span className="sr-only">prisma 로고</span>
        {Svg("prisma", 40, 40, "fill-[#007acc]", false)}
      </>,
      <>
        <span className="sr-only">supabase 로고</span>
        {Svg("supabase", 40, 40, "fill-[#3ecf8e]", true)}
      </>,
      <>
        <span className="sr-only">tailwind 로고</span>
        {Svg("tailwind", 40, 40, "fill-[#38bdf8]", false)}
      </>,
      <>
        {/* <span className="sr-only">react 로고</span> */}
        <span>Context Api</span>
      </>,
    ],
    keyFeatures: "주요기능에 대한 내용",
    troubleshooting: "주요기능에 대한 내용",
    viewsUrl: ["각화면 사진 URL", "url"],
  },
  {
    id: uuidv4(),
    title: "thform",
    description: "설문조사 form을 생성하고 관리하는 웹",
    workDuration: "2024.04.01 ~ 2024.05.01",
    image: { url: "/form.png", description: "설문조사 폼 웹사이트 이미지" },
    detailDescription: "상세설명",
    stack: [
      <>
        <span className="sr-only">react 로고</span>
        {Svg("react", 40, 40, "fill-[#61DAFB]", false)}
      </>,
      <>
        <span className="sr-only">typescript 로고</span>
        {Svg("ts", 40, 40, "fill-[#007acc]", false)}
      </>,
      <>
        <span className="sr-only">redux 로고</span>
        {Svg("redux", 40, 40, "fill-[#764abc]", false)}
      </>,
      <>
        <span className="sr-only">styledComponents 로고</span>
        {Svg("styledComponents", 40, 40, "", false)}
      </>,
    ],
    keyFeatures: "주요기능에 대한 내용",
    troubleshooting: "주요기능에 대한 내용",
    viewsUrl: ["각화면 사진 URL", "url"],
  },
  {
    id: uuidv4(),
    title: "thmall",
    description: "카테고리 및 상품을 등록하고 판매하는 e-commerce 웹",
    workDuration: "2024.04.01 ~ 2024.05.01",
    image: { url: "/mall.png", description: "이커머스 웹 이미지" },
    detailDescription: "상세설명",
    stack: [
      <>
        <span className="sr-only">react 로고</span>
        {Svg("next", 40, 40, "fill-[#1d1d1f]", false)}
      </>,
      <>
        <span className="sr-only">react 로고</span>
        {Svg("ts", 40, 40, "fill-[#007acc]", false)}
      </>,
      <>
        <span className="sr-only">react 로고</span>
        {Svg("prisma", 40, 40, "", false)}
      </>,
      <>
        <span className="sr-only">react 로고</span>
        {Svg("lodash", 40, 40, "fill-[#3492ff]", false)}
      </>,
      <>
        <span className="sr-only">react 로고</span>
        {Svg("reactQuery", 40, 40, "", false)}
      </>,
      <>
        <span className="sr-only">react 로고</span>
        {Svg("scss", 40, 40, "fill-[#CB6699]", false)}
      </>,
      <>
        <span className="sr-only">react 로고</span>
        {Svg("reactHookForm", 40, 40, "", false)}
      </>,
    ],
    keyFeatures: "주요기능에 대한 내용",
    troubleshooting: "주요기능에 대한 내용",
    viewsUrl: ["각화면 사진 URL", "url"],
  },
  {
    id: uuidv4(),
    title: "thgallery",
    description: "unsplash API를 활용한 갤러리 웹",
    workDuration: "2024.04.01 ~ 2024.05.01",
    image: { url: "/gallery.png", description: "갤러리 이미지" },
    detailDescription: "상세설명",
    stack: [
      <>
        <span className="sr-only">next 로고</span>
        {Svg("next", 40, 40, "fill-[#1d1d1f]", false)}
      </>,
      <>
        <span className="sr-only">scss 로고</span>
        {Svg("scss", 40, 40, "fill-[#CB6699]", false)}
      </>,
    ],
    keyFeatures: "주요기능에 대한 내용",
    troubleshooting: "주요기능에 대한 내용",
    viewsUrl: ["각화면 사진 URL", "url"],
  },
];
