import { ReactNode } from "react";

// 개별 스킬에 대한 타입
export interface SkillDetail {
  title: string;
  description: string;
}

// 각 기술 스택(HTML, CSS, JS 등)의 타입
export interface SkillItem {
  title: string;
  icon: ReactNode; // JSX 아이콘을 사용하므로 ReactNode 타입을 사용
  skills?: SkillDetail[]; // 선택적으로 skills 배열이 있을 수 있음
}
