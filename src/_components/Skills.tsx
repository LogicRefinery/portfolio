import React from "react";
import { TbWorldWww } from "react-icons/tb";
import Svg from "./Svg";
import { SkillItem } from "@/_model/skills";

export const skills: SkillItem[] = [
  {
    title: "internet",
    icon: (
      <TbWorldWww
        size={60}
        className="stroke-apple-gray group-hover:stroke-orange-L2 transition-all"
      />
    ),
    skills: [
      {
        title: "DNS",
        description: "DNS의 역할과 개념에 대해 알고있습니다.",
      },

      {
        title: "URI,URL,URN",
        description:
          "각각의 차이를 알고있고 URL의 경우 protocol://domain/path/parameter/query 구조에대해 알고있습니다.",
      },

      {
        title: "RESTful API",
        description:
          "RESTful API의 개념을 알고있고 next 프로젝트의 경우 routeHandle, react 프로젝트의 경우 MSW를 사용하여 http 통신을 통한 클라이언트 <-> 서버 RESTful한 통신을 경험했습니다.",
      },

      {
        title: "Web Storage",
        description:
          "Web Storage의 종류와 차이점을 알고있고 데이터베이스를 적용한 프로젝트를 제외한 프로젝트의 경우 데이터베스 대용으로 사용한 경험이 있습니다.",
      },

      {
        title: "HTTP",
        description:
          "HTTP 통신의 개념을 알고 있습니다. 상태메시지를 구별할 수 있고 메소드를 사용하여 RESTful API 요청을 할 수 있습니다.",
      },
    ],
  },
  {
    title: "html",
    icon: (
      <>
        <span className="sr-only">html로고</span>
        {Svg("html", 60, 60, "fill-[#86868B]", true)}
      </>
    ),
    skills: [
      {
        title: "SEO",
        description: "검색엔진 최적화 개념에 대해 알고있습니다.",
      },
      {
        title: "시멘틱 마크업",
        description:
          "의미있는 태그를 사용하여 마크업을 할 수 있습니다. 시멘틱 마크업으로 얻을 수 있는 이점은 크로스브라우징, 웹 접근성 향상으로 알고있습니다.",
      },
      {
        title: "웹 접근성",
        description: "웹 접근성의 개념에 대해 알고있습니다.",
      },

      {
        title: "박스 모델링",
        description:
          "시멘틱 태그를 이용한 박스 모델링이 가능합니다. 단순히 현재를 구현하는 것보다 추후 변경될 가능성이 있는 구조까지 고려하여 마크업 할 수 있도록 노력합니다.",
      },
    ],
  },
  {
    title: "css",
    icon: (
      <>
        <span className="sr-only">css 로고</span>
        {Svg("css", 60, 60, "fill-[#86868B]", true)}
      </>
    ),
    skills: [
      {
        title: "CSS",
        description:
          "CSS 선택자, 우선순위 등 기본 개념에 대해 알고있고 IS기법 IR기법에대해 이해하고있습니다.",
      },
      {
        title: "SCSS",
        description:
          "SCSS 선택자, nesting 구조, 변수, mixin 등 기본 개념에 대해 알고있고 Module화하여 프로젝트에 적용한 경험이 있습니다.",
      },
      {
        title: "Styled Components",
        description:
          "Styled Component의 개념을 알고있으며 사용 경험은 그리 많지 않습니다.",
      },

      {
        title: "TailWindCSS",
        description:
          "TailWindCSS의 개념을 알고있으며 작성 방법에 대해 알고있습니다.",
      },
      {
        title: "Flex Layout",
        description:
          "Flex를 사용한 박스 모델링이 가능합니다. Grid 보다 Flex를 주로 사용합니다.",
      },
      {
        title: "반응형",
        description:
          "미디어쿼리를 사용하여 반응형 웹을 제작할 수 있습니다. 최근 모바일 퍼스트를 지향하게 되었습니다.",
      },
    ],
  },
  {
    title: "js",
    icon: (
      <>
        <span className="sr-only">js 로고</span>
        {Svg("js", 60, 60, "fill-[#86868B]", true)}
      </>
    ),
    skills: [
      {
        title: "ES6",
        description:
          "ES6 문법을 이해하고 사용할 수 있습니다. 블록레벨 스코프, 스프레드 문법, 화살표 함수, 모듈 시스템, Promise, 비구조화 할당 등",
      },
      {
        title: "Data Type",
        description:
          "자바스크립트의 불변값인 원시타입 데이터와 변경가능한 값인 참조타입 데이터에 대해 이해하고있습니다. 메모리와 힙에 저장되어 참조되는 매커니즘을 이해하고 있습니다.",
      },
      {
        title: "Execution Context",
        description:
          "자바스크립트의 함수 실행 환경인 실행 컨텍스트에 대해 이해하고 있습니다. Stack 자료구조 형태로 이루어져있고 함수 실행으로 인해 쌓여진 스택은 각각 새로운 실행 컨텍스트를 가집니다. 또 실행 컨텍스트 내부의 함수 실행 환경을 저장하고 있는 렉시컬 스코프에 대해 이해하고 있으며 렉시컬 스코프로 인해 발생하는 특수한 현상인 스코프, 스코프 체이닝, 호이스팅, 클로저, this를 이해하고있습니다.",
      },

      {
        title: "Synchronous/Asynchronous",
        description:
          "자바스크립트의 동기와 비동기에 대해 이해하고 있습니다. Web API, 이벤트루프, 매크로 태스크큐, 마이크로 태스크큐 ( 큐 자료구조 )에 대해 알고있으며 각 큐가 담당하는 비동기 코드 분류와 우선순위에 대해 알고있습니다. 추가적으로 Request Animation Frame의 장점과 개념에대해 알고있습니다.",
      },

      {
        title: "others",
        description: "프로토타입 개념과 클래스 문법을 약간이나마 알고있습니다.",
      },
    ],
  },
  {
    title: "ts",
    icon: (
      <>
        <span className="sr-only">ts 로고</span>
        {Svg("ts", 60, 60, "fill-[#86868B]", true)}
      </>
    ),
    skills: [
      {
        title: "정적 타이핑",
        description:
          "동적 타이핑인 자바스크립트의 단점을 보완하는 슈퍼셋인 타입스크립트에 대해 이해하고 있습니다. 타입스크립트는 유지 보수성을 향상시키고 런타임이 아닌 빌드타임(IDE)에서 에러를 확인하여 안정성이 뛰어납니다.",
      },
      {
        title: "Data Type",
        description:
          "기본타입, 배열, 객체, 함수, 선택적 매개변수 등을 이해하고 있습니다.",
      },
      {
        title: "Interface & Type",
        description:
          "Interface와 Type을 이해하고 있으며 주로 Type을 사용합니다. Interface는 타입 상속과 오버라이딩을 사용할 수 있고 Type은 상속과 오버라이딩이 불가능하지만 유니온과 인터섹션을 사용할 수 있는 장점이 있습니다.",
      },

      {
        title: "Type Guards",
        description:
          "타입스크립트가 추론하기 힘든 null과 undefined 타입의 경우 타입가드를 사용하여 타입을 추론하게 할 수 있습니다.",
      },
      {
        title: "Type Narrowing",
        description:
          "타입 내로잉을 통해 타입을 좁혀 앱의 안정성을 증가시키고 가독성을 향상시키는 방법에 대해 알고있습니다.",
      },

      {
        title: "Generic",
        description: "제네릭 타입을 이용한 타입 확장과 함수 외부에서 ",
      },
    ],
  },
  {
    title: "react",
    icon: (
      <>
        <span className="sr-only">react 로고</span>
        {Svg("react", 60, 60, "fill-[#86868B]", true)}
      </>
    ),
    skills: [
      {
        title: "Virtual DOM",
        description:
          "리액트의 버추얼 돔 개념에 대해 이해하고 있습니다. 리액트는 화면의 변경을 감지하는 4가지 리렌더링 트리거(Props, State, 부모 컴포넌트 리렌더링, forceUpdate)를 통해 가상으로 메모리 내에서 유지하는 버추얼 돔을 업데이트합니다. 리액트는 변경된 상태를 반영하여 새로운 버추얼 돔을 만들고, 이전 버추얼 돔과 비교한 후, 변경된 부분만 실제 DOM에 반영하여 화면을 효율적으로 업데이트합니다.",
      },
      {
        title: "JSX와 컴포넌트",
        description:
          "리액트 모듈인 컴포넌트에 대해 이해하고 있습니다. JSX로 이루어진 컴포넌트를 생성하고 활용할 수 있습니다.",
      },
      {
        title: "상태관리",
        description:
          "리액트의 화면 리렌더링과 깊은 연관이 있는 상태에대해 이해하고있습니다. 지역 상태관리와 전역 상태관리에 대해 이해하고 있습니다.",
      },

      {
        title: "최적화",
        description:
          "리액트 최적화 훅인 useMemo, useCallback, React.memo 에 대해 이해하고 있습니다. 또한 이미지를 최적화하기위해 webp 형식을 사용하거나 이미지 압축 라이브러리를 사용해본 경험이 있습니다.",
      },
      {
        title: "라이프 사이클",
        description:
          "컴포넌트 라이프사이클 훅인 useEffect 에 대해 이해하고 있습니다. 컴포넌트의 마운트, 리렌더링, 언마운트 시점을 제어 할 수 있습니다.",
      },
      {
        title: "전역 상태관리 및 플럭스 패턴",
        description:
          "컨텍스트 API, 리덕스, 리덕스 툴킷을 통한 전역 상태관리를 경험해보았습니다. 스토어, 액션, 디스패치를 통해 상태를 관리할 수 있습니다. 미들웨어를 사용한 비동기 처리도 경험해보았습니다.",
      },
      {
        title: "리액트쿼리",
        description:
          "서버 상태와 클라이언트 상태를 구분하여 프로젝트에 적용한 경험이 있습니다. Next.js는 기본적으로 API 요청을 캐싱하고 관리하는 기능을 제공하지만, 리액트 쿼리를 사용하여 상태를 가시적으로 관리하고 화면에 선반영하는 등의 작업을 했습니다. 이를 위해 useQuery와 useMutation을 활용하여 서버와 클라이언트 간의 상태 동기화를 효과적으로 처리했습니다.",
      },
      {
        title: "리액트훅폼",
        description:
          "useRef 기반의 상태관리 라이브러리인 리액트 훅폼을 사용해 본 경험이 있습니다. Ref 기반의 장점은 리렌더링 최적화가 있습니다. 리액트 훅폼은 비제어 컴포넌트로 각 form의 데이터가 변경되어도 리렌더링이 발생하지 않는 장점이 있습니다.",
      },
      {
        title: "쓰로틀링과 디바운싱",
        description:
          "쓰로틀링과 디바운싱 매커니즘에 대해 이해하고 있습니다. 디바운싱을 직접 구현한 경험이 있습니다. 다만 추 후 lodash라는 라이브러리를 알게되어 프로젝트에 적용하여 API 호출 횟수를 최적화한 경험이 있습니다.",
      },
    ],
  },
  {
    title: "next",
    icon: (
      <>
        <span className="sr-only">next 로고</span>
        {Svg("next", 60, 60, "fill-[#86868B]", true)}
      </>
    ),
    skills: [
      {
        title: "CRS,SSR,SSG",
        description:
          "리액트의 렌더링 방식인 CRS와 프론트엔드 서버를 제공하고 서버에서 렌더링하여 사용자에게 보여주는 SSR과 프로젝트 빌드시에 렌더링하는 방식인 SSG에 대해 이해하고 있습니다. 각각 서버의 사용비용, 얼마나 다이나믹한 데이터가 필요한지, 사용자의 경험은 어느 측면이 좋은지 고려하여 사용하려고 노력합니다. SSG의 사용경험은 많지 않으나 그 장점을 이해하고있습니다.",
      },
      {
        title: "라우팅",
        description:
          "App Router를 사용한 파일시스템 기반 라우팅을 이해하고 있습니다. 동적 라우팅, 중첩 라우팅을 사용하여 경로를 구조화 할 수 있습니다.",
      },
      {
        title: "API Routes",
        description:
          "API 엔드포인트를 간단하게나마 제작한 경험이 있습니다. 기존에는 MSW를 사용하여 API를 목킹하여 서버 API 개발 없이 API를 요청한 경험이 있습니다. 추 후 next의 API Routes를 사용하여 백엔드 개발이 끝나지 않더라도 프론트엔드 개발을 무리없이 할 수 있는 방법에 대한 경험이 있습니다.",
      },

      {
        title: "데이터 페칭",
        description:
          "데이터를 페칭하고 캐싱하는 기능에대해 이해하고있습니다. 서버사이드 렌더링시 프리패칭을 이용하여 서버에서 완성된 html을 렌더링하게 할 수 있습니다.",
      },
    ],
  },
  {
    title: "supabase",
    icon: (
      <>
        <span className="sr-only">supabase 로고</span>
        {Svg("supabase", 60, 60, "fill-[#86868B]", true)}
      </>
    ),
    skills: [
      {
        title: "database",
        description:
          "FireBase 기반의 데이터베이스인 Supabase를 프로젝트에 적용한 경험이 있습니다. todolist를 만드는데 사용하였습니다.",
      },
      {
        title: "Prisma ( ORM )",
        description:
          "Prisma를 사용하여 supabase에 쿼리문을 사용한 경험이 있습니다.",
      },
      {
        title: "도메인 사용",
        description:
          "supabase 메일 발송시스템의 한계가 프로젝트에 부적합하다고 판단하여 도메인을 구입하고 메일 서버와 프로젝트 도메인으로 사용한 경험이 있습니다. 회원가입시 메일 인증을 구현하는데에 사용하였습니다.",
      },
    ],
  },
];
