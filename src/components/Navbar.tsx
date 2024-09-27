"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Resume from "./Resume";

const Navbar: React.FC = () => {
  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ) => {
    event.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const nameRef = useRef<HTMLAnchorElement>(null);
  const resumeRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeline = gsap.timeline({
      defaults: { duration: 1, ease: "power2.out" },
    });

    timeline
      .to(navRef.current, { opacity: 1 })
      .fromTo(nameRef.current, { y: -50, opacity: 0 }, { y: 0, opacity: 1 })
      .fromTo(
        resumeRef.current,
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, delay: 0.5 },
        "-=1"
      );
  }, []);

  return (
    <div
      id="home"
      className="w-full md:my-10 my-5  z-20 font-bold flex items-center justify-center"
    >
      <nav
        ref={navRef}
        className="border-b-2 border-[#0000008e] gap-3 z-10 w-full mx-5 max-w-screen-lg opacity-0"
      >
        <div className="container md:py-6 py-4 flex justify-between items-center mx-auto md:px-4 px-0">
          <a
            href="/"
            onClick={(e) => handleClick(e, "#home")}
            ref={nameRef}
            className="md:text-2xl text-base font-bold text-[#111111] font-fam"
          >
            Jayash Saini
          </a>
          <div ref={resumeRef} className="mb-2">
            <Resume />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
