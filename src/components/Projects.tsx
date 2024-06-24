"use client";
import { useEffect, useRef } from "react";
import Slider from "react-slick";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Projects = () => {
  const settings = {
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const mainRef = useRef(null);
  const pro1 = useRef(null);
  const pro2 = useRef(null);
  const pro3 = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tm = gsap.timeline({
      defaults: {
        duration: 1,
        ease: "power2.out",
      },
    });
    tm.to(mainRef.current, {
      opacity: 1,
      scrollTrigger: {
        trigger: mainRef.current,
        start: "top bottom",
        scrub: 1,
        toggleActions: "play none none reverse",
      },
    })
      .to(pro1.current, {
        opacity: 1,
        scrollTrigger: {
          trigger: pro1.current,
          start: "top bottom",
          scrub: 1,
          toggleActions: "play none none reverse",
        },
      })
      .to(pro2.current, {
        opacity: 1,
        scrollTrigger: {
          trigger: pro2.current,
          start: "top bottom",
          scrub: 1,
          toggleActions: "play none none reverse",
        },
      })
      .to(pro3.current, {
        opacity: 1,
        scrollTrigger: {
          trigger: pro3.current,
          start: "top bottom",
          scrub: 1,
          toggleActions: "play none none reverse",
        },
      });
  }, []);

  return (
    <div className="w-full md:py-10 py-2 ">
      <h2
        ref={mainRef}
        className=" opacity-0 md:text-4xl text-2xl mb-14 fontColor font-bold pb-5 border-b-[1px] border-[#f3bb77a6] "
      >
        Projects
      </h2>
      <div
        ref={pro1}
        className="opacity-0 w-full border-2 border-[#f3bb7796] px-5 py-12 rounded-xl flex  flex-col-reverse md:flex-row gap-4 my-6"
      >
        <div className="md:w-[45%] w-full">
          <h1 className="md:text-2xl text-xl font-bold ">
            Shoes Hub /{" "}
            <span className="md:text-xl text-lg fontColor">e-commerce</span>
          </h1>
          <p className="my-5">
            Shoes Hub is a cutting-edge e-commerce platform. Designed for shoe
            enthusiasts, it promises seamless functionality and a captivating
            UI/UX for an exceptional shopping journey.
          </p>
          <h2 className="font-semibold text-lg fontColor">Tech Used</h2>
          <div className="w-full mt-2 mb-6 flex justify-start md:gap-4 gap-2">
            <i className="ci ci-2x ci-react"></i>
            <i className="ci ci-2x ci-redux"></i>
            <i className="ci ci-2x ci-mongodb"></i>
            <i className="ci ci-2x ci-redis"></i>
            <i className="ci ci-2x ci-ts"></i>
            <i className="ci ci-2x ci-tailwindcss"></i>
            <i className="ci ci-2x ci-nodejs"></i>
          </div>
          <div className="w-full my-3 flex gap-2">
            <a
              href="https://github.com/JayashSaini/ShoesHubFrontend"
              target="_blank"
            >
              <button className="py-2 px-5 flex items-center justify-center gap-2 text-sm hover:px-10 duration-150 ease-in-out bg-white text-black rounded-md hover:shadow-md hover:shadow-black">
                <i className="ci ci-ci-ci-xl ci-github"></i>
                Frontend
              </button>
            </a>
            <a
              href="https://github.com/JayashSaini/ShoesHubBackend/"
              target="_blank"
            >
              <button className="py-2 px-5 flex items-center justify-center gap-2 text-sm bg-white text-black rounded-md hover:shadow-md hover:shadow-black hover:px-10 duration-150 ease-in-out">
                <i className="ci ci-ci-ci-xl ci-github"></i>
                Backend
              </button>
            </a>
          </div>
          <a href="https://online-shoeshub.vercel.app/" target="_blank">
            <button className="w-full py-3 bg-color hover:bg-[#31221c] hover:tracking-wider rounded-[5px] flex justify-center items-center gap-1">
              <img
                src={"/images/Project1/favicon1.svg"}
                alt=""
                width={33}
                height={33}
              />
              Shoes Hub
            </button>
          </a>
        </div>
        <div className="md:w-[55%] w-full overflow-hidden">
          <Slider {...settings}>
            <img
              src={"/images/Project1/p1.png"}
              alt=""
              loading="lazy"
              className="w-full md:h-[375px] rounded-xl"
            />
            <img
              src={"/images/Project1/p2.png"}
              alt=""
              loading="lazy"
              className="w-full md:h-[375px] rounded-xl"
            />
            <img
              src={"/images/Project1/p3.png"}
              alt=""
              loading="lazy"
              className="w-full md:h-[375px] rounded-xl"
            />
            <img
              src={"/images/Project1/p4.png"}
              alt=""
              loading="lazy"
              className="w-full md:h-[375px] rounded-xl"
            />
            <img
              src={"/images/Project1/p5.png"}
              alt=""
              loading="lazy"
              className="w-full md:h-[375px] rounded-xl"
            />
          </Slider>
        </div>
      </div>
      <div
        ref={pro2}
        className="opacity-0 w-full border-2 border-[#f3bb7796] px-5 py-12 rounded-xl flex  flex-col-reverse md:flex-row gap-4 my-6"
      >
        <div className="md:w-[45%] w-full">
          <h1 className="md:text-2xl text-xl font-bold ">
            Pure Feedback /{" "}
            <span className="md:text-xl text-lg fontColor">
              anonymous feedback
            </span>
          </h1>
          <p className="my-5">
            Pure Feedback, a versatile web application crafted for gathering
            anonymous feedback effortlessly via a straightforward link. improve
            user experiences, and open communication without compromising.
          </p>
          <h2 className="font-semibold text-lg fontColor">Tech Used</h2>
          <div className="w-full mt-2 mb-6 flex justify-start md:gap-4 gap-2">
            <i className="ci ci-2x ci-nextjs"></i>
            <i className="ci ci-2x ci-mongodb"></i>
            <i className="ci ci-2x ci-ts"></i>
            <i className="ci ci-2x ci-mui"></i>
          </div>
          <div className="w-full my-3 flex gap-2">
            <a
              href="https://github.com/JayashSaini/PureFeedback"
              target="_blank"
            >
              <button className="py-2 px-5 flex items-center justify-center gap-2 text-sm bg-white text-black rounded-md hover:shadow-md hover:shadow-black hover:px-10 duration-150 ease-in-out ">
                <i className="ci ci-ci-ci-xl ci-github"></i>
                Github
              </button>
            </a>
          </div>
          <a href="https://pure-feedback.vercel.app/" target="_blank">
            <button className="w-full py-3 bg-color hover:bg-[#31221c] hover:tracking-wider rounded-[5px] flex justify-center items-center gap-1">
              Pure Feedback
            </button>
          </a>
        </div>
        <div className="md:w-[55%] w-full overflow-hidden">
          <Slider {...settings}>
            <img
              src={"/images/Project2/Screenshot from 2024-06-22 00-07-51.png"}
              alt=""
              loading="lazy"
              className="w-full md:h-[375px] rounded-xl "
            />
            <img
              src={"/images/Project2/Screenshot from 2024-06-22 00-08-31.png"}
              alt=""
              loading="lazy"
              className="w-full md:h-[375px] rounded-xl"
            />
            <img
              src={"/images/Project2/Screenshot from 2024-06-22 00-09-03.png"}
              alt=""
              loading="lazy"
              className="w-full md:h-[375px] rounded-xl"
            />
            <img
              src={"/images/Project2/Screenshot from 2024-06-22 00-09-11.png"}
              alt=""
              loading="lazy"
              className="w-full md:h-[375px] rounded-xl"
            />
          </Slider>
        </div>
      </div>
      <div
        ref={pro3}
        className="opacity-0 w-full border-2 border-[#f3bb7796] px-5 py-12 rounded-xl flex  flex-col-reverse md:flex-row gap-4 my-6"
      >
        <div className="md:w-[45%] w-full">
          <h1 className="md:text-2xl text-xl font-bold ">
            Task Tracker /{" "}
            <span className="md:text-xl text-lg fontColor">task manager</span>
          </h1>
          <p className="my-5">
            Task Trackr is a state-of-the-art web application tailored for
            efficient task management.it offers a seamless user experience with
            distinct backend and frontend functionalities.
          </p>
          <h2 className="font-semibold text-lg fontColor">Tech Used</h2>
          <div className="w-full mt-2 mb-6 flex justify-start md:gap-4 gap-2">
            <i className="ci ci-2x ci-react"></i>
            <i className="ci ci-2x ci-mysql"></i>
            <i className="ci ci-2x ci-redis"></i>
            <i className="ci ci-2x ci-ts"></i>
            <i className="ci ci-2x ci-expressjs"></i>
            <i className="ci ci-2x ci-nodejs"></i>
          </div>
          <div className="w-full my-3 flex gap-2">
            <a
              href="https://github.com/JayashSaini/TaskTracker-Frontend"
              target="_blank"
            >
              <button className="py-2 px-5 flex items-center justify-center gap-2 text-sm bg-white text-black rounded-md hover:shadow-md hover:shadow-black hover:px-10 duration-150 ease-in-out">
                <i className="ci ci-ci-ci-xl ci-github"></i>
                Frontend
              </button>
            </a>
            <a
              href="https://github.com/JayashSaini/taskTracker-Backend"
              target="_blank"
            >
              <button className="py-2 px-5 flex items-center justify-center gap-2 text-sm bg-white text-black rounded-md hover:shadow-md hover:shadow-black hover:px-10 duration-150 ease-in-out">
                <i className="ci ci-ci-ci-xl ci-github"></i>
                Backend
              </button>
            </a>
          </div>
          <a href="https://tasktrackerbyjayash.vercel.app/" target="_blank">
            <button className="w-full py-3 bg-color hover:bg-[#31221c] hover:tracking-wider rounded-[5px] flex justify-center items-center gap-1">
              Task Tracker
            </button>
          </a>
        </div>
        <div className="md:w-[55%] w-full overflow-hidden">
          <Slider {...settings}>
            <img
              src={"/images/Project3/Screenshot from 2024-06-21 23-45-57.png"}
              alt=""
              loading="lazy"
              className="w-full md:h-[375px] rounded-xl"
            />
            <img
              src={"/images/Project3/Screenshot from 2024-06-21 23-46-07.png"}
              alt=""
              loading="lazy"
              className="w-full md:h-[375px] rounded-xl"
            />
            <img
              src={"/images/Project3/Screenshot from 2024-06-21 23-50-31.png"}
              alt=""
              loading="lazy"
              className="w-full md:h-[375px] rounded-xl"
            />
            <img
              src={"/images/Project3/Screenshot from 2024-06-21 23-50-44.png"}
              alt=""
              loading="lazy"
              className="w-full md:h-[375px] rounded-xl"
            />
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Projects;
