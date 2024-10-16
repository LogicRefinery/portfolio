import React from "react";
import Svg from "./Svg";
import { Portfolio } from "@/_model/portfolio";
import { v4 as uuidv4 } from "uuid";

export const portfolios: Portfolio[] = [
  {
    id: uuidv4(),
    title: "포트폴리오 웹",
    workDuration: "2024.04.01 ~ 2024.05.01",
    description: "프론트엔드 개발자로서 김태형을 세일즈하기위한 웹",
    links: {
      github: "https://github.com/LogicRefinery/portfolio",
      deployment: "https://portfolio-vert-five-52.vercel.app",
    },
    image: {
      url: "/portfolio/portfolio.png",
      alt: "포트폴리오 웹사이트 이미지",
    },
    detailDescription:
      "기획부터 전부 직접 제작하였습니다. 프로필 사진의 컬러와 동일감을 주기위해 메인컬러를 옐로우로 선정하고 레퍼런스를 거쳐 디자인 하였습니다. 최근 애플 인터렉션을 공부하고 있어서 랜딩, 테이크오프 섹션에 적용해보았습니다.",
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
    keyFeatures: [
      "애플 인터렉션을 적용한 랜딩과 테이크오프",
      "추 후 형태 변화를 고려한 skills와 projects 섹션의 모달 분리",
      "각 기술 스택과 프로젝트 클릭 이벤트를 통한 상세화면 구현",
      "SVG 파일을 함수와 객체를 사용해 관리",
      "반응형 웹",
    ],
    troubleshooting: [],
    retrospect: "",
    viewsImage: [
      {
        url: "/portfolio/thumbnail1.png",
        alt: "메인 페이지 캡쳐화면 스킬 섹션 썸네일",
      },
      {
        url: "/portfolio/thumbnail2.png",
        alt: "메인 페이지 캡쳐화면 스킬 섹션 상세팝업 썸네일",
      },
      {
        url: "/portfolio/thumbnail3.png",
        alt: "메인 페이지 캡쳐화면 포트폴리오 섹션 썸네일",
      },
      {
        url: "/portfolio/thumbnail4.png",
        alt: "메인 페이지 캡쳐화면 포트폴리오 섹션 상세팝업 썸네일",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "공통 컴포넌트",
    workDuration: "2024.04.01 ~ 2024.05.01",
    image: { url: "/common/common.png", alt: "공통 컴포넌트 이미지" },
    links: {
      github:
        "https://github.com/LogicRefinery/components/tree/main/headlessSelectBox",
      deployment: "",
    },
    detailDescription:
      "headless UI 패턴을 적용한 셀렉트박스 공통 컴포넌트를 구현했습니다. 사용하는 상황에 따라 UI와 애니메이션을 커스텀할 수 있습니다.",
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
    keyFeatures: [
      "headless UI 패턴을 적용한 셀렉트박스 공통 컴포넌트",
      "사용하는 개발자와 상황에 따라 다른 애니메이션 구현 ( 사용시 특정 애니메이션 선택 가능 )",
      "더쓰기",
      "더쓰기",
    ],
    troubleshooting: [{ trouble: "", solution: "" }],
    retrospect: "회고내용",
    viewsImage: [{ url: "/common/common.png", alt: "alt" }],
  },
  {
    id: uuidv4(),
    title: "supatodo",
    description: "supabase를 적용한 투두리스트",
    workDuration: "2024.04.01 ~ 2024.05.01",
    image: { url: "/supatodo/supatodo.png", alt: "투두리스트 이미지" },
    links: {
      github: "https://github.com/LogicRefinery/supatodo",
      deployment: "https://www.logicrefinery.co.kr",
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
        <span>Context Api</span>
      </>,
    ],
    keyFeatures: ["주요기능에 대한 내용"],
    retrospect: "",
    troubleshooting: [{ trouble: "", solution: "" }],
    viewsImage: [
      {
        url: "/supatodo/thumbnail1.png",
        alt: "수파투두 로그인 화면 인증메일 발송 사진",
      },
      {
        url: "/supatodo/thumbnail2.png",
        alt: "리센드 인증메일 발송 사진",
      },
      {
        url: "/supatodo/thumbnail3.png",
        alt: "수파투두 로그인 화면 회원 인증중인 사진",
      },
      {
        url: "/supatodo/thumbnail4.png",
        alt: "수파투두 투두리스트 사진",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "thform",
    description: "설문조사 form을 생성하고 관리하는 웹",
    workDuration: "2024.04.01 ~ 2024.05.01",
    image: { url: "/form/form.png", alt: "설문조사 폼 웹사이트 이미지" },
    links: {
      github: "https://github.com/LogicRefinery/THForm",
      deployment: "https://th-form.vercel.app",
    },
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
    keyFeatures: ["주요기능에 대한 내용"],
    retrospect: "",
    troubleshooting: [{ trouble: "", solution: "" }],
    viewsImage: [{ url: "/common/common.png", alt: "alt" }],
  },
  {
    id: uuidv4(),
    title: "thmall",
    description: "카테고리 및 상품을 등록하고 판매하는 e-commerce 웹",
    workDuration: "2024.04.01 ~ 2024.05.01",
    image: { url: "/mall/mall.png", alt: "이커머스 웹 이미지" },
    links: {
      github: "https://github.com/LogicRefinery/todayhouse",
      deployment: "https://todayhouse.vercel.app",
      pdf: "https://drive.google.com/file/d/1j-LlDiA0Es4ZDJrz7UpzG8cLoTMcAG3j/view?usp=drive_link",
    },
    detailDescription:
      "이커머스 웹앱은 현대 사회에서 가장 흔히 접할 수 있는 온라인 플랫폼 중 하나이며, 기업의 비즈니스 모델과 실익에 직접적인 영향을 미칩니다. 따라서 실무에서 직면할 수 있는 수 많은 기술적 문제를 마주할 수 있다는 장점이 있다고 생각했기에 선택했습니다. 실제로, 프로젝트 진행 중 다양한 기능의 추가와 사용자 경험을 고려 하였습니다.",
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
    keyFeatures: ["주요기능에 대한 내용"],
    retrospect: "",
    troubleshooting: [{ trouble: "", solution: "" }],
    viewsImage: [
      {
        url: "/mall/thumbnail1.png",
        alt: "랜딩 페이지 사진",
      },
      {
        url: "/mall/thumbnail2.png",
        alt: "카테고리 등록 페이지 사진",
      },
      {
        url: "/mall/thumbnail3.png",
        alt: "상품 등록 페이지 사진",
      },
      {
        url: "/mall/thumbnail4.png",
        alt: "상품 등록시 이미지 파일첨부하는 이미지",
      },
      {
        url: "/mall/thumbnail5.png",
        alt: "상품 등록시 유효성검사하는 이미지",
      },
      {
        url: "/mall/thumbnail6.png",
        alt: "카테고리별 상품목록 로딩하는 이미지",
      },
      {
        url: "/mall/thumbnail7.png",
        alt: "유저가 보는 상품들이 등록되어있고 카드형태로 나열된 이미지",
      },
      {
        url: "/mall/thumbnail8.png",
        alt: "카테고리별 상풍목록을 보는 유저페이지 이미지",
      },
      {
        url: "/mall/thumbnail9.png",
        alt: "상품 디테일 페이지로 이동한 이미지",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "thgallery",
    description: "unsplash API를 활용한 갤러리 웹",
    workDuration: "2024.04.01 ~ 2024.05.01",
    image: { url: "/gallery/gallery.png", alt: "갤러리 이미지" },
    links: {
      github: "https://github.com/LogicRefinery/THGallery",
      deployment: "https://th-gallery-rose.vercel.app",
    },
    detailDescription:
      "이 웹사이트는 프론트엔드 개발을 다시 시작하면서 처음으로 만든 프로젝트입니다. 리액트와 넥스트.js를 처음 사용해 만든 만큼 부족한 부분도 있지만, 최대한 리팩토링 없이 그대로 남겨두어 저의 성장 과정을 보여드리고 싶었습니다.",
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
        <span className="sr-only">scss 로고</span>
        {Svg("scss", 40, 40, "fill-[#CB6699]", false)}
      </>,
    ],
    keyFeatures: [
      "unsplash API 활용",
      "페이지 네이션 직접 구현",
      "API 요청 시 검색어를 cacheList 객체에 저장하여, 다음 요청 시 최적화를 위한 검증 작업 수행",
      "LocalStorage를 이용한 이미지 북마크 저장 기능 구현 ",
      "이미지 렌더링 전 블러 효과를 사용해 사용자 경험(UX) 향상",
    ],
    troubleshooting: [
      {
        trouble:
          "[문제] 북마크 페이지에서 북마크 해제시 화면 반영이 되지않던 문제",
        solution:
          "[해결] 북마크 해제시 로컬스토리지 데이터가 변경되어도 현재 화면에서 관리하는 로컬스토리지 데이터 상태가 최초 마운트시에만 셋팅되어 로컬스토리지가 변경되어도 화면 리렌더링이 발생하지 않고 모달창 또한 종료되지 않았습니다. useHeartToggle Hook에 하트버튼을 해제하는 상황에 작동할 콜백함수를 제공하고 해제시에 관리하던 로컬스토리지 상태를 변경하고 모달을 종료하는 로직을 추가하여 해결하였습니다.",
      },
    ],
    retrospect:
      "로컬스토리지를 사용할 때는 상태를 명확히 관리해야 합니다. 백엔드가 존재하는 경우, 특정 상황을 제외하고는 로컬스토리지 사용을 지양할 것입니다. 또한, 로컬스토리지는 반영구적으로 사용되는 데이터이므로 세션 종료 시 저장된 데이터를 제거할지 여부를 신중하게 고려해야 합니다.",
    viewsImage: [
      {
        url: "/gallery/thumbnail1.png",
        alt: "갤러리 웹 메인페이지 사진",
      },
      {
        url: "/gallery/thumbnail2.png",
        alt: "검색어로 검색한 이미지들의 사진",
      },
      {
        url: "/gallery/thumbnail3.png",
        alt: "리스트의 이미지를 클릭해서 모달이 나타난 사진",
      },
      {
        url: "/gallery/thumbnail4.png",
        alt: "북마크 페이지에 좋아요한 이미지들 사진",
      },
    ],
  },
];
