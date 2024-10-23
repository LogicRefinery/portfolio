"use client";
import Header from "@/_components/Header";
import { IoIosCall } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { BiSolidSchool } from "react-icons/bi";
import { IoSchoolOutline } from "react-icons/io5";
import { FaSquareGithub } from "react-icons/fa6";
import { SiVelog } from "react-icons/si";
import Image from "next/image";
import Link from "next/link";
import { createPortal } from "react-dom";
import Modal from "@/_components/Modal";
import { useEffect, useRef, useState } from "react";
import { SkillItem } from "@/_model/skills";
import PortfolioModal from "@/_components/PortfolioModal";
import { skills } from "@/_components/Skills";
import { portfolios } from "@/_components/Portfolios";
import { Portfolio } from "@/_model/portfolio";

import { shrikhand } from "@/_fonts/fonts";

type AnimationOption = [number, number, { start: number; end: number }?];

type AnimationKinds = {
  messageA_opacity_in?: AnimationOption;
  messageB_opacity_in?: AnimationOption;
  messageC_opacity_in?: AnimationOption;
  messageA_opacity_out?: AnimationOption;
  messageB_opacity_out?: AnimationOption;
  messageC_opacity_out?: AnimationOption;
  messageA_translateY_in?: AnimationOption;
  messageB_translateY_in?: AnimationOption;
  messageC_translateY_in?: AnimationOption;
  messageA_translateY_out?: AnimationOption;
  messageB_translateY_out?: AnimationOption;
  messageC_translateY_out?: AnimationOption;
};

type AnimationElements = Record<string, HTMLElement | null>;

type SectionInfo = {
  type: "sticky" | "normal";
  multiply: number; //뷰포트의 몇배 높이로 섹션 높이를 정할지 곱하는 수
  sectionHeight: number; //각 섹션의 임의로 정한 높이 ( 애니메이션이 진행될 스크롤 높이 )
  sectionElement: HTMLElement | null;
  animationElements: AnimationElements | null;
  animations: AnimationKinds;
};

const initialInfo: SectionInfo[] = [
  {
    type: "sticky",
    multiply: 5, //뷰포트의 몇배 높이로 섹션 높이를 정할지 곱하는 수
    sectionHeight: 0, //각 섹션의 임의로 정한 높이 ( 애니메이션이 진행될 스크롤 높이 )
    sectionElement: null,
    animationElements: null,
    animations: {
      messageA_opacity_in: [0, 1, { start: 0, end: 0.07 }],
      messageB_opacity_in: [0, 1, { start: 0.28, end: 0.35 }],
      messageC_opacity_in: [0, 1, { start: 0.56, end: 0.63 }],
      messageA_opacity_out: [1, 0, { start: 0.14, end: 0.21 }],
      messageB_opacity_out: [1, 0, { start: 0.42, end: 0.49 }],
      messageC_opacity_out: [1, 0, { start: 0.7, end: 0.77 }],
      messageA_translateY_in: [20, 0, { start: 0, end: 0.07 }],
      messageB_translateY_in: [20, 0, { start: 0.28, end: 0.35 }],
      messageC_translateY_in: [20, 0, { start: 0.56, end: 0.63 }],
      messageA_translateY_out: [0, -20, { start: 0.14, end: 0.21 }],
      messageB_translateY_out: [0, -20, { start: 0.42, end: 0.49 }],
      messageC_translateY_out: [0, -70, { start: 0.7, end: 1 }],
    },
  },
  {
    type: "normal",
    multiply: 5, //뷰포트의 몇배 높이로 섹션 높이를 정할지 곱하는 수
    sectionHeight: 0, //각 섹션의 임의로 정한 높이 ( 애니메이션이 진행될 스크롤 높이 )
    sectionElement: null,
    animationElements: null,
    animations: {},
  },
  {
    type: "normal",
    multiply: 5, //뷰포트의 몇배 높이로 섹션 높이를 정할지 곱하는 수
    sectionHeight: 0, //각 섹션의 임의로 정한 높이 ( 애니메이션이 진행될 스크롤 높이 )

    sectionElement: null,
    animationElements: null,
    animations: {},
  },
  {
    type: "normal",
    multiply: 5, //뷰포트의 몇배 높이로 섹션 높이를 정할지 곱하는 수
    sectionHeight: 0, //각 섹션의 임의로 정한 높이 ( 애니메이션이 진행될 스크롤 높이 )

    sectionElement: null,
    animationElements: null,
    animations: {},
  },
  {
    type: "normal",
    multiply: 5, //뷰포트의 몇배 높이로 섹션 높이를 정할지 곱하는 수
    sectionHeight: 0, //각 섹션의 임의로 정한 높이 ( 애니메이션이 진행될 스크롤 높이 )
    sectionElement: null,
    animationElements: null,
    animations: {},
  },
  {
    type: "sticky",
    multiply: 5, //뷰포트의 몇배 높이로 섹션 높이를 정할지 곱하는 수
    sectionHeight: 0, //각 섹션의 임의로 정한 높이 ( 애니메이션이 진행될 스크롤 높이 )
    sectionElement: null,
    animationElements: null,
    animations: {
      messageA_opacity_in: [0, 1, { start: 0, end: 0.07 }],
      messageB_opacity_in: [0, 1, { start: 0.28, end: 0.35 }],
      messageC_opacity_in: [0, 1, { start: 0.56, end: 0.63 }],
      messageA_opacity_out: [1, 0, { start: 0.14, end: 0.21 }],
      messageB_opacity_out: [1, 0, { start: 0.42, end: 0.49 }],
      messageC_opacity_out: [1, 0, { start: 0.7, end: 0.77 }],
      messageA_translateY_in: [20, 0, { start: 0, end: 0.07 }],
      messageB_translateY_in: [20, 0, { start: 0.28, end: 0.35 }],
      messageC_translateY_in: [20, 0, { start: 0.56, end: 0.63 }],
      messageA_translateY_out: [0, -20, { start: 0.14, end: 0.21 }],
      messageB_translateY_out: [0, -20, { start: 0.42, end: 0.49 }],
      messageC_translateY_out: [0, -70, { start: 0.7, end: 1 }],
    },
  },
];

