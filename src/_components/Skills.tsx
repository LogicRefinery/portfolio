import React from "react";
import { TbWorldWww } from "react-icons/tb";
import Svg from "./Svg";

function Skills() {
  const skills = [
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
        ,
        {
          title: "URI,URL,URN",
          description:
            "각각의 차이를 알고있고 URL의 경우 protocol://domain/path/parameter/query 구조에대해 알고있습니다.",
        },
        ,
        {
          title: "RESTful API",
          description:
            "RESTful API의 개념을 알고있고 next 프로젝트의 경우 routeHandle, react 프로젝트의 경우 MSW를 사용하여 http 통신을 통한 클라이언트 <-> 서버 RESTful한 통신을 경험했습니다.",
        },
        ,
        {
          title: "Web Storage",
          description:
            "Web Storage의 종류와 차이점을 알고있고 데이터베이스를 적용한 프로젝트를 제외한 프로젝트의 경우 데이터베스 대용으로 사용한 경험이 있습니다.",
        },
        ,
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
        ,
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
        ,
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
        ,
        {
          title: "Synchronous/Asynchronous",
          description:
            "자바스크립트의 동기와 비동기에 대해 이해하고 있습니다. Web API, 이벤트루프, 매크로 태스크큐, 마이크로 태스크큐 ( 큐 자료구조 )에 대해 알고있으며 각 큐가 담당하는 비동기 코드 분류와 우선순위에 대해 알고있습니다. 추가적으로 Request Animation Frame의 장점과 개념에대해 알고있습니다.",
        },

        {
          title: "others",
          description:
            "프로토타입 개념과 클래스 문법을 약간이나마 알고있습니다.",
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
        ,
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
    },
    {
      title: "next",
      icon: (
        <>
          <span className="sr-only">next 로고</span>
          {Svg("next", 60, 60, "fill-[#86868B]", true)}
        </>
      ),
    },
    {
      title: "supabase",
      icon: (
        <>
          <span className="sr-only">supabase 로고</span>
          {Svg("supabase", 60, 60, "fill-[#86868B]", true)}
        </>
      ),
    },
  ];

  return skills;
}

export default Skills;
