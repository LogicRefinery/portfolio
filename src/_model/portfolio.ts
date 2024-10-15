import { ReactNode } from "react";

export type Image = {
  url: string;
  description: string;
};

// Portfolio 타입 정의
export type Portfolio = {
  id: string;
  title: string; // 포트폴리오 제목
  description: string; // 설명
  workDuration: string; // 작업 기간
  image: Image; // 이미지 URL
  detailDescription: string;
  stack: ReactNode[]; // 스택 항목 배열
  keyFeatures: string; // 주요 기능
  troubleshooting: string; // 문제 해결
  viewsUrl: string[]; // 각 화면 사진 URL 배열
};