export default function Home() {
  const article = useRef<HTMLElement | null>(null);
  const sectionInfo = useRef<SectionInfo[]>(initialInfo);
  const yOffset = useRef<number>(0); // 현재 스크롤의 높이
  const sumPrevSectionHeight = useRef<number>(0); // 지나간 섹션들의 높이의 합
  const activeSection = useRef<number>(0); // 현재 활성화된 섹션
  const [activeSectionClassName, setActiveSectionClassName] =
    useState<string>("showSection-0");
  const [hasScrollIconVisible, setHasScrollIconVisible] =
    useState<boolean>(true);

  const setSectionInfo = () => {
    const sections = article.current?.querySelectorAll(".appleSection"); // 모든 섹션 가져오기

    sectionInfo.current = sectionInfo.current.map((info, i) => {
      let sectionHeight: number;

      // 섹션 타입에 따라 높이 설정
      if (info.type === "sticky") {
        sectionHeight = info.multiply * window.innerHeight; // sticky 타입의 높이
      } else {
        const section = sections ? (sections[i] as HTMLElement) : null;
        sectionHeight = section ? section.scrollHeight : 0; // normal 타입은 요소의 실제 콘텐츠 높이 사용
      }

      const section = sections ? (sections[i] as HTMLElement) : null;
      let animationElements: AnimationElements | null = null;

      // 애니메이션 요소 설정
      if (i < 1 || i > 4) {
        if (sections) {
          section?.style.setProperty("height", `${sectionHeight}px`); // 이 줄을 제거하여 고정 높이 설정을 없앱니다.
          animationElements = {
            messageA: sections[i].querySelector(".main-message-a"),
            messageB: sections[i].querySelector(".main-message-b"),
            messageC: sections[i].querySelector(".main-message-c"),
          };
        }
      }

      return {
        ...info,
        animationElements,
        sectionElement: section,
        sectionHeight: sectionHeight,
      };
    });
  };

  const animationCalculator = (
    animation: AnimationOption | undefined,
    activeSectionScrollProgress: number
  ) => {
    let value = 0;
    const activeSectionScrollHeight =
      sectionInfo.current[activeSection.current].sectionHeight; // 현재 섹션의 전체 높이

    const scrollRatio = activeSectionScrollProgress / activeSectionScrollHeight; //현재 섹션에서 스크롤된 비율 ( 스크롤 된 높이 / 섹션 전체 높이 ) 0 ~ 1 사이의 소수점을 반환

    if (animation?.length === 3) {
      // start, end 사이 애니메이션 구현
      const startAnimationPixel =
        (animation[2]?.start as number) * activeSectionScrollHeight;

      const endAnimationPixel =
        (animation[2]?.end as number) * activeSectionScrollHeight;

      const animationFrame = endAnimationPixel - startAnimationPixel;

      if (
        activeSectionScrollProgress >= startAnimationPixel &&
        activeSectionScrollProgress <= endAnimationPixel
      ) {
        value =
          ((activeSectionScrollProgress - startAnimationPixel) /
            animationFrame) *
            (animation[1] - animation[0]) +
          animation[0];
      } else if (activeSectionScrollProgress <= startAnimationPixel) {
        value = animation[0];
      } else if (activeSectionScrollProgress >= endAnimationPixel) {
        value = animation[1];
      }
    } else {
      if (animation)
        value = scrollRatio * (animation[1] - animation[0]) + animation[0];
    }

    return value;
  };

  const animationPlayer = () => {
    const animationElements =
      sectionInfo.current[activeSection.current].animationElements; //애니메이션을 적용할 HTML 요소를 개진 객체

    const animation = sectionInfo.current[activeSection.current].animations; //적용할 애니메이션을 가진 객체

    const activeSectionScrollProgress =
      yOffset.current - sumPrevSectionHeight.current; //현재 섹션에서 스크롤된 높이 ( 전체 스크롤 - 지나간 섹션의 높이 ) 현재 섹션에서 몇 px 움직였는비 반환

    const activeSectionHeight =
      sectionInfo.current[activeSection.current].sectionHeight;

    const activeSectionScrollRatio =
      activeSectionScrollProgress / activeSectionHeight;

    switch (activeSection.current) {
      case 0:
        if (
          animationElements &&
          animationElements["messageA"] &&
          animationElements["messageB"] &&
          animationElements["messageC"]
        ) {
          if (activeSectionScrollRatio <= 0.1) {
            animationElements[
              "messageA"
            ].style.opacity = `${animationCalculator(
              animation.messageA_opacity_in,
              activeSectionScrollProgress
            )}`;
            animationElements[
              "messageA"
            ].style.transform = `translate3d(-50%,${animationCalculator(
              animation.messageA_translateY_in,
              activeSectionScrollProgress
            )}%,0)`;
          } else {
            animationElements[
              "messageA"
            ].style.opacity = `${animationCalculator(
              animation.messageA_opacity_out,
              activeSectionScrollProgress
            )}`;
            animationElements[
              "messageA"
            ].style.transform = `translate3d(-50%,${animationCalculator(
              animation.messageA_translateY_out,
              activeSectionScrollProgress
            )}%,0)`;
          }

          if (activeSectionScrollRatio <= 0.4) {
            animationElements[
              "messageB"
            ].style.opacity = `${animationCalculator(
              animation.messageB_opacity_in,
              activeSectionScrollProgress
            )}`;
            animationElements[
              "messageB"
            ].style.transform = `translate3d(-50%,${animationCalculator(
              animation.messageB_translateY_in,
              activeSectionScrollProgress
            )}%,0)`;
          } else {
            animationElements[
              "messageB"
            ].style.opacity = `${animationCalculator(
              animation.messageB_opacity_out,
              activeSectionScrollProgress
            )}`;
            animationElements[
              "messageB"
            ].style.transform = `translate3d(-50%,${animationCalculator(
              animation.messageB_translateY_out,
              activeSectionScrollProgress
            )}%,0)`;
          }

          if (activeSectionScrollRatio <= 0.66) {
            animationElements[
              "messageC"
            ].style.opacity = `${animationCalculator(
              animation.messageC_opacity_in,
              activeSectionScrollProgress
            )}`;
            animationElements[
              "messageC"
            ].style.transform = `translate3d(-50%,${animationCalculator(
              animation.messageC_translateY_in,
              activeSectionScrollProgress
            )}%,0)`;
            setHasScrollIconVisible(true);
          } else {
            animationElements[
              "messageC"
            ].style.transform = `translate3d(-50%,${animationCalculator(
              animation.messageC_translateY_out,
              activeSectionScrollProgress
            )}vh,0)`;

            setHasScrollIconVisible(false);
          }
        }

        break;
      case 1:
        break;
      case 2:
        break;
      case 3:
        break;
      case 4:
        if (
          sectionInfo.current[5].animationElements &&
          sectionInfo.current[5].animationElements["messageA"]
        ) {
          sectionInfo.current[5].animationElements["messageA"].style.opacity =
            "0";
        }
        break;
      case 5:
        if (
          animationElements &&
          animationElements["messageA"] &&
          animationElements["messageB"] &&
          animationElements["messageC"]
        ) {
          if (activeSectionScrollRatio <= 0.1) {
            animationElements[
              "messageA"
            ].style.opacity = `${animationCalculator(
              animation.messageA_opacity_in,
              activeSectionScrollProgress
            )}`;
            animationElements[
              "messageA"
            ].style.transform = `translate3d(-50%,${animationCalculator(
              animation.messageA_translateY_in,
              activeSectionScrollProgress
            )}%,0)`;
          } else {
            animationElements[
              "messageA"
            ].style.opacity = `${animationCalculator(
              animation.messageA_opacity_out,
              activeSectionScrollProgress
            )}`;

            animationElements[
              "messageA"
            ].style.transform = `translate3d(-50%,${animationCalculator(
              animation.messageA_translateY_out,
              activeSectionScrollProgress
            )}%,0)`;
          }

          if (activeSectionScrollRatio <= 0.4) {
            animationElements[
              "messageB"
            ].style.opacity = `${animationCalculator(
              animation.messageB_opacity_in,
              activeSectionScrollProgress
            )}`;
            animationElements[
              "messageB"
            ].style.transform = `translate3d(-50%,${animationCalculator(
              animation.messageB_translateY_in,
              activeSectionScrollProgress
            )}%,0)`;
          } else {
            animationElements[
              "messageB"
            ].style.opacity = `${animationCalculator(
              animation.messageB_opacity_out,
              activeSectionScrollProgress
            )}`;
            animationElements[
              "messageB"
            ].style.transform = `translate3d(-50%,${animationCalculator(
              animation.messageB_translateY_out,
              activeSectionScrollProgress
            )}%,0)`;
          }

          if (activeSectionScrollRatio <= 0.66) {
            animationElements[
              "messageC"
            ].style.opacity = `${animationCalculator(
              animation.messageC_opacity_in,
              activeSectionScrollProgress
            )}`;
            animationElements[
              "messageC"
            ].style.transform = `translate3d(-50%,${animationCalculator(
              animation.messageC_translateY_in,
              activeSectionScrollProgress
            )}%,0)`;
          } else {
            animationElements[
              "messageC"
            ].style.transform = `translate3d(-50%,${animationCalculator(
              animation.messageC_translateY_out,
              activeSectionScrollProgress
            )}%,0)`;
          }
        }
        break;

      default:
        break;
    }
  };

  const handleScroll = () => {
    yOffset.current = scrollY;
    sumPrevSectionHeight.current = 0;

    for (let i = 0; i < activeSection.current; i++) {
      //지니간 섹션의 합을 더하는 로직
      sumPrevSectionHeight.current += sectionInfo.current[i].sectionHeight;
    }

    const hasScrolledPastActiveSection =
      yOffset.current >
      sumPrevSectionHeight.current +
        sectionInfo.current[activeSection.current].sectionHeight;

    if (hasScrolledPastActiveSection) {
      //스크롤 할때마다 현재 스크롤의 높이가 지나간섹션 + 활성화된 섹션의 높이보다 커지면 활성화된 섹션 ++
      activeSection.current++;

      //활성화된 섹션 변경되면 article 클래스명 변경
      setActiveSectionClassName(`showSection-${activeSection.current}`);
    }

    if (yOffset.current < sumPrevSectionHeight.current) {
      if (activeSection.current === 0) return; // 0번 섹션에서 브라우저 바운스 효과로 -가 되는것을 방지
      //스크롤 할때마다 현재 스크롤의 높이가 지나간 섹션의 높이의 합보다 작하지면 활성화된 섹션 --
      activeSection.current--;

      //활성화된 섹션 변경되면 article 클래스명 변경
      setActiveSectionClassName(`showSection-${activeSection.current}`);
    }

    animationPlayer();
  };

  const handleResize = () => {
    setSectionInfo();
  };

  useEffect(() => {
    setSectionInfo();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [isSkillModalOpen, setIsSkillModalOpen] = useState<boolean>(false);
  const [isPortfolioModalOpen, setIsPortfolioModalOpen] =
    useState<boolean>(false);
  const [selectSkill, setSelectSkill] = useState<SkillItem | null>(null);
  const [selectPortfolio, setSelectPortfolio] = useState<Portfolio | null>(
    null
  );

  const portfolioModalController = (state: boolean) => {
    setIsPortfolioModalOpen(state);
  };

  const skillModalController = (state: boolean) => {
    setIsSkillModalOpen(state);
  };

  return (
    <div>
      <div>
        <Header activeSection={activeSection.current}></Header>
        <main>
          <article
            ref={article}
            className={`group/wrap ${activeSectionClassName}`}
          >
            <h3 className="sr-only">포트폴리오 메인 콘텐츠</h3>
            <section
              className="appleSection max-md:text-3xl max-xl:text-5xl text-7xl font-bold bg-orange-L3"
              data-id={"appleSection_0"}
              id="landing"
            >
              <div className="wrap w-[360px] px-5 md:w-[700px] xl:w-[1100px] mx-auto h-full">
                <h4 className="sr-only">인사말</h4>
                <div className="main-message-a fixed  w-full text-center left-1/2 top-1/2  -translate-y-1/2 opacity-0">
                  안녕하세요.
                </div>
                <div className="main-message-b fixed  w-full text-center left-1/2 top-1/2 -translate-y-1/2 opacity-0">
                  Frontend Developer
                </div>
                <div className="main-message-c fixed  w-full text-center left-1/2 top-1/2  -translate-y-1/2 opacity-0">
                  김태형의 포트폴리오 방문을 환영합니다.
                </div>
                <div
                  className={`fixed bottom-4 left-1/2 -translate-x-1/2 text-black  font-thin text-2xl flex flex-col justify-center items-center ${
                    hasScrollIconVisible ? "opacity-100" : "opacity-0"
                  } transition-all `}
                >
                  <div className="border-2 border-black rounded-full w-[30px] h-[50px]">
                    <div className="w-1 h-3 left-1/2 bg-black absolute top-2 rounded-full animate-scrollDown"></div>
                  </div>
                  <div className="tracking-widest text-xl">Scroll</div>
                </div>
              </div>
            </section>
            <section
              className="appleSection py-40"
              id="about"
              data-id={"appleSection_1"}
            >
              <div className="wrap w-[360px] px-5 md:w-[700px] xl:w-[1100px] mx-auto transition-all">
                <div className="mb-12 ">
                  <h4
                    className={`text-center text-7xl font-bold ${shrikhand.className} text-orange-L2 `}
                  >
                    About Me
                  </h4>
                  <p className="text-center text-3xl font-medium">
                    저에대해 알아보아요.
                  </p>
                </div>
                <div className="flex gap-4 mb-4 max-md:flex-col">
                  <div className="flex-1 bg-slate-200 relative aspect-[1] w-full h-full rounded-2xl overflow-hidden">
                    <Image
                      src={"/profile.png"}
                      alt="김태형 프로필사진"
                      fill
                      priority
                      sizes="(max-width: 768px) 50vw,(max-width: 1280px) 50vw, 33vw"
                    ></Image>
                  </div>
                  <div className="flex-1">
                    <ul className="flex flex-col justify-between h-full max-md: gap-4">
                      <li>
                        <p className=" text-orange-L3 font-bold text-sm flex items-start justify-center border-[1px] border-orange-L3 py-2 max-xl:text-xs max-xl:px-4">
                          ⭐️ 고용촉진 장려금 대상자 ( 중소기업의 경우 채용시
                          1년간 매월 60만원 임금 지원 )
                        </p>
                      </li>
                      <li>
                        <p className="text-3xl font-bold">Introduce.</p>
                        <p>
                          안녕하세요! <strong>도전정신</strong>과
                          <strong>꾸준함</strong>을 겸비한 프론트엔드 개발자
                          김태형입니다. <br />
                          지난 1년간, 선배 개발자가 이끄는 스터디 그룹에서
                          멘토링을 받으며 꾸준히 성장했습니다. 새로운
                          라이브러리와 프레임워크에 도전하는 과정은 저에게 큰
                          즐거움이었으며, 꾸준함의 중요성을 깊이 깨닫게
                          되었습니다. 이를 바탕으로 매일 한 걸음씩 발전하는
                          프론트엔드 개발자로 성장하고 있습니다. 또한, 이전
                          서비스직 근무 경험을 통해 커뮤니케이션 능력을
                          키웠습니다. 스터디 동료들과의 소통에서도 의견을
                          취합하고 정리하여, 모두가 쉽게 이해할 수 있도록
                          정리하는 역할을 하기도했습니다. 이러한 역량은 개발뿐만
                          아니라 팀 협업에서도 큰 강점이 될 것입니다.
                        </p>
                      </li>
                      <li>
                        <p className="text-3xl font-bold">Education.</p>
                        <div>
                          <ul>
                            <li className="flex items-center gap-2">
                              <IoSchoolOutline size={16} />
                              안산대학교 시각미디어디자인과 2012.03 - 2016.02 (
                              3.31 / 4.5 )
                            </li>
                            <li className="flex items-center gap-2">
                              <BiSolidSchool size={16} />
                              인천반도체고등학교 전산과 2009.03 - 2012.02
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <p className="text-3xl font-bold">Contact.</p>
                        <div>
                          <ul>
                            <li className="flex items-center gap-2">
                              <IoIosCall size={16} />
                              010-9520-2757
                            </li>
                            <li className="flex items-center gap-2">
                              <MdOutlineMail size={16} />
                              xoguddkenl@gmail.com
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <p className="text-3xl font-bold">Archiving.</p>
                        <div className="flex items-center gap-1">
                          <Link
                            href={"https://velog.io/@taehyung/posts"}
                            target="_blank"
                            style={{ color: "#23c99a" }}
                          >
                            <SiVelog size={50} />
                          </Link>
                          <Link
                            href={"https://github.com/LogicRefinery"}
                            target="_blank"
                          >
                            <FaSquareGithub size={55} />
                          </Link>
                          <p className="text-gray-400 text-sm ml-auto">
                            Update 2024.10.09
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            <section
              className="appleSection py-40 bg-orange-L1"
              id="career"
              data-id={"appleSection_2"}
            >
              <div className="wrap w-[360px] px-5 md:w-[700px] xl:w-[1100px] mx-auto transition-all">
                <div className="mb-12">
                  <h4
                    className={`text-center text-7xl font-bold ${shrikhand.className} text-orange-L2 `}
                  >
                    Career
                  </h4>
                  <p className="text-center text-3xl font-medium">
                    지금까지의 경력이에요.
                  </p>
                </div>
                <ul className="flex flex-col gap-4">
                  <li className="bg-white rounded-xl p-8 shadow-xl flex flex-col gap-4">
                    <p className="text-sm text-center text-apple-gray">
                      2020.12 - 2022.01
                    </p>
                    <p className="text-3xl font-bold text-center text-orange-L2">
                      (주)유니파이
                    </p>
                    <p className="text-center font-bold text-sm text-orange-L2 -mt-4">
                      # 개발팀 - 사원
                    </p>
                    <ul className="list-disc list-inside flex flex-col gap-2 font-bold text-apple-black">
                      <li>그누보드5 기반의 웹 사이트 유지보수</li>
                      <li>
                        자체 솔루션 ypage, ybuilder, 당근 유지보수 및 스킨개발
                      </li>
                      <li>
                        금 거래소 웹사이트 핵심 스킨 개발
                        <ul className="list-decimal list-inside pl-6 font-normal text-apple-gray">
                          <li>
                            당일 금 시세를 확인하고 게시판에 입력 index에 날짜별
                            표 형태로 노출하는 기능 ( 당시 금 시세 API가
                            존재하지 않아 사용자 직접입력 )
                          </li>
                          <li>입력된 시세 데이터베이스에 저장 및 소팅</li>
                          <li>입력된 시세 날짜별 조회 기능 </li>
                          <li>기간 선택 후 표형태 PDF 파일 출력 기능</li>
                        </ul>
                      </li>
                      <li>
                        네이버 블로그 게시글 키워드 검색 스킨 개발
                        <ul className="list-decimal list-inside pl-6 font-normal text-apple-gray">
                          <li>네이버 블로그 API 활용</li>
                          <li>
                            사용자가 입력한 키워드를 가진 블로그 게시글 날짜순
                            노출 기능
                          </li>
                          <li>모바일, 웹 각각 노출 갯수 설정 기능</li>
                        </ul>
                      </li>
                      <li>
                        index 페이지 노출형 토글 상담문의 스킨 개발
                        <ul className="list-decimal list-inside pl-6 font-normal text-apple-gray">
                          <li>LGU+ SMS API 활용</li>
                          <li>
                            index 페이지에 이름 전화번호등 유저가 입력하고
                            문의하기 버튼 클릭시 운영자에게 SMS 발송 기능
                          </li>
                        </ul>
                      </li>
                      <li>
                        index 페이지 노출형 청소견적 스킨 개발
                        <ul className="list-decimal list-inside pl-6 font-normal text-apple-gray">
                          <li>
                            주거형태, 평수, 청소형태 등 유저가 입력한 데이터를
                            연동된 게시판에 자동으로 작성되는 기능
                          </li>
                        </ul>
                      </li>
                      <li>
                        index 페이지 노출형 인피니티 롤링 배너 스킨 개발
                        <ul className="list-decimal list-inside pl-6 font-normal text-apple-gray">
                          <li>
                            운영자가 롤링 배너와 연동된 게시판에 이미지를 업로드
                            시 index 롤링 배너에 추가되는 기능
                          </li>
                        </ul>
                      </li>
                      <li>
                        반응형 통합문의 게시판 스킨 개발
                        <ul className="list-decimal list-inside pl-6 font-normal text-apple-gray">
                          <li>LGU+ SMS API 활용</li>
                          <li>
                            유저가 게시판에 문의글 작성시 제목, 내용 등
                            관련내용을 포함한 SMS를 관리자에게 발송하는 기능
                          </li>
                        </ul>
                      </li>
                    </ul>
                    <ul className="flex gap-2 py-4 text-3xl justify-center">
                      <li className="bg-white w-[50px] h-[50px] bg-[url('/logos.png')] bg-no-repeat bg-[-100px] border-[6px] border-white rounded-md box-content shadow-md">
                        <span className="sr-only">그누보드 로고</span>
                      </li>
                      <li className="bg-white w-[50px] h-[50px] bg-[url('/logos.png')] bg-no-repeat border-[6px] border-white rounded-md box-content bg-[2px] shadow-md">
                        <span className="sr-only">제이쿼리 로고</span>
                      </li>
                      <li className="bg-white w-[50px] h-[50px] bg-[url('/logos.png')] bg-no-repeat bg-[-50px] border-[6px] border-white rounded-md box-content shadow-md">
                        <span className="sr-only">PHP 로고</span>
                      </li>

                      <li className="bg-white w-[50px] h-[50px] bg-[url('/logos.png')] bg-no-repeat bg-[-150px] border-[6px] border-white rounded-md box-content shadow-md">
                        <span className="sr-only">mysql 로고</span>
                      </li>
                    </ul>
                  </li>
                  <li className="bg-white rounded-xl p-8 shadow-xl flex flex-col gap-4">
                    <p className="text-center text-xl font-bold text-orange-L2">
                      앞으로 이곳을 함께 채워나가고 싶어요.
                    </p>
                  </li>
                </ul>
              </div>
            </section>

            <section
              className="appleSection py-40"
              id="skills"
              data-id={"appleSection_3"}
            >
              <div className="wrap w-[360px]  px-5 md:w-[700px] xl:w-[1100px] mx-auto transition-all">
                <div className="mb-12">
                  <h4
                    className={`text-center text-7xl font-bold ${shrikhand.className} text-orange-L2 `}
                  >
                    Skills
                  </h4>
                  <p className="text-center text-3xl font-medium">
                    아이콘을 클릭하면 제가 알고있는 개념에 대해 상세히 알아볼 수
                    있어요.
                  </p>
                </div>
                <div>
                  <ul className="flex flex-wrap gap-4 justify-between">
                    {skills.map((skill) => (
                      <li
                        key={skill.title}
                        className="basis-[calc(25%-16px)] max-md:basis-[calc(50%-16px)] flex items-center justify-center"
                      >
                        <div
                          className="bg-apple-gray p-3 pt-[6px] rounded-[40px] hover:bg-orange-L2 group hover:scale-105 hover:-translate-y-2 transition-all cursor-pointer"
                          onClick={() => {
                            skillModalController(true);
                            setSelectSkill(skill);
                          }}
                        >
                          <div className="bg-white rounded-[20px] p-6">
                            {skill.icon}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                  {isSkillModalOpen &&
                    createPortal(
                      <Modal
                        selectSkill={selectSkill}
                        modalController={skillModalController}
                      />,

                      document.body
                    )}
                </div>
              </div>
            </section>
            <section
              className="appleSection py-40"
              id="projects"
              data-id={"appleSection_4"}
            >
              <div className="wrap w-[360px] px-5 md:w-[700px] xl:w-[1100px] mx-auto ">
                <div className="mb-12">
                  <h4
                    className={`text-center text-7xl font-bold ${shrikhand.className} text-orange-L2 `}
                  >
                    Projects
                  </h4>
                  <p className="text-center text-3xl font-medium">
                    프로젝트를 최신순으로 배치해보았어요.
                  </p>
                </div>
                <div>
                  <ul className="flex flex-wrap gap-4">
                    {portfolios.map((portfolio) => (
                      <li
                        key={portfolio.id}
                        className="basis-[calc(33%-8px)] max-md:basis-[calc(100%-8px)] pb-4 shadow-lg rounded-md overflow-hidden bg-orange-L3 relative h-[400px] flex flex-col justify-end flex-1 hover:-translate-y-4 hover:scale-105 transition-all group/portfolio"
                      >
                        <div className=" absolute left-0 top-0 w-full h-full bg-apple-black z-10 hidden bg-opacity-50 group-hover/portfolio:flex group-hover/portfolio:flex-col group-hover/portfolio:justify-center gap-4 text-white">
                          <div className="w-full">
                            <button
                              className="rounded-md w-1/2 py-2 px-4 block m-auto bg-orange-L3"
                              onClick={() => {
                                portfolioModalController(true);
                                setSelectPortfolio(portfolio);
                              }}
                            >
                              상세보기
                            </button>
                          </div>
                          <div className="w-full">
                            <Link
                              href={
                                "https://github.com/LogicRefinery/portfolio"
                              }
                              target="_blank"
                              className="rounded-md w-1/2 py-2 px-4 block m-auto bg-orange-L3  text-center"
                            >
                              github
                            </Link>
                          </div>
                        </div>
                        <div className=" absolute rounded-full overflow-hidden w-[200px] h-[200px] bg-white border-[6px] border-orange-L1 left-1/2 top-1/3 translate-x-[-50%] translate-y-[-50%] ">
                          <Image
                            src={portfolio.image.url}
                            alt={portfolio.image.alt}
                            fill
                            style={{ objectFit: "cover" }}
                            sizes="(max-width: 768px) 50vw,(max-width: 1280px) 50vw"
                          ></Image>
                        </div>
                        <div className="bg-white h-[calc(66.6%-16px)] p-4 flex justify-end flex-col gap-2">
                          <div className="font-bold">{portfolio.title}</div>

                          <div className="text-sm overflow-hidden text-ellipsis whitespace-nowrap">
                            {portfolio.description}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                  {isPortfolioModalOpen &&
                    createPortal(
                      <PortfolioModal
                        modalController={portfolioModalController}
                        selectPortfolio={selectPortfolio}
                      />,
                      document.body
                    )}
                </div>
              </div>
            </section>
            <section
              className="appleSection max-md:text-3xl max-xl:text-5xl text-7xl font-bold bg-orange-L3"
              id="takeOff"
              data-id={"appleSection_0"}
            >
              <div className="wrap w-[360px] md:w-[700px] xl:w-[1100px] mx-auto h-full">
                <h4 className="sr-only">인사말</h4>
                <div className="main-message-a fixed  w-full text-center left-1/2 top-1/2  -translate-y-1/2 opacity-0">
                  지금까지.
                </div>
                <div className="main-message-b fixed  w-full text-center left-1/2 top-1/2 -translate-y-1/2 opacity-0">
                  Frontend Developer
                </div>
                <div className="main-message-c fixed  w-full text-center left-1/2 top-1/2  -translate-y-1/2 opacity-0">
                  김태형이었습니다.
                </div>
              </div>
            </section>
          </article>
        </main>
        <footer></footer>
      </div>
    </div>
  );
}
