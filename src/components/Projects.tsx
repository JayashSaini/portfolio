"use client";
import Slider from "react-slick";

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

  return (
    <div className="w-full md:py-10 py-2 ">
      <h2 className="  md:text-4xl text-2xl mb-14 fontColor font-bold pb-5 border-b-[1px] border-[#0000008e] ">
        Projects
      </h2>
      <div className="  w-full border-2 border-[#00000060] px-5 sm:py-12 py-8 rounded-xl flex  flex-col-reverse md:flex-row gap-4 my-6">
        <div className="md:w-[45%] w-full">
          <h1 className="md:text-2xl text-xl font-bold text-neutral-800">
            ChicChat /{" "}
            <span className="md:text-xl text-lg text-black">
              Real Time Chat Platform
            </span>
          </h1>
          <p className="my-5 sm:block hidden text-neutral-700">
          Developed ChicChat, a real-time chat and video streaming web app using the MERN stack and Socket.IO for
seamless messaging and low-latency video calls.

          </p>

        <div className="md:block hidden">
        <h2 className="font-semibold text-lg text-neutral-800 mt-5">Tech Used</h2>
          <div className="w-full mt-2 mb-6 flex justify-start md:gap-4 gap-2">
            <i className="ci ci-2x ci-react"></i>
            <i className="ci ci-2x ci-mongodb"></i>
            <i className="ci ci-2x ci-ts"></i>
            <i className="ci ci-2x ci-expressjs"></i>
            <i className="ci ci-2x ci-nodejs"></i>
            <i className="ci ci-2x ci-tailwindcss"></i>
          </div>
        </div>
          <div className="w-full my-3 flex gap-2">
            <a
              href="https://github.com/JayashSaini/ChicChat-Frontend"
              target="_blank"
            >
              <button className="py-2 px-5 flex items-center justify-center gap-2 text-sm bg-white text-[#111111] rounded-[4px]  hover:px-10 duration-150 ease-in-out border-[1px] border-[#303030]">
                <i className="ci ci-ci-ci-xl ci-github"></i>
                Frontend
              </button>
            </a>
            <a
              href="https://github.com/JayashSaini/ChicChat-Backend"
              target="_blank"
            >
              <button className="py-2 px-5 flex items-center justify-center gap-2 text-sm bg-white text-[#111111] rounded-[4px]  hover:px-10 duration-150 ease-in-out border-[1px] border-[#303030]">
                <i className="ci ci-ci-ci-xl ci-github"></i>
                Backend
              </button>
            </a>
          </div>
          <a href="https://chicchat.vercel.app/" target="_blank">
            <button className="w-full py-4 bg-black text-white hover:tracking-wider rounded-[5px] flex justify-center items-center gap-1">
              ChicChat
            </button>
          </a>
        </div>
        <div className="md:w-[55%] w-full overflow-hidden border-[1px] border-[#2020205d] rounded-xl">
          <Slider {...settings}>
            <img
              src={"/images/Project2/chicchat1.png"}
              alt=""
              loading="lazy"
              className="w-full md:h-[375px] rounded-xl"
            />
            <img
              src={"/images/Project2/chicchat2.png"}
              alt=""
              loading="lazy"
              className="w-full md:h-[375px] rounded-xl"
            />
            <img
              src={"/images/Project2/chicchat3.png"}
              alt=""
              loading="lazy"
              className="w-full md:h-[375px] rounded-xl"
            />
            <img
              src={"/images/Project2/chicchat4.png"}
              alt=""
              loading="lazy"
              className="w-full md:h-[375px] rounded-xl"
            />
            <img
              src={"/images/Project2/chicchat5.png"}
              alt=""
              loading="lazy"
              className="w-full md:h-[375px] rounded-xl"
            />
          </Slider>
        </div>
      </div>
      <div className="  w-full border-2 border-[#00000060] px-5 sm:py-12 py-8 rounded-xl flex  flex-col-reverse md:flex-row gap-4 my-6">
        <div className="md:w-[45%] w-full">
          <h1 className="md:text-2xl text-xl font-bold text-neutral-800">
            WebWorld /{" "}
            <span className="md:text-xl text-lg text-black">
              Learning Platform
            </span>
          </h1>
          <p className="my-5 sm:block hidden text-neutral-700">
            An online learning platform designed for aspiring web developers.
            Whether you&apos;re just starting or looking to sharpen your skills,
            Web World offers comprehensive resources to help you grow as a
            developer.
          </p>
          <div className="md:block hidden">

          <h2 className="font-semibold text-lg text-neutral-800 mt-5">Tech Used</h2>
          <div className="w-full mt-2 mb-6 flex justify-start md:gap-4 gap-2">
            <i className="ci ci-2x ci-react"></i>
            <i className="ci ci-2x ci-mongodb"></i>
            <i className="ci ci-2x ci-redis"></i>
            <i className="ci ci-2x ci-ts"></i>
            <i className="ci ci-2x ci-expressjs"></i>
            <i className="ci ci-2x ci-nodejs"></i>
            <i className="ci ci-2x ci-tailwindcss"></i>
          </div>
          </div>
          <div className="w-full my-3 flex gap-2">
            <a
              href="https://github.com/JayashSaini/WebWorld-Frontend"
              target="_blank"
            >
              <button className="py-2 px-5 flex items-center justify-center gap-2 text-sm bg-white text-[#111111] rounded-[4px]  hover:px-10 duration-150 ease-in-out border-[1px] border-[#303030]">
                <i className="ci ci-ci-ci-xl ci-github"></i>
                Frontend
              </button>
            </a>
            <a
              href="https://github.com/JayashSaini/WebWorld-Backend"
              target="_blank"
            >
              <button className="py-2 px-5 flex items-center justify-center gap-2 text-sm bg-white text-[#111111] rounded-[4px]  hover:px-10 duration-150 ease-in-out border-[1px] border-[#303030]">
                <i className="ci ci-ci-ci-xl ci-github"></i>
                Backend
              </button>
            </a>
          </div>
          <a href="https://webworld.vercel.app/" target="_blank">
            <button className="w-full py-4 bg-black text-white hover:tracking-wider rounded-[5px] flex justify-center items-center gap-1">
              WebWorld
            </button>
          </a>
        </div>
        <div className="md:w-[55%] w-full overflow-hidden border-[1px] border-[#2020205d] rounded-xl">
          <Slider {...settings}>
            <img
              src={"/images/Project3/p1.png"}
              alt=""
              loading="lazy"
              className="w-full md:h-[375px] rounded-xl"
            />
            <img
              src={"/images/Project3/p2.png"}
              alt=""
              loading="lazy"
              className="w-full md:h-[375px] rounded-xl"
            />
            <img
              src={"/images/Project3/p3.png"}
              alt=""
              loading="lazy"
              className="w-full md:h-[375px] rounded-xl"
            />
            <img
              src={"/images/Project3/p4.png"}
              alt=""
              loading="lazy"
              className="w-full md:h-[375px] rounded-xl"
            />
            <img
              src={"/images/Project3/p5.png"}
              alt=""
              loading="lazy"
              className="w-full md:h-[375px] rounded-xl"
            />
          </Slider>
        </div>
      </div>
      <div className="  w-full border-2 border-[#00000060] px-5 sm:py-12 py-8 rounded-xl flex  flex-col-reverse md:flex-row gap-4 my-6">
        <div className="md:w-[45%] w-full">
          <h1 className="md:text-2xl text-xl font-bold ">
            Shoes Hub /{" "}
            <span className="md:text-xl text-lg text-neutral-800">e-commerce</span>
          </h1>
          <p className="my-5 sm:block hidden text-neutral-700">
            Shoes Hub is a cutting-edge e-commerce platform. Designed for shoe
            enthusiasts, it promises seamless functionality and a captivating
            UI/UX for an exceptional shopping journey.
          </p>
          <div className="md:block hidden">
          <h2 className="font-semibold text-lg text-neutral-800 mt-5">Tech Used</h2>
          <div className="w-full mt-2 mb-6 flex justify-start md:gap-4 gap-2">
            <i className="ci ci-2x ci-react"></i>
            <i className="ci ci-2x ci-redux"></i>
            <i className="ci ci-2x ci-mongodb"></i>
            <i className="ci ci-2x ci-redis"></i>
            <i className="ci ci-2x ci-ts"></i>
            <i className="ci ci-2x ci-tailwindcss"></i>
            <i className="ci ci-2x ci-nodejs"></i>
          </div>
          </div>
          <div className="w-full my-3 flex gap-2">
            <a
              href="https://github.com/JayashSaini/ShoesHubFrontend"
              target="_blank"
            >
              <button className="py-2 px-5 flex items-center justify-center gap-2 text-sm bg-white text-[#111111] rounded-[4px]  hover:px-10 duration-150 ease-in-out border-[1px] border-[#303030]">
                <i className="ci ci-ci-ci-xl ci-github"></i>
                Frontend
              </button>
            </a>
            <a
              href="https://github.com/JayashSaini/ShoesHubBackend/"
              target="_blank"
            >
              <button className="py-2 px-5 flex items-center justify-center gap-2 text-sm bg-white text-[#111111] rounded-[4px]  hover:px-10 duration-150 ease-in-out border-[1px] border-[#303030]">
                <i className="ci ci-ci-ci-xl ci-github"></i>
                Backend
              </button>
            </a>
          </div>
          <a href="https://online-shoeshub.vercel.app/" target="_blank">
          <button className="w-full py-4 bg-black text-white hover:tracking-wider rounded-[5px] flex justify-center items-center gap-1">
              Shoes Hub
            </button>
          </a>
        </div>
        <div className="md:w-[55%] w-full overflow-hidden rounded-xl border-[1px] border-[#2020205d]">
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
    </div>
  );
};

export default Projects;
