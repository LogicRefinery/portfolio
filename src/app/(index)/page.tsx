import Image from "next/image";
import Link from "next/link";
import TopButton from "./components/top-button";

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
            <div className="flex py-10 gap-8 max-lg:flex-col">
              <div className="flex justify-center basis-1/4">
                <div className="relative w-full max-lg:w-1/2 aspect-[1] rounded-full overflow-hidden">
                  <Image
                    src={"/profile.png"}
                    alt={"김태형 프로필 사진"}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
              </div>
              <div className="basis-3/4">
                <p className="pb-2">
                  그누보드5 & 영카트 / Jquery / MySql 기반의 환경에서 유지보수와
                  스킨을 개발하며 1년차 프론트엔드 개발을 해왔습니다. 이후
                  모던한 웹프론트엔드 개발을 시작하기 위해서 지난 14개월동안
                  치열하게 준비했습니다. ( Git, HTML, Css, Js, React, Redux, Ts,
                  Next, React-Query, Msw, Next api, Supabase 등 )
                </p>
                <p className="pb-2">
                  <span className="font-semibold">
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
                      <li>
                        <Link
                          href={"https://www.logicrefinery.co.kr/"}
                          target="_blank"
                        >
                          https://www.logicrefinery.co.kr/
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={"https://github.com/LogicRefinery/supatodo"}
                          target="_blank"
                        >
                          https://github.com/LogicRefinery/supatodo
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
                          [문제] 인증 메일 발송 오류 - 회원가입 중 첫 번째 인증
                          메일 발송은 성공했지만, 이후 다른 이메일로 가입을
                          시도할 때 인증 메일 발송에 실패했다는 오류가
                          반복적으로 발생했습니다.
                        </li>
                        <li>
                          [해결] Supabase의 무료 플랜에서는 1시간에 3회의 메일
                          발송 제한이 있다는 것을 공식 문서를 통해 확인했습니다.
                          이 제한 때문에 개발과 실제 서비스에서는 메일 발송이
                          부족하다고 판단하여 Resend 메일링 서비스를
                          도입했습니다. 도메인을 구입하고 Resend와 연동한 후,
                          이를 다시 Supabase와 연결하여 메일 발송 문제를
                          해결했습니다.
                        </li>

                        <li>
                          [문제] 데이터 로딩 지연 - 로그인 성공 후,
                          데이터베이스에서 데이터를 로딩하는데 시간이 과도하게
                          오래 걸리는 문제가 있었습니다.
                        </li>

                        <li>
                          [해결] 이 문제는 Supabase의 무료 버전에서 발생하는
                          제약으로, 현재는 이를 해결할 방법이 없었습니다. 개발
                          단계에서는 비용 부담 때문에 그대로 두었지만, 이후 더
                          나은 서비스를 배포할 때 유료 버전으로 업그레이드하는
                          방안을 고려하고 있습니다.
                        </li>
                      </ul>
                    </div>
                    <div>
                      <div className="text-sm px-2 py-1 text-center italic">
                        회고
                      </div>
                      <ul className="list-disc list-inside space-y-1">
                        <li>
                          투두리스트라는 간단한 웹을 제작했지만 데이터베이스를
                          적용하고 ORM을 사용하고 쿼리를 작성하는 과정에서
                          프론트엔드와 백엔드의 차이점과 연관성에 대하여 고민을
                          했고 그 과정에서 웹의 전체적인 흐름과 관심사의 분리 등
                          다양한 경험을 했습니다. 아쉬웠던 점이 있다면
                          Supabase를 무료플랜으로밖에 사용할 수 없었다는점이
                          있습니다.
                        </li>
                      </ul>
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
                      <li>
                        <Link
                          href={"https://todayhouse.vercel.app/"}
                          target="_blank"
                        >
                          https://todayhouse.vercel.app/
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={"https://github.com/LogicRefinery/todayhouse"}
                          target="_blank"
                        >
                          https://github.com/LogicRefinery/todayhouse
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={
                            "https://drive.google.com/file/d/1j-LlDiA0Es4ZDJrz7UpzG8cLoTMcAG3j/view"
                          }
                          target="_blank"
                        >
                          https://drive.google.com/file/d/1j-LlDiA0Es4ZDJrz7UpzG8cLoTMcAG3j/view
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
                          문제: 최초 웹 접근 시 MSW import가 제대로 작동하지
                          않는 이슈
                        </li>
                        <li>
                          해결: MSW 라이브러리를 Next.js 14 App Router에서
                          사용하는 과정에서, 브라우저의 서비스 워커가 제대로
                          작동하지 않는 문제가 있었습니다. 여러 레퍼런스를
                          참고했지만 해결할 수 없었고, 스터디 리더와 함께 콘솔
                          출력을 확인하며 작동 시점과 작동하지 않는 시점을
                          분석했습니다.
                        </li>
                        <li>
                          해결: 서비스 워커를 올바르게 작동시키기 위해
                          브라우저가 준비되는 즉시 비동기로 임포트하는 방식을
                          채택했고, 사용자 경험을 저해하지 않기 위해 로딩
                          스피너를 적용해 문제를 해결했습니다.
                        </li>
                        <li>
                          해결: 여러 레퍼런스에서 Next.js와 MSW가 잘 맞지
                          않는다고 했지만, 도전 의식이 생겨 끝까지 해결을
                          시도했습니다.
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
                    <div>
                      <div className="text-sm px-2 py-1 text-center italic">
                        회고
                      </div>
                      <ul className="list-disc list-inside space-y-1">
                        <li>
                          최근 Supatodo 프로젝트를 진행하면서 Next.js의 API
                          Routes에 대해 알게 되었고, 서버와 클라이언트 컴포넌트
                          모두에서 편리하게 호출하여 사용할 수 있었습니다. 만약
                          당시 이 기능을 알고 있었다면, MSW 대신 API Routes를
                          사용했을 것 같습니다. 이를 통해 공식 문서의 중요성을
                          다시 한 번 깨닫게 되었으며, 앞으로는 공식 문서를 더
                          꼼꼼하게 읽어보는 습관을 길러야겠다고 다짐했습니다.
                        </li>
                      </ul>
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
                      <li>
                        <Link
                          href={"https://th-gallery-rose.vercel.app/"}
                          target="_blank"
                        >
                          https://th-gallery-rose.vercel.app/
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={"https://github.com/LogicRefinery/THGallery"}
                          target="_blank"
                        >
                          https://github.com/LogicRefinery/THGallery
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
                        <li>페이지 네이션 직접 구현</li>
                        <li>
                          API 요청 시 검색어를 cacheList 객체에 저장하여, 다음
                          요청 시 최적화를 위한 검증 작업 수행
                        </li>
                        <li>
                          LocalStorage를 이용한 이미지 북마크 저장 기능 구현
                        </li>
                        <li>
                          이미지 렌더링 전 블러 효과를 사용해 사용자 경험(UX)
                          향상
                        </li>
                      </ul>
                    </div>
                    <div>
                      <div className="text-sm px-2 py-1 text-center italic">
                        트러블슈팅
                      </div>
                      <ul className="list-disc list-inside space-y-1">
                        <li>
                          [문제]: 북마크 페이지에서 북마크 해제시 화면 반영이
                          되지않던 문제
                        </li>
                        <li>
                          [해결]북마크 해제시 로컬스토리지 데이터가 변경되어도
                          현재 화면에서 관리하는 로컬스토리지 데이터 상태가 최초
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
                      <div className="text-sm px-2 py-1 text-center italic">
                        회고
                      </div>
                      <ul className="list-disc list-inside space-y-1">
                        <li>
                          최근 Supatodo 프로젝트를 진행하면서 Next.js의 API
                          Routes에 대해 알게 되었고, 서버와 클라이언트 컴포넌트
                          모두에서 편리하게 호출하여 사용할 수 있었습니다. 만약
                          당시 이 기능을 알고 있었다면, MSW 대신 API Routes를
                          사용했을 것 같습니다. 이를 통해 공식 문서의 중요성을
                          다시 한 번 깨닫게 되었으며, 앞으로는 공식 문서를 더
                          꼼꼼하게 읽어보는 습관을 길러야겠다고 다짐했습니다.
                        </li>
                      </ul>
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
