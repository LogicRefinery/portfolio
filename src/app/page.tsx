import Header from "@/_components/Header";
import { TbWorldWww } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaJsSquare } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { RiSupabaseLine } from "react-icons/ri";
import { FaStarOfLife } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { BiSolidSchool } from "react-icons/bi";
import { IoSchoolOutline } from "react-icons/io5";
import { FaSquareGithub } from "react-icons/fa6";
import { SiStyledcomponents } from "react-icons/si";
import { SiReactquery } from "react-icons/si";
import { SiReacthookform } from "react-icons/si";
import { SiLodash } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { SiVelog } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiPrisma } from "react-icons/si";
import { shrikhand } from "@/_fonts/fonts";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>
        <Header></Header>
        <main>
          <article>
            <h3 className="sr-only">포트폴리오 메인 콘텐츠</h3>
            <section className="text-6xl font-bold bg-orange-L3">
              <div className="wrap w-[400px] md:w-[700px] xl:w-[1100px] mx-auto flex flex-col justify-center items-center h-[100vh] ">
                <h4 className="sr-only">인사말</h4>
                <div>안녕하세요.</div>
                <div>Frontend Developer</div>
                <div>김태형의 포트폴리오 방문을 환영합니다.</div>
              </div>
            </section>
            <section className="py-40">
              <div className="wrap w-[400px] md:w-[700px] xl:w-[1100px] mx-auto ">
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
                <div className="flex gap-x-4 mb-4">
                  <div className="flex-1 bg-slate-200 relative aspect-[1] w-full h-full rounded-2xl overflow-hidden">
                    <Image
                      src={"/profile.webp"}
                      alt="김태형 프로필사진"
                      fill
                    ></Image>
                  </div>
                  <div className="flex-1">
                    <ul className="flex flex-col justify-between h-full">
                      <li>
                        <p className=" text-orange-L3 font-bold text-center text-sm flex items-center justify-center border-[1px] border-orange-L3 py-2 ">
                          <FaStarOfLife /> &nbsp; 고용촉진 장려금 대상자 (
                          중소기업의 경우 채용시 1년간 매월 60만원 임금 지원 )
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
                        <p>
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
                        </p>
                      </li>
                      <li>
                        <p className="text-3xl font-bold">Contact.</p>
                        <p>
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
                        </p>
                      </li>
                      <li>
                        <p className="text-3xl font-bold">Archiving.</p>
                        <p className="flex items-center gap-1">
                          <Link
                            href={"https://velog.io/@taehyung/posts"}
                            target="_blink"
                            style={{ color: "#23c99a" }}
                          >
                            <SiVelog size={50} />
                          </Link>
                          <Link
                            href={"https://github.com/LogicRefinery"}
                            target="_blink"
                          >
                            <FaSquareGithub size={55} />
                          </Link>
                          <p className="text-gray-400 text-sm ml-auto">
                            Update 2024.10.09
                          </p>
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            <section className="py-40 bg-orange-L1">
              <div className="wrap w-[400px] md:w-[700px] xl:w-[1100px] mx-auto ">
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
                        <p className="pl-6 font-normal text-apple-gray">
                          <ul className="list-decimal list-inside">
                            <li>
                              당일 금 시세를 확인하고 게시판에 입력 index에
                              날짜별 표 형태로 노출하는 기능 ( 당시 금 시세
                              API가 존재하지 않아 사용자 직접입력 )
                            </li>
                            <li>입력된 시세 데이터베이스에 저장 및 소팅</li>
                            <li>입력된 시세 날짜별 조회 기능 </li>
                            <li>기간 선택 후 표형태 PDF 파일 출력 기능</li>
                          </ul>
                        </p>
                      </li>
                      <li>
                        네이버 블로그 게시글 키워드 검색 스킨 개발
                        <p className="pl-6 font-normal text-apple-gray">
                          <ul className="list-decimal list-inside">
                            <li>네이버 블로그 API 활용</li>
                            <li>
                              사용자가 입력한 키워드를 가진 블로그 게시글 날짜순
                              노출 기능
                            </li>
                            <li>모바일, 웹 각각 노출 갯수 설정 기능</li>
                          </ul>
                        </p>
                      </li>
                      <li>
                        index 페이지 노출형 토글 상담문의 스킨 개발
                        <p className="pl-6 font-normal text-apple-gray">
                          <ul className="list-decimal list-inside">
                            <li>LGU+ SMS API 활용</li>
                            <li>
                              index 페이지에 이름 전화번호등 유저가 입력하고
                              문의하기 버튼 클릭시 운영자에게 SMS 발송 기능
                            </li>
                          </ul>
                        </p>
                      </li>
                      <li>
                        index 페이지 노출형 청소견적 스킨 개발
                        <p className="pl-6 font-normal text-apple-gray">
                          <ul className="list-decimal list-inside">
                            <li>
                              주거형태, 평수, 청소형태 등 유저가 입력한 데이터를
                              연동된 게시판에 자동으로 작성되는 기능
                            </li>
                          </ul>
                        </p>
                      </li>
                      <li>
                        index 페이지 노출형 인피니티 롤링 배너 스킨 개발
                        <p className="pl-6 font-normal text-apple-gray">
                          <ul className="list-decimal list-inside">
                            <li>
                              운영자가 롤링 배너와 연동된 게시판에 이미지를
                              업로드 시 index 롤링 배너에 추가되는 기능
                            </li>
                          </ul>
                        </p>
                      </li>
                      <li>
                        반응형 통합문의 게시판 스킨 개발
                        <p className="pl-6 font-normal text-apple-gray">
                          <ul className="list-decimal list-inside">
                            <li>LGU+ SMS API 활용</li>
                            <li>
                              유저가 게시판에 문의글 작성시 제목, 내용 등
                              관련내용을 포함한 SMS를 관리자에게 발송하는 기능
                            </li>
                          </ul>
                        </p>
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
                    <div>
                      <p className="text-center text-xl font-bold text-orange-L2">
                        앞으로 이곳을 함께 채워나가고 싶어요.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </section>
            <section className="py-40">
              <div className="wrap w-[400px] md:w-[700px] xl:w-[1100px] mx-auto ">
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
                    <li className="basis-[calc(25%-16px)] flex items-center justify-center">
                      <div className="bg-gray-300 p-3 pt-[6px] rounded-[40px]">
                        <div className="bg-white rounded-[20px] p-6">
                          <TbWorldWww size={60} stroke="red"></TbWorldWww>
                        </div>
                      </div>
                    </li>
                    <li className="basis-[calc(25%-16px)] flex items-center justify-center">
                      <div className="bg-orange-L2 p-3 pt-[6px] rounded-[40px]">
                        <div className="bg-white rounded-[20px] p-6">
                          <FaHtml5 size={60}></FaHtml5>
                        </div>
                      </div>
                    </li>
                    <li className="basis-[calc(25%-16px)] flex items-center justify-center">
                      <div className="bg-orange-L2 p-3 pt-[6px] rounded-[40px]">
                        <div className="bg-white rounded-[20px] p-6">
                          <IoLogoCss3 size={60}></IoLogoCss3>
                        </div>
                      </div>
                    </li>
                    <li className="basis-[calc(25%-16px)] flex items-center justify-center">
                      <div className="bg-orange-L2 p-3 pt-[6px] rounded-[40px]">
                        <div className="bg-white rounded-[20px] p-6">
                          <FaJsSquare size={60}></FaJsSquare>
                        </div>
                      </div>
                    </li>
                    <li className="basis-[calc(25%-16px)] flex items-center justify-center">
                      <div className="bg-orange-L2 p-3 pt-[6px] rounded-[40px]">
                        <div className="bg-white rounded-[20px] p-6">
                          <BiLogoTypescript size={60}></BiLogoTypescript>
                        </div>
                      </div>
                    </li>
                    <li className="basis-[calc(25%-16px)] flex items-center justify-center">
                      <div className="bg-orange-L2 p-3 pt-[6px] rounded-[40px]">
                        <div className="bg-white rounded-[20px] p-6">
                          <FaReact size={60}></FaReact>
                        </div>
                      </div>
                    </li>
                    <li className="basis-[calc(25%-16px)] flex items-center justify-center">
                      <div className="bg-orange-L2 p-3 pt-[6px] rounded-[40px]">
                        <div className="bg-white rounded-[20px] p-6">
                          <RiNextjsFill size={60}></RiNextjsFill>
                        </div>
                      </div>
                    </li>
                    <li className="basis-[calc(25%-16px)] flex items-center justify-center">
                      <div className="bg-orange-L2 p-3 pt-[6px] rounded-[40px]">
                        <div className="bg-white rounded-[20px] p-6">
                          <RiSupabaseLine size={60}></RiSupabaseLine>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            <section className="py-40">
              <div className="wrap w-[400px] md:w-[700px] xl:w-[1100px] mx-auto ">
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
                    <li className="basis-[calc(33%-8px)] pb-4 shadow-lg rounded-md overflow-hidden bg-orange-L3 relative h-[500px] flex flex-col justify-end flex-1">
                      <div className=" absolute  rounded-full overflow-hidden w-[200px] h-[200px] bg-white border-[6px] border-orange-L3 left-1/2 top-1/3 translate-x-[-50%] translate-y-[-50%]">
                        <Image
                          src={"/thform.webp"}
                          alt="test"
                          fill
                          objectFit="cover"
                        ></Image>
                      </div>
                      <div className="bg-white h-[calc(66.6%-16px)] p-4 flex justify-end flex-col gap-2">
                        <div className="font-bold">공통 컴포넌트</div>
                        <div className="text-sm text-apple-gray mt-[-8px]">
                          2024.09.13 - 2024.09.15
                        </div>
                        <div className="text-sm">
                          Headless UI 패턴을 사용하여 재사용 가능한 셀렉트
                          박스를 구현했습니다.
                        </div>
                        <div>
                          <ul className="flex gap-2 py-4">
                            <li>
                              <RiNextjsFill size={40}></RiNextjsFill>
                            </li>
                            <li>
                              <BiLogoTypescript size={40}></BiLogoTypescript>
                            </li>
                            <li>
                              <SiPrisma size={40} />
                            </li>
                            <li>
                              <RiSupabaseLine size={40}></RiSupabaseLine>
                            </li>
                            <li>
                              <RiTailwindCssFill size={40}></RiTailwindCssFill>
                            </li>
                            <li>Context Api</li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className="basis-[calc(33%-8px)] pb-4 shadow-lg rounded-md overflow-hidden bg-orange-L3 relative h-[500px] flex flex-col justify-end flex-1">
                      <div className=" absolute  rounded-full overflow-hidden w-[200px] h-[200px] bg-white border-[6px] border-orange-L3 left-1/2 top-1/3 translate-x-[-50%] translate-y-[-50%]">
                        <Image
                          src={"/thform.webp"}
                          alt="test"
                          fill
                          objectFit="cover"
                        ></Image>
                      </div>
                      <div className="bg-white h-[calc(66.6%-16px)] p-4 flex justify-end flex-col gap-2">
                        <div className="font-bold">supatodo</div>
                        <div className="text-sm text-apple-gray mt-[-8px]">
                          2024.09.02 - 2024.09.10
                        </div>
                        <div className="text-sm">
                          supabase, prisma를 활용하여 회원가입 기능, 이메일 인증
                          기능, 데이터베이스 CRUD를 구현한 TODOLIST 입니다.
                        </div>
                        <div>
                          <ul className="flex gap-2 py-4">
                            <li>
                              <RiNextjsFill size={40}></RiNextjsFill>
                            </li>
                            <li>
                              <BiLogoTypescript size={40}></BiLogoTypescript>
                            </li>
                            <li>
                              <SiPrisma size={40} />
                            </li>
                            <li>
                              <RiSupabaseLine size={40}></RiSupabaseLine>
                            </li>
                            <li>
                              <RiTailwindCssFill size={40}></RiTailwindCssFill>
                            </li>
                            <li className="">Context Api</li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className="basis-[calc(33%-8px)] pb-4 shadow-lg rounded-md overflow-hidden bg-orange-L3 relative h-[500px] flex flex-col justify-end flex-1">
                      <div className=" absolute  rounded-full overflow-hidden w-[200px] h-[200px] bg-white border-[6px] border-orange-L3 left-1/2 top-1/3 translate-x-[-50%] translate-y-[-50%]">
                        <Image
                          src={"/thform.webp"}
                          alt="test"
                          fill
                          objectFit="cover"
                        ></Image>
                      </div>
                      <div className="bg-white h-[calc(66.6%-16px)] p-4 flex justify-end flex-col gap-2">
                        <div className="font-bold">THForm</div>
                        <div className="text-sm text-apple-gray mt-[-8px]">
                          2024.06.03 - 2024.06.06
                        </div>
                        <div className="text-sm">
                          설문조사 폼을 제작하고 배포하기위해 폼을 생성하는
                          웹사이트입니다. 주요 기능으로는 드래그앤 드롭 기능이
                          있습니다.
                        </div>
                        <div>
                          <ul className="flex gap-2 py-4">
                            <li>
                              <FaReact size={40}></FaReact>
                            </li>
                            <li>
                              <BiLogoTypescript size={40}></BiLogoTypescript>
                            </li>
                            <li>
                              <SiRedux size={40}></SiRedux>
                            </li>
                            <li>
                              <SiStyledcomponents
                                size={40}
                              ></SiStyledcomponents>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className="basis-[calc(33%-8px)] pb-4 shadow-lg rounded-md overflow-hidden bg-orange-L3 relative h-[500px] flex flex-col justify-end flex-1">
                      <div className=" absolute  rounded-full overflow-hidden w-[200px] h-[200px] bg-white border-[6px] border-orange-L3 left-1/2 top-1/3 translate-x-[-50%] translate-y-[-50%]">
                        <Image
                          src={"/thform.webp"}
                          alt="test"
                          fill
                          objectFit="cover"
                        ></Image>
                      </div>
                      <div className="bg-white h-[calc(66.6%-16px)] p-4 flex justify-end flex-col gap-2">
                        <div className="font-bold">THMall</div>
                        <div className="text-sm text-apple-gray mt-[-8px]">
                          2024.03.01 - 2024.03.31
                        </div>
                        <div className="text-sm">
                          어드민 사용자의 카테고리, 상품 CRUD 기능으로 등록된
                          상품을 사용자 페이지에서 확인할 수 있습니다.
                        </div>
                        <div>
                          <ul className="flex gap-2 py-4">
                            <li>
                              <RiNextjsFill size={40}></RiNextjsFill>
                            </li>
                            <li>
                              <BiLogoTypescript size={40}></BiLogoTypescript>
                            </li>
                            <li>
                              <SiReacthookform size={40}></SiReacthookform>
                            </li>
                            <li>
                              <SiLodash size={40}></SiLodash>
                            </li>
                            <li>
                              <SiReactquery size={40}></SiReactquery>
                            </li>
                            <li>
                              <FaSass size={40}></FaSass>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className="basis-[calc(33%-8px)] pb-4 shadow-lg rounded-md overflow-hidden bg-orange-L3 relative h-[500px] flex flex-col justify-end flex-1">
                      <div className=" absolute  rounded-full overflow-hidden w-[200px] h-[200px] bg-white border-[6px] border-orange-L3 left-1/2 top-1/3 translate-x-[-50%] translate-y-[-50%]">
                        <Image
                          src={"/thform.webp"}
                          alt="test"
                          fill
                          objectFit="cover"
                        ></Image>
                      </div>
                      <div className="bg-white h-[calc(66.6%-16px)] p-4 flex justify-end flex-col gap-2">
                        <div className="font-bold">THGallery</div>
                        <div className="text-sm text-apple-gray mt-[-8px]">
                          2024.04.23 - 2024.04.29
                        </div>
                        <div className="text-sm">
                          unsplash API를 활용하여 사진을 검색하는 기능과 페이징
                          기능 및 북마크 기능을 구현했습니다.
                        </div>
                        <div>
                          <ul className="flex gap-2 py-4">
                            <li>
                              <RiNextjsFill size={40}></RiNextjsFill>
                            </li>

                            <li>
                              <FaSass size={40}></FaSass>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            <section className="text-6xl font-bold bg-orange-L3">
              <div className="wrap w-[400px] md:w-[700px] xl:w-[1100px] mx-auto flex flex-col justify-center items-center h-[100vh] ">
                <h4 className="sr-only">인사말</h4>
                <div>지금까지.</div>
                <div>Frontend Developer</div>
                <div>김태형이었습니다. 감사합니다.</div>
              </div>
            </section>
          </article>
        </main>
        <footer></footer>
      </div>
    </div>
  );
}
