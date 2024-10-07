import Header from "@/_components/Header";
import { TbWorldWww } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaJsSquare } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { RiSupabaseLine } from "react-icons/ri";
export default function Home() {
  return (
    <div>
      <div className="wrap w-[400px] md:w-[700px] xl:w-[1100px] mx-auto">
        <Header></Header>
        <main>
          <article>
            <h3 className="sr-only">포트폴리오 메인 콘텐츠</h3>
            <section className="flex flex-col justify-center items-center text-6xl font-bold">
              <h4 className="sr-only">인사말</h4>
              <div>안녕하세요.</div>
              <div>Frontend Developer</div>
              <div>김태형의 포트폴리오 방문을 환영합니다.</div>
            </section>
            <section className="py-[40px]">
              <h4 className="text-center text-4xl font-bold">About Me</h4>
              <p className="text-center text-2xl font-medium">
                저에대해 알아보아요.
              </p>
              <div className="flex">
                <div className="flex-1 bg-slate-200">사진</div>
                <div className="flex-1">
                  <dl>
                    <dt className="text-xl font-bold">Career.</dt>
                    <dd>
                      총 경력 1년 1개월 (주)유니파이 2020.12 - 2022.01 그누보드5
                      금 거래소 게시판 스킨 개발 및 다양한 스킨 개발( PHP, JS,
                      AJAX ) admin 사용자의 금 시세 CRUD DB( mysql ) CRUD 작성한
                      금시세 index 노출
                    </dd>
                    <dt className="text-xl font-bold">Education.</dt>
                    <dd>
                      안산대학교 시각미디어디자인과 2012.03 - 2016.02 ( 3.31 /
                      4.5 ) 인천반도체고등학교 전산과 2009.03 - 2012.02
                    </dd>
                    <dt className="text-xl font-bold">Contact.</dt>
                    <dd>
                      🏠  incheon, South Korea 📳  010-9520-2757 ✉️
                      xoguddkenl@gmail.com
                    </dd>
                    <dt className="text-xl font-bold">Archiving.</dt>
                    <dd>github, velog</dd>
                  </dl>
                </div>
              </div>
              <div>
                <p className="text-xl font-bold">Interview</p>
                <dl>
                  <dt className="font-bold">
                    Q.프론트엔드 개발자로서 역량을 키우기 위해 어떤 노력을
                    기울였나요?
                  </dt>
                  <dd>A.블라블라</dd>
                  <dt className="font-bold">
                    Q.중요하게 생각하는 업무 능력은 무엇인가요?
                  </dt>
                  <dd>A.블라블라</dd>
                  <dt className="font-bold">
                    Q.앞으로 어떤 개발자가 되고싶은가요?
                  </dt>
                  <dd>A.블라블라</dd>
                </dl>
              </div>
            </section>
            <section className="py-[40px]">
              <h4 className="text-center text-4xl font-bold">Skills</h4>
              <p className="text-center text-2xl font-medium">
                아이콘을 클릭하면 제가 알고있는 개념에 대해 상세히 알아볼 수
                있어요.
              </p>
              <div>
                <ul className="flex flex-wrap">
                  <li className="basis-1/4 flex items-center justify-center">
                    <TbWorldWww size={100}></TbWorldWww>
                  </li>
                  <li className="basis-1/4 flex items-center justify-center">
                    <FaHtml5 size={100}></FaHtml5>
                  </li>
                  <li className="basis-1/4 flex items-center justify-center">
                    <IoLogoCss3 size={100}></IoLogoCss3>
                  </li>
                  <li className="basis-1/4 flex items-center justify-center">
                    <FaJsSquare size={100}></FaJsSquare>
                  </li>
                  <li className="basis-1/4 flex items-center justify-center">
                    <BiLogoTypescript size={100}></BiLogoTypescript>
                  </li>
                  <li className="basis-1/4 flex items-center justify-center">
                    <FaReact size={100}></FaReact>
                  </li>
                  <li className="basis-1/4 flex items-center justify-center">
                    <RiNextjsFill size={100}></RiNextjsFill>
                  </li>
                  <li className="basis-1/4 flex items-center justify-center">
                    <RiSupabaseLine size={100}></RiSupabaseLine>
                  </li>
                </ul>
              </div>
            </section>
            <section className="py-[40px]">
              <h4 className="text-center text-4xl font-bold">Projects</h4>
              <p className="text-center text-2xl font-medium">
                프로젝트를 최신순으로 배치해보았어요.
              </p>
            </section>
            <section className="flex flex-col justify-center items-center text-6xl font-bold">
              <h4 className="sr-only">마무리 인사</h4>
              <div>지금까지.</div>
              <div>Frontend Developer</div>
              <div>김태형이었습니다. 감사합니다.</div>
            </section>
          </article>
        </main>
        <footer>update 2024. 10. 07</footer>
      </div>
    </div>
  );
}
