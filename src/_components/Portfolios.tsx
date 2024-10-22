import React from "react";
import Svg from "./Svg";
import { Portfolio } from "@/_model/portfolio";
import { v4 as uuidv4 } from "uuid";

export const portfolios: Portfolio[] = [
  {
    id: uuidv4(),
    title: "포트폴리오 웹",
    workDuration: "2024.10.01 ~ 2024.10.17 ( 1인 )",
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
    troubleshooting: [
      {
        trouble: [
          "웹사이트 성능의 문제 라이트하우스 점수..",
          "혹은 이제 개발할 애플 인터렉션에서 발생할 문제",
          "테일윈드 showSection_0 showSection-0 언더스코어 문제.. 언더스코어 사용하면 안되는듯",
          "메뉴 오파시티 효과만 작성했을 때 전체 페이지에 스크롤 이벤트가 걸린것을 활용하여 프롭스로 섹션을 구분 했던 내용",
          "테일윈드 그룹 묶기 이슈 ( group 태그 사용 방법 ) ",
          "각 섹션의 높이를 셋팅하니까 레이아웃 이 망가지는 현상",

          // 예제 코드 ..
          // <div className="group is-published">
          //   <div className="hidden group-[.is-published]:block group-[.is-published]:text-red-700">
          //     Published
          //     <div className="hidden group-[.is-published]:block group-[.is-published]:text-blue-700">
          //       뻒킹 !!
          //     </div>
          //   </div>
          // </div>,
        ],
        solution: ["이걸 해결할 이야기", "이걸 해결할 이야기"],
      },
    ],
    retrospect:
      "노션 템플릿을 활용해 이력서를 작성했지만, 여러 제한 사항과 입사지원 시 불편한 점들이 많아 직접 제작하기로 결정했습니다. 이를 통해 좀 더 프론트엔드 개발자다운 포트폴리오로 입사지원을 할 수 있게 되어 매우 기쁩니다.이 프로젝트에서는 UI에 특히 많은 신경을 썼고, 개발 과정에서 모든 내용을 한 페이지에 담다 보니 중복되는 코드들이 발생했습니다. 이를 간과할 수 없어 분리하는 작업을 진행했고, 이 과정에서 약 1000줄 가까이 코드를 줄일 수 있었습니다. 이로 인해 코드의 가독성과 유지보수성이 크게 향상되었습니다.이번 경험을 통해 효율적인 구조와 디자인의 중요성을 다시금 깨닫게 되었고, 앞으로의 개발 과정에서도 더욱 개선된 접근 방식을 적용할 계획입니다.",
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
    workDuration: "2024.09.20 ~ 2024.09.22",
    image: { url: "/common/common.png", alt: "공통 컴포넌트 이미지" },
    links: {
      github:
        "https://github.com/LogicRefinery/components/tree/main/headlessSelectBox",
      deployment: "",
    },
    detailDescription:
      "headless UI 패턴을 적용한 셀렉트박스 공통 컴포넌트를 구현했습니다. 사용하는 상황에 따라 UI와 애니메이션을 커스텀할 수 있습니다. 추 후 실무에서 일하게 되었을 때 공통 컴포넌트의 사용과 개발에 용이하고자 개발했습니다.",
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
      "headless UI 패턴을 적용한 셀렉트박스 공통 컴포넌트 구현",
      "사용하는 개발자와 상황에 따라 다른 애니메이션 구현 ( 사용시 특정 애니메이션 선택 가능 )",
      "셀렉트박스 옵션 목록 API 호출 구현",
      "타입스크립트 제네릭 활용",
    ],
    troubleshooting: [{ trouble: [""], solution: [""] }],
    retrospect:
      "공통 컴포넌트를 개발하고 활용하는 것이 매우 중요하다는 것을 깊이 느꼈습니다. 디자인 시스템에 기반한 동일한 스타일 또는 미세한 변화가 있는 요소들을 하나의 컴포넌트로 재사용할 수 있다는 점이 매우 매력적이었습니다. 이를 통해 코드의 중복을 줄이고, 재사용성이 높은 컴포넌트를 제작하는 것이 개발자의 중요한 역할이라는 생각이 들었습니다.이러한 접근은 유지보수성과 일관성을 높이는 데 큰 도움이 되며, 전체 프로젝트의 효율성을 향상시킵니다.",
    viewsImage: [{ url: "/common/common.png", alt: "alt" }],
  },
  {
    id: uuidv4(),
    title: "supatodo",
    description: "supabase를 적용한 투두리스트",
    workDuration: "2024.09.02 ~ 2024.09.10 ( 1인 )",
    image: { url: "/supatodo/supatodo.png", alt: "투두리스트 이미지" },
    links: {
      github: "https://github.com/LogicRefinery/supatodo",
      deployment: "https://www.logicrefinery.co.kr",
    },
    detailDescription:
      "Supabase 데이터베이스를 적용한 투두리스트 웹을 만들었습니다. 이 프로젝트를 통해 백엔드 로직과 데이터베이스에 대한 궁금증을 풀고, 프론트엔드 개발자로서 백엔드와의 HTTP 통신 및 실제 웹에서 일어나는 과정을 이해하는 것이 중요하다고 생각했기 때문에 이를 직접 구현해보며, 프론트엔드 개발자에게 필요한 풀스택 지식을 쌓고자 제작했습니다.",
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
    keyFeatures: [
      "Headless UI를 활용한 컴포넌트 설계",
      "Supabase 로그인, 회원가입 기능 활용",
      "Supabase 이메일 인증 시스템 기능 활용",
      "DNS 설정",
      "회원가입 매직링크 인증메일 서비스 연동 ( 메일 DNS 설정 )",
      "Resend 메일링 서비스 활용",
      "Context API를 활용한 투두리스트, 유저 정보 관리",
      "클라이언트 API 호출 ( API Routes 호출 )과 서버 API 호출 ( prisma를 활용한 DB 쿼리문 )을 분리 ( 관심사 분리 )",
      "API 컨트롤러와 서비스로직 분리 ( 관심사 분리 )",
    ],
    retrospect:
      "투두리스트라는 간단한 웹을 제작했지만 데이터베이스를 적용하고 ORM을 사용하고 쿼리를 작성하는 과정에서 프론트엔드와 백엔드의 차이점과 연관성에 대하여 고민을 했고 그 과정에서 웹의 전체적인 흐름과 관심사의 분리 등 다양한 경험을 했습니다. 아쉬웠던 점이 있다면 Supabase를 무료플랜으로밖에 사용할 수 없었다는점이 있습니다.",
    troubleshooting: [
      {
        trouble: [
          "[문제] 인증 메일 발송 오류: 회원가입 중 첫 번째 인증 메일 발송은 성공했지만, 이후 다른 이메일로 가입을 시도할 때 인증 메일 발송에 실패했다는 오류가 반복적으로 발생했습니다.",
          "[문제] 데이터 로딩 지연: 로그인 성공 후, 데이터베이스에서 데이터를 로딩하는데 시간이 과도하게 오래 걸리는 문제가 있었습니다.",
        ],
        solution: [
          `[해결] Supabase의 무료 플랜에서는 1시간에 3회의 메일 발송 제한이 있다는 것을 공식 문서를 통해 확인했습니다.
이 제한 때문에 개발과 실제 서비스에서는 메일 발송이 부족하다고 판단하여 Resend 메일링 서비스를 도입했습니다.
도메인을 구입하고 Resend와 연동한 후, 이를 다시 Supabase와 연결하여 메일 발송 문제를 해결했습니다.`,
          `[해결] 이 문제는 Supabase의 무료 버전에서 발생하는 제약으로, 현재는 이를 해결할 방법이 없었습니다.
개발 단계에서는 비용 부담 때문에 그대로 두었지만, 이후 더 나은 서비스를 배포할 때 유료 버전으로 업그레이드하는 방안을 고려하고 있습니다.`,
        ],
      },
    ],
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
    workDuration: "2024.06.03 ~ 2024.06.06 ( 1인 )",
    image: { url: "/form/form.png", alt: "설문조사 폼 웹사이트 이미지" },
    links: {
      github: "https://github.com/LogicRefinery/THForm",
      deployment: "https://th-form.vercel.app",
    },
    detailDescription:
      "설문조사 폼을 원하는대로 생성하고 저장하여 배포하기위한 앱 드래그앤 드롭 기능을 사용하고 조금 복잡한 폼 기능을 만들어보고 싶어서 제작 했습니다.",
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
    keyFeatures: [
      "폼 인풋 CRUD",
      "폼 인풋 복제",
      "답변 유형 선택 ( text, textarea, checkbox, radio )",
      "기타 항목 기능",
      "드래그 앤 드롭 기능 ( 인풋 순서 변경 )",
      "리덕스를 사용한 전역 상태관리 ( 플럭스 패턴 )",
      "MSW를 활용한 API 엔드포인트 구현",
    ],
    retrospect: `경험: 드래그 가능(draggable) 속성을 활용해 드래그 기능을 구현하면서 드래그의 여러 시점을 조건에 따라 처리하는 과정에서 흥미를 느꼈습니다. 이로 인해 다양한 상호작용(인터랙션)을 만들어낼 수 있는 가능성을 확인했습니다.
    
    학습: 드래그 기능을 구현하는 과정에서 이벤트 버블링과 이벤트 위임에 대해 더 깊이 이해하게 되었습니다. 특히, 이러한 이벤트 처리 방식이 드래그와 같은 복잡한 상호작용을 효과적으로 관리하는 데 큰 도움이 되며, 드래그 이벤트가 부모 또는 다른 요소로 전달되는 방식을 보다 명확하게 파악할 수 있었습니다.`,
    troubleshooting: [
      {
        trouble: [
          "[문제]라디오와 체크박스 타입의 설문 작성 시 '기타' 항목은 반드시 단 하나만 존재해야 하며, 항상 옵션 목록의 마지막에 위치해야 한다는 전제 조건을 가지고 있었으나, '기타 항목 추가' 버튼을 클릭할 때마다 기타 항목이 중간에 섞여 들어가는 문제가 발생했습니다.",
        ],
        solution: [
          "[해결] 옵션 객체에 other이라는 플래그를 추가하여 '기타' 항목의 존재 여부를 확인하도록 했습니다. 이 플래그가 true인 경우, 새로운 옵션은 항상 마지막 인덱스 앞에 추가되도록 처리하였으며, false인 경우에는 새로운 옵션이 항상 배열의 끝에 추가되도록 하여 '기타' 항목이 가장 마지막에 위치하도록 수정했습니다.",
        ],
      },
    ],
    viewsImage: [
      { url: "/form/thumbnail1.png", alt: "폼 웹 메인화면 사진" },
      {
        url: "/form/thumbnail2.png",
        alt: "폼의 일부분을 드래그하여 다른 위치로 이동시키는 사진",
      },
      {
        url: "/form/thumbnail3.png",
        alt: "개발자도구를 열어서 리덕스를 보여주는 사진",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "thmall",
    description: "카테고리 및 상품을 등록하고 판매하는 e-commerce 웹",
    workDuration: "2024.03.05 ~ 2024.04.23 ( 1인 )",
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
    keyFeatures: [
      "어드민사이드와 유저사이드를 구분",
      "어드민 사이드 : 카테고리 CRUD, 상품 CRUD 구현",
      "유저 사이드 : 상품 리스트형태 노출, 카테고리별 상품 노출, 상품 상세 페이지 구현",
      "ReactQuery를 통한 API 요청 최적화 및 Optimistic Update 구현",
      "Lodash를 사용하여 검색어 디바운싱 구현 API 요청 최적화",
      "Lodash 사용전 타이머를 이용하여 구현",
      "React Hook Form 을 활용하여 비제어 컴포넌트 Form 구현 리렌더링 최적화",
      "MSW를 활용하여 API 엔드포인트 구현",
      "Image Compressor 라이브러리를 사용한 이미지 압축 이미지 최적화",
      "DB 대용으로 로컬스토리지를 사용하기 위해 이미지 BASE64 인코딩 및 디코딩 구현",
    ],
    retrospect:
      "최근 Supatodo 프로젝트를 진행하면서 Next.js의 API Routes에 대해 알게 되었고, 서버와 클라이언트 컴포넌트 모두에서 편리하게 호출하여 사용할 수 있었습니다. 만약 당시 이 기능을 알고 있었다면, MSW 대신 API Routes를 사용했을 것 같습니다. 이를 통해 공식 문서의 중요성을 다시 한 번 깨닫게 되었으며, 앞으로는 공식 문서를 더 꼼꼼하게 읽어보는 습관을 길러야겠다고 다짐했습니다. ",
    troubleshooting: [
      {
        trouble: [
          "[문제] 최초 웹 접근시 MSW import가 제대로 작동하지 않는 이슈",
        ],
        solution: [
          `[해결] MSW 라이브러리를 Next.js 14 App Router에서 사용하는 과정에서, 브라우저의 서비스 워커가 제대로 작동하지 않는 문제가 있었습니다. 여러 레퍼런스를 참고했지만 해결할 수 없었고, 스터디 리더와 함께 콘솔 출력을 확인하며 작동 시점과 작동하지 않는 시점을 분석했습니다. 결국, 서비스 워커를 올바르게 작동시키기 위해 브라우저가 준비되는 즉시 비동기로 임포트하는 방식을 채택했고, 사용자 경험을 저해하지 않기 위해 로딩 스피너를 적용해 문제를 해결했습니다.

        여러 레퍼런스에서 Next.js와 MSW가 잘 맞지 않는다고 했지만, 도전 의식이 생겨 끝까지 해결을 시도했습니다. 당시에는 Next.js의 API Routes에 대해 잘 알지 못해 그 외에는 다른 해결 방법이 없었습니다..
          
        관련링크 : https://github.com/mswjs/msw/issues/1644`,
        ],
      },
    ],
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
    workDuration: "2024.02.20. - 2024.02.29 ( 1인 )",
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
        trouble: [
          "[문제] 북마크 페이지에서 북마크 해제시 화면 반영이 되지않던 문제",
        ],
        solution: [
          "[해결] 북마크 해제시 로컬스토리지 데이터가 변경되어도 현재 화면에서 관리하는 로컬스토리지 데이터 상태가 최초 마운트시에만 셋팅되어 로컬스토리지가 변경되어도 화면 리렌더링이 발생하지 않고 모달창 또한 종료되지 않았습니다. useHeartToggle Hook에 하트버튼을 해제하는 상황에 작동할 콜백함수를 제공하고 해제시에 관리하던 로컬스토리지 상태를 변경하고 모달을 종료하는 로직을 추가하여 해결하였습니다.",
        ],
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
