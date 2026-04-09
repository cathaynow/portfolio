import Card from "../components/Card.jsx";
import { useRef } from "react";
import { Globe } from "../components/globe.jsx";
import CopyEmailButton from "../components/CopyEmailButton.jsx";
import Frameworks from "../components/Frameworks.jsx";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/*Grid 1*/}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="/assets/coding-pov.png"
            alt="coding-pov"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem]
                    md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5rem]"
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Cathay</p>
            <p className="subtext">
              지난 4년간 저는 역동적이고 반응성이 뛰어난 소프트웨어 및 웹
              애플리케이션을 개발하기 위해 프론트엔드 및 백엔드 개발 기술을
              연마해 왔습니다.
            </p>
          </div>
          <div
            className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2
                    sm:h-1/3 bg-gradient-to-t from-indigo"
          />
        </div>

        {/*Grid 2*/}
        <div className="grid-default-color grid-2">
          <div
            className="flex items-center justify-center w-full h-full"
            ref={grid2Container}
          >
            <p className="flex items-end text-5xl text-gray-500">
              CODE IS CRAFT
            </p>
            <Card
              text="GRASP"
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              containerRef={grid2Container}
            />
            <Card
              text="SOLID"
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              containerRef={grid2Container}
            />
            <Card
              text="Design Patterns"
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              containerRef={grid2Container}
            />
            <Card
              text="Design Principles"
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              containerRef={grid2Container}
            />
            <Card
              text="SRP"
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              containerRef={grid2Container}
            />

            <Card
              image="/assets/logos/csharp-pink.png"
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              containerRef={grid2Container}
            />
            <Card
              image="/assets/logos/dotnet-pink.png"
              style={{ rotate: "-45deg", top: "70%", left: "25%" }}
              containerRef={grid2Container}
            />
            <Card
              image="/assets/logos/blazor-pink.png"
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              containerRef={grid2Container}
            />
          </div>
        </div>
        {/*Grid 3*/}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              {" "}
              저는 대전에 거주하고 있으며, 전 세계 어디에서든 원격 근무가
              가능합니다.
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>
        {/*Grid 4*/}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              함께 프로젝트를 시작해 보시겠어요?
            </p>
            <CopyEmailButton />
          </div>
        </div>
        {/*Grid 5*/}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headtext">Tech Stack</p>
            <p className="subtext">
              저는 다양한 언어, 프레임워크 및 도구를 전문으로 다루며, 이를 통해
              견고하고 확장 가능한 애플리케이션을 구축할 수 있습니다.
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%]  md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
