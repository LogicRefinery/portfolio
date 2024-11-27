import Link from "next/link";
import TopButton from "./components/top-button";
import { FaFilePdf, FaLink } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

export default function Home() {
  return (
    <>
      <main>
        <article>
          <h2 className="hidden">포트폴리오 설명</h2>

          <section className="pb-20">
            <div className="flex flex-col items-center pb-4 border-b-2 border-dashed">
              <h3 className="text-center text-3xl font-thin pb-2">About Me</h3>
              <p className="text-sm px-2 py-1 bg-[#1d1d1f] text-white rounded-md">
                고용촉진 장려금 대상자
                <span> ( 중소기업 채용시 1년간 매월 60만원 임금 지원 )</span>
              </p>
            </div>
            <div className="py-10 gap-8">
              <div>
                <p className="pb-2">
                  그누보드5 & 영카트 / Jquery / MySql 기반의 환경에서 유지보수와
                  스킨을 개발하며 1년차 프론트엔드 개발을 해왔습니다. <br />
                  이후 모던한 웹프론트엔드 개발을 시작하기 위해서 지난
                  14개월동안 치열하게 준비했습니다. <br />( Git, HTML, Css, Js,
                  React, Redux, Ts, Next, React-Query, Msw, Next api, Supabase
                  등 )
                </p>
                <p className="pb-2">
                  <span className="text-sm p-1 mr-1 bg-[#1d1d1f] text-white rounded-sm">
                    unsplash API를 활용한 갤러리 / E-Commerce / 풀스택
                    투두리스트
                  </span>
                  등의 프로젝트를 통해 컴포넌트 기반 설계와 사용자 경험을 고려한
                  개발 역량을 키울 수 있었습니다. 좋은 코드 가독성과 구조를
                  만들기 위해 계속 노력하고 있습니다.
                </p>
                <p className="pb-2">
                  어떤 팀에서도 빠르게 적응할 수 있는{" "}
                  <span className="text-sm p-1 mr-1 bg-[#1d1d1f] text-white rounded-sm">
                    유연성과 협업능력
                  </span>
                  을 가지고 있습니다. 정말 열심히 준비해왔습니다.{" "}
                  <span className="text-sm p-1 mr-1 bg-[#1d1d1f] text-white rounded-sm">
                    이제 일하고 싶습니다. 정말 열심히 일 하고 싶습니다.{" "}
                  </span>
                  지속적으로 성장하며, 팀에 헌신적으로 기여하고, 사용자에게 가치
                  있는 제품을 만드는 것을 목표로 하고 있습니다. 함께 나아갈 팀을
                  만나길 고대하고 있습니다. 감사합니다.
                </p>
              </div>
            </div>
          </section>

          <section className="pb-20">
            <div className="flex flex-col items-center pb-4 border-b-2 border-dashed">
              <h3 className="text-center text-3xl font-thin pb-2">Skills</h3>
            </div>
            <div className="py-10">
              <ul className="flex flex-col gap-10">
                <li className="flex gap-8 max-md:flex-col">
                  <div className="text-2xl font-semibold basis-1/4 max-md:text-center">
                    Frontend
                  </div>
                  <ul className="list-disc list-inside space-y-1 basis-3/4">
                    <li>HTML</li>
                    <li>CSS ( SCSS, StyledComponents, Tailwind ) </li>
                    <li>JavaScript ( ES6 ~ )</li>
                    <li>TypeScript</li>
                    <li>
                      React ( Context API, Redux, React Query, React Hook Form
                      ... )
                    </li>
                    <li>Next ( App Router )</li>
                  </ul>
                </li>
                <li className="flex gap-8 max-md:flex-col">
                  <div className="text-2xl font-semibold basis-1/4 max-md:text-center">
                    Backend
                  </div>
                  <ul className="list-disc list-inside space-y-1 basis-3/4">
                    <li>Prisma</li>
                    <li>Supabase</li>
                  </ul>
                </li>
              </ul>
            </div>
          </section>

          <section className="pb-20">
            <div className="flex flex-col items-center pb-4 border-b-2 border-dashed">
              <h3 className="text-center text-3xl font-thin pb-2">Projects</h3>
            </div>
            <div className="py-10">
              <ul className="flex flex-col gap-20">
                <li className="flex gap-8 max-md:flex-col">
                  <div className="text-2xl font-semibold basis-1/4 max-md:text-center">
                    <span className="text-sm p-1 mr-1 bg-[#1d1d1f] text-white rounded-sm">
                      풀스택 투두리스트
                    </span>
                    <p>Supatodo</p>
                    <ul className="font-thin text-base break-all">
                      <li>2024.09.02 ~ 2024.09.10 ( 1인 )</li>
                      <li>Next, TS, Prisma, Supabase, Tailwind, Context API</li>
                      <li className="flex max-md:justify-center items-center gap-4 py-4">
                        <Link
                          href={"https://www.logicrefinery.co.kr/"}
                          target="_blank"
                        >
                          <FaLink size={30}></FaLink>
                        </Link>
                        <Link
                          href={"https://github.com/LogicRefinery/supatodo"}
                          target="_blank"
                        >
                          <FaSquareGithub size={38}></FaSquareGithub>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col gap-10 basis-3/4">
                    <div>
                      <div className="text-sm px-2 py-1 text-center italic">
                        주요기능
                      </div>
                      <ul className="list-disc list-inside space-y-1 ">
                        <li>Headless UI를 활용한 컴포넌트 설계</li>
                        <li>Supabase 로그인, 회원가입 기능 활용</li>
                        <li>
                          회원가입 매직링크 인증메일 서비스 연동 ( 메일 DNS 설정
                          )
                        </li>
                        <li>Resend 메일링 서비스 활용</li>
                        <li>
                          Context API를 활용한 투두리스트, 유저 정보 전역
                          상태관리
                        </li>
                        <li>Next Api Routes를 활용하여 rest api 설계</li>
                        <li>Prisma를 활용하여 DB 호출</li>
                        <li>API 컨트롤러와 서비스로직 분리 (관심사 분리)</li>
                      </ul>
                    </div>
                    <div>
                      <div className="text-sm px-2 py-1 text-center italic">
                        트러블슈팅
                      </div>
                      <ul className="list-disc list-inside space-y-1">
                        <li>
                          <span className="text-sm p-1 mr-1 bg-[#1d1d1f] text-white rounded-sm">
                            [문제]
                          </span>
                          인증 메일 발송 오류 - 회원가입 중 첫 번째 인증 메일
                          발송은 성공했지만, 이후 다른 이메일로 가입을 시도할 때
                          인증 메일 발송에 실패했다는 오류가 반복적으로
                          발생했습니다.
                        </li>
                        <li>
                          <span className="text-sm p-1 mr-1 bg-[#1d1d1f] text-white rounded-sm">
                            [해결]
                          </span>
                          Supabase의 무료 플랜에서는 1시간에 3회의 메일 발송
                          제한이 있다는 것을 공식 문서를 통해 확인했습니다. 이
                          제한 때문에 개발과 실제 서비스에서는 메일 발송이
                          부족하다고 판단하여 Resend 메일링 서비스를
                          도입했습니다. 도메인을 구입하고 Resend와 연동한 후,
                          이를 다시 Supabase와 연결하여 메일 발송 문제를
                          해결했습니다.
                        </li>

                        <li>
                          <span className="text-sm p-1 mr-1 bg-[#1d1d1f] text-white rounded-sm">
                            [문제]
                          </span>
                          데이터 로딩 지연 - 로그인 성공 후, 버셀 배포환경에서
                          수파베이스의 데이터를 조회하고 응답해주는데 과도한
                          시간이 걸리는 문제가 있습니다.
                        </li>

                        <li>
                          <span className="text-sm p-1 mr-1 bg-[#1d1d1f] text-white rounded-sm">
                            [해결]
                          </span>
                          데이터 로딩 지연 - 사용자의 경험을 향상시키고 이탈률을
                          줄이기위해 스켈레톤 UI를 도입할 예정입니다.
                        </li>

                        <li>
                          <span className="text-sm p-1 mr-1 bg-[#1d1d1f] text-white rounded-sm">
                            [문제]
                          </span>
                          응답 지연 - 투두리스트를 사용하는 중에 생성, 수정,
                          삭제에대한 버셀 배포환경의 응답 지연이슈
                        </li>

                        <li>
                          <span className="text-sm p-1 mr-1 bg-[#1d1d1f] text-white rounded-sm">
                            [해결]
                          </span>
                          응답 지연 - 해결하기 위해 리액트 쿼리(React Query)를
                          활용하여 낙관적 업데이트를 적용할 예정입니다. 낙관적
                          업데이트는 서버에서 데이터가 성공적으로 업데이트되기를
                          예상하고, 사용자가 즉시 변경된 데이터를 볼 수 있도록
                          하여 사용자 경험을 향상시키는 방법입니다. 이를 통해
                          사용자 인터페이스가 더욱 빠르게 반응할 수 있도록
                          개선할 계획입니다.
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col gap-5">
                      <div className="text-sm px-2 py-1 text-center italic">
                        회고
                      </div>
                      <div>
                        <div className="font-bold mb-4">좋았던 점</div>
                        <ul className="list-inside list-disc flex flex-col gap-2">
                          <li>
                            <span className="text-sm p-1 mr-1 bg-[#1d1d1f] text-white rounded-sm">
                              [메일링 서비스 사용해보기]
                            </span>
                            도메인을 구매하고 DNS 설정을 통해 Supabase의 SMTP를
                            커스텀하여 사용한 경험이 인상 깊었습니다. 실제로
                            도메인을 활용해보면서 Resend 메일링 서비스를
                            도입하여 메일 템플릿을 지정하거나 발송 로그를
                            확인하는 기능들을 익힐 수 있었습니다.
                          </li>
                          <li>
                            <span className="text-sm p-1 mr-1 bg-[#1d1d1f] text-white rounded-sm">
                              [백엔드 컨트롤러와 서비스로직에 대한 이해]
                            </span>
                            이 프로젝트를 진행하며 백엔드 구성과 관련된 여러
                            개념들을 깊이 이해하게 되었습니다. 특히 백엔드에서
                            컨트롤러와 서비스 로직, 레이어로 나누는 구조에 대해
                            배웠습니다. 컨트롤러는 주로 HTTP 요청을 받아 적절한
                            서비스 로직으로 전달하는 역할을 하고, 서비스 로직은
                            실제 비즈니스 로직을 처리하는 핵심 부분입니다. 이 두
                            가지를 명확하게 분리함으로써 코드의 유지보수성과
                            확장성을 크게 향상시킬 수 있다는 것을 깨달았습니다.
                          </li>
                          <li>
                            <span className="text-sm p-1 mr-1 bg-[#1d1d1f] text-white rounded-sm">
                              [데이터베이스와 ORM에 대한 이해]
                            </span>
                            데이터베이스와의 연동에서 ORM(Object-Relational
                            Mapping)을 사용하면서 데이터베이스와 객체 간의
                            변환을 자동으로 처리해주는 장점이 있었습니다. 이를
                            통해 SQL 쿼리 작성이 간편해지고, 개발 속도를 높일 수
                            있었지만, ORM의 사용에 따른 한계와 성능 최적화가
                            중요한 부분임을 느끼기도 했습니다.
                          </li>
                          <li>
                            <span className="text-sm p-1 mr-1 bg-[#1d1d1f] text-white rounded-sm">
                              [무료 플랜의 한계]
                            </span>
                            Supabase를 사용하면서 무료 플랜의 한계도
                            경험했습니다. 실무에서는 더 많은 기능과 확장성을
                            제공하는 유료 플랜이 필요할 수 있다는 점을 느꼈고,
                            이러한 서비스의 선택이 웹 애플리케이션의 성능과
                            확장성에 얼마나 큰 영향을 미칠 수 있는지를 실감하게
                            되었습니다. 이러한 경험들을 통해 웹 애플리케이션
                            개발에서 프론트엔드와 백엔드의 차이점과 연관성을
                            명확히 이해하고, 시스템의 전체적인 흐름을 설계하는
                            데 있어 중요한 기초를 다질 수 있었습니다.
                          </li>
                        </ul>
                      </div>
                      <div>
                        <div className="font-bold mb-4">부족했던 점</div>
                        <ul className="list-inside list-disc flex flex-col gap-2">
                          <li>
                            <span className="text-sm p-1 mr-1 bg-[#1d1d1f] text-white rounded-sm">
                              [사용자에 대한 고려]
                            </span>
                            처음 DNS와 메일링서비스 그리고 데이터베이스를
                            연동하면서 해당 문제 해결에만 신경을 쓴 나머지 버셀
                            배포의 응답속도와 같은 부분을 놓친점이 아쉬웠습니다.
                          </li>
                          <li>
                            <span className="text-sm p-1 mr-1 bg-[#1d1d1f] text-white rounded-sm">
                              [과거의 스택을 망각]
                            </span>
                            처음 리액트를 접했을 때 Context API를 사용하여
                            전역상태 관리를 해본 경험이 있었으나 그 이후 Redux와
                            같은 라이브러리를 알게 되면서 Context API를 사용하지
                            않게 되다보니 사용 방법을 잊어버린 경험을 했습니다.
                          </li>
                        </ul>
                      </div>
                      <div>
                        <div className="font-bold mb-4">
                          부족했던 점을 개선하기 위한 방법
                        </div>
                        <ul className="list-inside list-disc flex flex-col gap-2">
                          <li>
                            <span className="text-sm p-1 mr-1 bg-[#1d1d1f] text-white rounded-sm">
                              [기능구현에만 급급하지 않기]
                            </span>
                            프로젝트를 진행할 때, 기능을 구현하는 데만
                            집중하기보다 전체적인 사용자 경험(UX)을 함께
                            고려해야 합니다. 이를 위해 요구사항 정리 단계에서
                            성능 최적화나 응답 속도 같은 핵심 요소를 미리
                            점검하고, 배포 후에도 지속적으로 검토하는 프로세스를
                            마련하는 것이 중요합니다.
                          </li>
                          <li>
                            <span className="text-sm p-1 mr-1 bg-[#1d1d1f] text-white rounded-sm">
                              [꾸준히 공부하고 비교하기]
                            </span>
                            프로젝트나 업무에서 특정 기술을 사용하지 않더라도,
                            주기적으로 기존에 학습한 기술을 복습하는 시간을
                            가지는 것이 좋다고 생각합니다. 예를들어, Redux와
                            같은 새로운 상태 관리 라이브러리를 도입했더라도,
                            Context API와의 장단점을 비교하면서 각 기술의 사용
                            사례를 정리해보는 것이 좋습니다.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="flex gap-8 max-md:flex-col">
                  <div className="text-2xl font-semibold  basis-1/4 max-md:text-center">
                    <span className="text-sm p-1 mr-1 bg-[#1d1d1f] text-white rounded-sm">
                      E-Commerce
                    </span>
                    <p>THMall</p>
                    <ul className="font-thin text-base break-all">
                      <li>2024.03.05 ~ 2024.04.23 ( 1인 )</li>
                      <li>
                        Next, TS, Lodash, React-Query, SCSS, React Hook Form
                      </li>
                      <li className="flex max-md:justify-center items-center gap-4 py-4">
                        <Link
                          href={"https://todayhouse.vercel.app/"}
                          target="_blank"
                        >
                          <FaLink size={30}></FaLink>
                        </Link>

                        <Link
                          href={"https://github.com/LogicRefinery/todayhouse"}
                          target="_blank"
                        >
                          <FaSquareGithub size={38}></FaSquareGithub>
                        </Link>
                        <Link
                          href={
                            "https://drive.google.com/file/d/1j-LlDiA0Es4ZDJrz7UpzG8cLoTMcAG3j/view"
                          }
                          target="_blank"
                        >
                          <FaFilePdf size={34}></FaFilePdf>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col gap-10  basis-3/4">
                    <div>
                      <div className="text-sm px-2 py-1 text-center italic">
                        주요기능
                      </div>
                      <ul className="list-disc list-inside space-y-1 ">
                        <li>어드민 사이드 카테고리 CRUD, 상품 CRUD 구현</li>
                        <li>
                          유저 사이드 상품 리스트 형태 노출, 카테고리별 상품
                          노출, 상품 상세 페이지 구현
                        </li>
                        <li>
                          ReactQuery를 통한 API 요청 최적화 및 Optimistic Update
                          구현
                        </li>
                        <li>
                          Lodash를 사용하여 검색어 디바운싱 구현, API 요청
                          최적화
                        </li>
                        <li>
                          React Hook Form을 활용하여 비제어 컴포넌트 Form 구현,
                          리렌더링 최적화
                        </li>

                        <li>
                          Image Compressor 라이브러리를 사용한 이미지 압축,
                          이미지 최적화
                        </li>
                        <li>MSW를 활용하여 API 엔드포인트 구현</li>
                        <li>
                          DB 대용으로 로컬스토리지를 사용하기 위해 이미지 BASE64
                          인코딩 및 디코딩 구현
                        </li>
                      </ul>
                    </div>
                    <div>
                      <div className="text-sm px-2 py-1 text-center italic">
                        트러블슈팅
                      </div>
                      <ul className="list-disc list-inside space-y-1">
                        <li>
                          <span className="text-sm p-1 mr-1 bg-[#1d1d1f] text-white rounded-sm">
                            [문제]
                          </span>
                          최초 웹 접근 시 MSW import가 제대로 작동하지 않는 이슈
                        </li>
                        <li>
                          <span className="text-sm p-1 mr-1 bg-[#1d1d1f] text-white rounded-sm">
                            [해결]
                          </span>
                          MSW 라이브러리를 Next.js 14 App Router에서 사용하는
                          과정에서, 브라우저의 서비스 워커가 제대로 작동하지
                          않는 문제가 있었습니다. 여러 레퍼런스에서 Next.js와
                          MSW가 잘 맞지 않는다고 했지만, 도전 의식이 생겨 끌까지
                          해결을 시도했습니다.
                        </li>
                        <li>
                          <span className="text-sm p-1 mr-1 bg-[#1d1d1f] text-white rounded-sm">
                            [해결]
                          </span>
                          서비스 워커를 올바르게 작동시키기 위해 브라우저가
                          준비되는 즉시 비동기로 임포트하는 방식을 채택했고,
                          사용자 경험을 저해하지 않기 위해 로딩 스피너를 적용해
                          문제를 해결했습니다.
                        </li>

                        <li>
                          MSW Issue 링크:
                          <Link
                            href={"https://github.com/mswjs/msw/issues/1644"}
                            target="_blank"
                          >
                            https://github.com/mswjs/msw/issues/1644
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col gap-5">
                      <div className="text-sm px-2 py-1 text-center italic">
                        회고
                      </div>
                      <div>
                        <div className="font-bold mb-4">좋았던 점</div>
                        <ul className="list-inside list-disc flex flex-col gap-2">
                          <li>
                            <span className="text-sm p-1 mr-1 bg-[#1d1d1f] text-white rounded-sm">
                              [포기하지 않고 문제 해결하기]
                            </span>
                            MSW와 Next.js 간의 호환성 문제를 해결하기 위해 몇 날
                            며칠을 구글링하며 노력했습니다. 혼자서는 어려운
                            부분도 있었지만, 선배 개발자의 도움을 받아 문제를
                            해결해 나가는 과정이 매우 인상 깊었습니다. 이를 통해
                            더 나은 개발자가 되어야겠다는 다짐을 했습니다.
                          </li>
                          <li>
                            <span className="text-sm p-1 mr-1 bg-[#1d1d1f] text-white rounded-sm">
                              [유저사이드와 어드민사이드의 이해]
                            </span>
                            유저사이드와 어드민사이드를 분리하여 프로젝트를
                            제작하는 과정에서 E-Commerce 웹의 구조를 이해하고 더
                            나아가 로그인 기능이 있었다면 접근제어를 통해 인증,
                            인가 된 유저만 특정 페이지에 접근이 가능하게 하거나
                            특정 기능을 사용할 수 있도록 하는 방식을 머릿속에
                            떠올릴 수 있어 좋았습니다.
                          </li>
                          <li>
                            <span className="text-sm p-1 mr-1 bg-[#1d1d1f] text-white rounded-sm">
                              [ReactQuery 도입]
                            </span>
                            ReactQuery를 도입하여 프로젝트의 API 요청을
                            캐시하고, 최적화하며 또한 낙관적업데이트를 통해
                            사용자 친화적인 비즈니스 임팩트를 낼 수 있었다는
                            점이 좋았고 서버 상태와 클라이언트 상태를 분리하여
                            관리 할 수 있다는 점이 매우 흥미로웠습니다.
                          </li>
                          <li>
                            <span className="text-sm p-1 mr-1 bg-[#1d1d1f] text-white rounded-sm">
                              [백엔드 API 없이 프론트엔드 개발이 가능한 방법
                              이해]
                            </span>
                            일반적으로 백엔드 API가 준비되지 않으면 프론트엔드
                            개발에 차질이 생기지만, MSW를 통해 API 요청을
                            브라우저의 서비스 워커에서 처리하며 프론트엔드와
                            백엔드 개발을 동시에 진행할 수 있었습니다. 이를 통해
                            서비스 개발 과정에서 발생할 문제를 미리 검토하고
                            해결할 수 있는 방법에 대해 공부한것이 좋았습니다.
                          </li>
                          <li>
                            <span className="text-sm p-1 mr-1 bg-[#1d1d1f] text-white rounded-sm">
                              [서버에게 작은 데이터를 넘겨주는 방법 이해]
                            </span>
                            이미지는 웹에서 다룰 수 있는 데이터 중 부담이 될 수
                            있는 데이터입니다. 이미지를 다루는 방식에따라
                            클라이언트 렌더링 속도와 서버의 부담을 컨트롤 할 수
                            있다고 생각합니다. 이 프로젝트에서 이미지를
                            로컬스토리지에 저장하는 방식을 채택했습니다.
                            로컬스토리지 용량이 5MB로 제한되다 보니 압축하지
                            않은 이미지를 저장한다면 1장밖에 처리할 수 없는
                            상황이 발생할 수 있었습니다. 이를 해결하기 위해
                            이미지 압축 라이브러리를 활용했고 결과적으로
                            여러장의 이미지를 저장할 수 있었습니다. 이 과정을
                            통해 데이터를 효율적으로 관리하는 방법에 대해 깊이
                            고민하게 되었고, 서버와 통신에서도 작은 데이터를
                            전달하는 방법이 서버 부하를 줄이므로 비즈니스
                            임팩트를 낼 수 있다는 점을 깨달을 수 있었습니다.
                          </li>
                          <li>
                            <span className="text-sm p-1 mr-1 bg-[#1d1d1f] text-white rounded-sm">
                              [다양한 기술을 통한 비즈니스 임팩트 발휘]
                            </span>
                            E-commerce 프로젝트를 선택한 이유는 프론트엔드
                            개발자로서 비즈니스 임팩트를 보여줄 수 있는
                            서비스라고 생각했기 때문입니다. 프로젝를 진행하면서
                            Lodash 라이브러리를 통하여 검색어가 입력되는 동안
                            API 요청을 최적화하는 것과 React-Hook-Form
                            라이브러리를 통하여 입력 폼의 렌더링을 최적화하는 등
                            프론트엔드 개발자가 서비스를 개발하며 신경써야 하는
                            부분들에 대해 더 잘 이해할 수 있었던점이 좋았습니다.
                          </li>
                        </ul>
                      </div>
                      <div>
                        <div className="font-bold mb-4">부족했던 점</div>
                        <ul className="list-inside list-disc flex flex-col gap-2">
                          <li>
                            <span className="text-sm p-1 mr-1 bg-[#1d1d1f] text-white rounded-sm">
                              [비동기에 대한 이해]
                            </span>
                            이미지를 BASE64로 인코딩, 디코딩 하는 과정에서
                            FileReader 객체가 비동기로 작동한다는 사실을 모른채
                            비즈니스 로직을 구현하던 중 원하는 결과를 얻지 못한
                            경험이 있습니다. 구글링을 통하여 해당 객체가
                            비동기로 작동한다는 사실을 알게되었고 잘 해결할 수
                            있었습니다. 아직 브라우저 API의 어떤 종류가 비동기로
                            작동하는지 잘 알지 못했던 부분이 아쉬웠고 경험이
                            많이 부족하다는것을 깨닫게 되었습니다.
                          </li>
                          <li>
                            <span className="text-sm p-1 mr-1 bg-[#1d1d1f] text-white rounded-sm">
                              [에러의 원리를 파악하지 못했던 점 MSW, 비동기
                              이슈등]
                            </span>
                            MSW 임포트 문제를 해결하기위한 접근 방식과
                            FileReader를 사용하는 과정에서 비동기로 작동하는
                            코드의 에러를 실제로 마주했을 때 당황하여 에러의
                            본질을 파악하지 못하고 해결하는데에 많은 시간을
                            사용했기 때문에 아쉬웠습니다.
                          </li>
                        </ul>
                      </div>
                      <div>
                        <div className="font-bold mb-4">
                          부족했던 점을 개선하기 위한 방법
                        </div>
                        <ul className="list-inside list-disc flex flex-col gap-2">
                          <li>
                            <span className="text-sm p-1 mr-1 bg-[#1d1d1f] text-white rounded-sm">
                              [비동기 경험 많이 쌓기]
                            </span>
                            비동기 코드의 원리는 잘 알고있으나 실제로 로직에서
                            만났을 때 당황하는 경우가 있기에 여러겹으로 중첩된
                            비동기 코드를 만들어보고 그 결과를 확인하며 비동기
                            관련 경험을 쌓는 방향으로 나아갈 생각입니다.
                          </li>
                          <li>
                            <span className="text-sm p-1 mr-1 bg-[#1d1d1f] text-white rounded-sm">
                              [에러의 본질을 파악하는 방법]
                            </span>
                            에러를 잡아내고 고치는 방향은 다양한 방법이 있을거라
                            생각합니다. 코드를 하나하나 따라가보는 방법도 있고
                            잠시 손을 멈추고 생각을 정리하는것도 하나의
                            방법입니다. 에러가 발생했던 당시엔
                            {"빨리 해결해야지"}
                            라는 생각에 구글링을하고 마음이 조급했던 경험을
                            했습니다. 조급한 마음을 다잡고 한걸음 떨어져서
                            원리를 생각하고 차분히 에러를 탐색하는 방법을
                            사용하려 합니다.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="flex gap-8 max-md:flex-col">
                  <div className="text-2xl font-semibold  basis-1/4 max-md:text-center">
                    <span className="text-sm p-1 mr-1 bg-[#1d1d1f] text-white rounded-sm">
                      unsplash API를 활용한 갤러리
                    </span>
                    <p>THGallery</p>
                    <ul className="font-thin text-base break-all">
                      <li>2024.02.20. - 2024.02.29 ( 1인 )</li>
                      <li>Next, TS, SCSS</li>
                      <li className="flex max-md:justify-center items-center gap-4 py-4">
                        <Link
                          href={"https://th-gallery-rose.vercel.app/"}
                          target="_blank"
                        >
                          <FaLink size={30}></FaLink>
                        </Link>
                        <Link
                          href={"https://github.com/LogicRefinery/THGallery"}
                          target="_blank"
                        >
                          <FaSquareGithub size={38}></FaSquareGithub>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col gap-10  basis-3/4">
                    <div>
                      <div className="text-sm px-2 py-1 text-center italic">
                        주요기능
                      </div>
                      <ul className="list-disc list-inside space-y-1 ">
                        <li>Unsplash API 활용</li>
                        <li>페이지 네이션 구현</li>
                        <li>
                          API 요청 시 검색어를 cacheList 객체에 저장하여, 다음
                          요청 시 최적화를 위한 검증 작업 수행
                        </li>
                        <li>
                          LocalStorage를 이용한 이미지 북마크 저장 기능 구현
                        </li>
                        <li>
                          이미지 렌더링 전 블러 효과를 사용해 사용자 경험 향상
                        </li>
                      </ul>
                    </div>
                    <div>
                      <div className="text-sm px-2 py-1 text-center italic">
                        트러블슈팅
                      </div>
                      <ul className="list-disc list-inside space-y-1">
                        <li>
                          <span className="text-sm p-1 mr-1 bg-[#1d1d1f] text-white rounded-sm">
                            [문제]
                          </span>
                          북마크 페이지에서 북마크 해제시 화면 반영이 되지않던
                          문제
                        </li>
                        <li>
                          <span className="text-sm p-1 mr-1 bg-[#1d1d1f] text-white rounded-sm">
                            [해결]
                          </span>
                          북마크 해제시 로컬스토리지 데이터가 변경되어도 현재
                          화면에서 관리하는 로컬스토리지 데이터 상태가 최초
                          마운트시에만 셋팅되어 로컬스토리지가 변경되어도 화면
                          리렌더링이 발생하지 않고 모달창 또한 종료되지
                          않았습니다. useHeartToggle Hook에 하트버튼을 해제하는
                          상황에 작동할 콜백함수를 제공하고 해제시에 관리하던
                          로컬스토리지 상태를 변경하고 모달을 종료하는 로직을
                          추가하여 해결하였습니다.
                        </li>
                      </ul>
                    </div>
                    <div>
                      <div className="flex flex-col gap-5">
                        <div className="text-sm px-2 py-1 text-center italic">
                          회고
                        </div>
                        <div>
                          <div className="font-bold mb-4">좋았던 점</div>
                          <ul className="list-inside list-disc flex flex-col gap-2">
                            <li>
                              <span className="text-sm p-1 mr-1 bg-[#1d1d1f] text-white rounded-sm">
                                [프레임워크 심화 이해]
                              </span>
                              처음으로 Next.js를 사용해 프로젝트를 제작하며,
                              서버 사이드 렌더링(SSR)과 클라이언트 사이드
                              렌더링(CSR)의 차이를 배우고, 이를 활용한 렌더링
                              전략을 익혔습니다. 특히, 브라우저의 로컬스토리지는
                              서버 측에서 접근할 수 없다는 점을 인지하고, 이에
                              대한 접근 방법을 공부하며 프로젝트를 진행했습니다.
                            </li>
                            <li>
                              <span className="text-sm p-1 mr-1 bg-[#1d1d1f] text-white rounded-sm">
                                [서버와 클라이언트에 대한 이해]
                              </span>
                              서버와 클라이언트의 역할과 한계를 더 깊이 이해하게
                              되었습니다. 예를 들어, API 호출 캐시를 Next.js에서
                              제공하는 기본 기능 대신, 요청했던 검색어를 객체로
                              관리하는 방식으로 직접 구현했습니다.
                              <br />
                              이를 통해 클라이언트는 더 빠른 검색 결과로 사용자
                              경험 개선을, 서버는 응답 횟수를 줄여 부하를 개선할
                              수 있었습니다.
                              <br />
                              결과적으로 API 요청 최적화를 통해, 서버의 부하
                              감소와 사용자 경험 향상이라는 두 가지 중요한
                              비즈니스 임팩트를 만들어냈습니다. 단순한 기술
                              구현을 넘어, 이러한 최적화가 비즈니스에 미치는
                              긍정적인 영향을 이해하고 적용할 수 있었던 점이
                              뜻깊었습니다.
                            </li>
                          </ul>
                        </div>
                        <div>
                          <div className="font-bold mb-4">부족했던 점</div>
                          <ul className="list-inside list-disc flex flex-col gap-2">
                            <li>
                              <span className="text-sm p-1 mr-1 bg-[#1d1d1f] text-white rounded-sm">
                                [이미지 컴포넌트에 대한 이해]
                              </span>
                              Next.js의 {"<Image>"} 컴포넌트 사용에 익숙하지
                              않아, fill 속성과 sizes 속성의 역할을 이해하지
                              못했던 점이 아쉬웠습니다.
                              <br />
                              fill 속성: 부모 요소와의 관계를 이해하지 못해
                              레이아웃이 깨지거나 이미지를 제대로 배치하지 못한
                              사례가 있었습니다. <br />
                              sizes 속성: 반응형 디자인에서의 역할과 srcset의
                              자동 생성 방식에 대한 이해가 부족했습니다.
                              <br />
                              공부를 통해 fill의 작동 방식과 sizes의 역할을
                              명확히 알게 되었으며, 반응형 이미지 제공의
                              중요성을 깨달았습니다.
                            </li>
                            <li>
                              <span className="text-sm p-1 mr-1 bg-[#1d1d1f] text-white rounded-sm">
                                [로컬스토리지에 대한 이해와 상태관리]
                              </span>
                              로컬스토리지는 클라이언트 사이드에서만 접근
                              가능하다는 점을 제대로 이해하지 못했던것과 북마크
                              기능을 구현하며 비효율적인 데이터 구조를 사용했던
                              점이 아쉬웠습니다.
                              <br />
                              데이터 저장 방식:{" "}
                              {`"key": {id...}, "key": {id...}`} 형태로 저장.
                              <br />
                              문제점: 전체 데이터를 읽어야 추가된 이미지를
                              검증할 수 있음.
                              <br />
                              배열로 변환 후 렌더링해야 하는 추가 작업 필요.
                              <br />
                              결과적으로 성능과 코드의 가독성 모두에서 부족함을
                              느꼈습니다. 앞으로는 데이터를 효율적으로 다룰 수
                              있는 구조를 채택할 계획입니다.
                            </li>
                          </ul>
                        </div>
                        <div>
                          <div className="font-bold mb-4">
                            부족했던 점을 개선하기 위한 방법
                          </div>
                          <ul className="list-inside list-disc flex flex-col gap-2">
                            <li>
                              <span className="text-sm p-1 mr-1 bg-[#1d1d1f] text-white rounded-sm">
                                [이미지 컴포넌트 관련 개선 방안]
                              </span>
                              Next.js {`<Image>`} 컴포넌트 공식 문서 및 관련
                              자료를 통해 기능을 더 깊이 학습. 실습을 통해
                              fill과 sizes를 다양한 레이아웃에 적용해보고,
                              반응형 이미지 사용법을 최적화. 팀 프로젝트나 코드
                              리뷰를 통해 이미지 컴포넌트 사용 패턴을 공유하고
                              피드백을 수집.
                            </li>
                            <li>
                              <span className="text-sm p-1 mr-1 bg-[#1d1d1f] text-white rounded-sm">
                                [로컬스토리지 및 상태 관리 개선 방안]
                              </span>
                              데이터를 저장할 때 객체 대신 배열을 사용하는
                              구조로 변경하여 데이터의 검증 및 출력 과정을
                              단순화.
                              <br />
                              예: [id1, id2, id3] 형태로 저장하여 객체를 한번에
                              업데이트 하는 방법을 고려. 로컬스토리지는
                              key:value 중 value 만 일부 수정하여 리액트의
                              상태관리처럼 사용할 수 없기에 value 를 수정하고
                              한번에 업데이트 하는 방법을 사용할 수 있습니다.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section className="pb-20">
            <div className="flex flex-col items-center pb-4 border-b-2 border-dashed">
              <h3 className="text-center text-3xl font-thin pb-2">Career</h3>
            </div>
            <div className="py-10">
              <ul className="flex flex-col gap-10">
                <li className="flex gap-8 max-md:flex-col">
                  <div className="text-2xl font-semibold  basis-1/4 max-md:text-center">
                    <p>(주)유니파이</p>
                    <ul className="font-thin text-base">
                      <li>2020.12 - 2022.01</li>
                      <li>개발팀 - 사원</li>
                    </ul>
                  </div>
                  <div className="flex flex-col gap-10  basis-3/4">
                    <div>
                      <div className="text-sm px-2 py-1 text-center italic">
                        주 업무내용
                      </div>
                      <ul className="list-disc list-inside space-y-1">
                        <li>그누보드5 기반의 웹 사이트 유지보수</li>
                        <li>
                          자체 솔루션 ypage, ybuilder, 당근 유지보수 및 스킨개발
                        </li>
                        <li>금 거래소 웹사이트 핵심 스킨 개발</li>
                        <li>네이버 블로그 게시글 키워드 검색 스킨 개발</li>
                        <li>반응형 통합문의 게시판 스킨 개발</li>
                      </ul>
                    </div>
                    <div className="flex flex-col gap-5">
                      <div className="text-sm px-2 py-1 text-center italic">
                        인상적이었던 프로젝트 ( 금 거래소 핵심 스킨 개발 )
                      </div>
                      <div>
                        <div>프로젝트 배경</div>
                        <ul className="list-inside list-disc">
                          <li>
                            금 시세를 실시간으로 메인 화면에 노출해야 했지만, 금
                            시세 API가 존재하지 않는 상황이었습니다.
                          </li>
                          <li>
                            사용자가 매일 수동으로 금 시세를 입력해야 하는
                            구조였고, 입력한 데이터가 즉각적으로 화면에
                            반영되어야 했습니다.
                          </li>
                        </ul>
                      </div>
                      <div>
                        <div>해결 방법</div>
                        <ul className="list-inside list-disc">
                          <li>
                            옵티미스틱 업데이트를 적용하여, 사용자가 금 시세를
                            입력하면 API 요청 성공 후 즉각적으로 UI를
                            업데이트하는 방식으로 구현하였습니다.
                          </li>
                          <li>
                            화면 새로고침 없이 실시간으로 데이터가 반영되도록
                            처리하여 사용자 경험을 개선했습니다.
                          </li>
                        </ul>
                      </div>
                      <div>
                        <div>어려움과 해결 과정</div>
                        <ul className="list-inside list-disc">
                          <li>
                            프로젝트 데드라인이 촉박했으며, 영업팀과 클라이언트
                            간의 커뮤니케이션이 원활하지 않아 개발 진행에 차질이
                            있었습니다.
                          </li>
                          <li>
                            직접 클라이언트와 소통하며 요구사항을 명확히
                            파악했고, 이를 통해 데드라인을 준수할 수 있었습니다.
                          </li>
                        </ul>
                      </div>
                      <div>
                        <div>성과 및 느낀 점</div>
                        <ul className="list-inside list-disc">
                          <li>
                            사용자 중심의 기능을 효과적으로 구현하고, 주어진
                            시간 내에 프로젝트를 성공적으로 완료한 경험입니다.
                          </li>
                          <li>
                            클라이언트와 직접 커뮤니케이션하며 요구사항을 조율한
                            과정이 특히 기억에 남으며, 원활한 소통의 중요성을
                            배웠습니다.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>

              <div className="mt-20 text-center text-sm px-2 py-1 bg-[#1d1d1f] text-white rounded-md">
                앞으로 이곳을 함께 채워나가고 싶어요.
              </div>
            </div>
          </section>
        </article>
        <TopButton></TopButton>
      </main>
      <footer></footer>
    </>
  );
}
