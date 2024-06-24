"use client";

import Socials from "@/components/Socials";
import { FlipWords } from "@/components/ui/flipWords";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(mainRef.current, {
      opacity: 1,
      duration: 2,
      ease: "power2.out",
      delay: 1,
    });
  }, []);

  return (
    <div
      className="w-full h-auto flex flex-col my-5 gap-5 text-[#f2f1e7] items-center relative opacity-0"
      ref={mainRef}
    >
      <div className="w-full max-w-screen-lg px-4 ">
        <section id="home" className="w-full h-full mb-20">
          <div className="w-full md:text-8xl text-5xl text-center text-[#f2f1e7] font-light md:mb-20 mb-10 mt-10 md:py-16 py-8 header-font ">
            Build
            <FlipWords
              duration={2000}
              className="fontColor"
              words={["adaptive", "dynamic", "beautiful", "elegant", "awesome"]}
            />
            web app with MERN stack
          </div>
          <div className="w-full flex md:flex-row flex-col ">
            <div className="md:w-1/2  w-full flex items-center  justify-center">
              <div className="md:w-[50%] w-[60%] rounded-xl">
                <div className="overflow-hidden">
                  <img
                    src="/images/Avatar.jpg"
                    alt="jayash"
                    className="w-full h-full cursor-pointer rounded-xl hover:scale-105 duration-150 ease-in-out"
                    onClick={() => {
                      window.open("https://github.com/JayashSaini/");
                    }}
                  />
                </div>
                <Socials />
              </div>
            </div>
            <div className="md:w-1/2 w-full md:text-xl text-sm  text-orange-50 md:text-left text-center mt-5">
              👋 Hi there, I&apos;m Jayash! I&apos;m a results-driven MERN stack
              developer with a passion for building cutting-edge web
              applications that make an impact.{" "}
              <span className="md:flex hidden">
                I&apos;ve honed my skills in MongoDB, Express.js, React.js, and
                Node.js to deliver high-quality solutions tailored to meet
                specific user needs. With a strong foundation in full-stack
                development, I thrive in environments that challenge me to
                continuously learn and innovate.
              </span>
            </div>
          </div>
        </section>
        <section className="w-full my-10">
          <Skills />
        </section>
        <section className="w-full my-10">
          <Projects />
        </section>
        <section className="w-full my-10">
          <Contact />
        </section>
      </div>
    </div>
  );
}
