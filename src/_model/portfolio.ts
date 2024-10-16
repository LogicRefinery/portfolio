import { ReactNode } from "react";

export type Image = {
  url: string;
  alt: string;
};

export type TroubleShooting = {
  trouble: string;
  solution: string;
};

export type Link = { github: string; deployment: string; pdf?: string };

// Portfolio 타입 정의
export type Portfolio = {
  id: string;
  title: string; // 포트폴리오 제목
  description: string; // 설명
  links: Link;
  workDuration: string; // 작업 기간
  image: Image; // 이미지 URL
  detailDescription: string;
  stack: ReactNode[]; // 스택 항목 배열
  keyFeatures: string[]; // 주요 기능
  troubleshooting: TroubleShooting[]; // 문제 해결
  retrospect: string; //회고
  viewsImage: Image[]; // 각 화면 사진 URL 배열
};
