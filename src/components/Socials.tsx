"use client";
import Link from "next/link";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const icons = [
  {
    icon: "./socialIcons/github.svg",
    delay: 0,
    link: "https://github.com/JayashSaini/",
    name: "github",
  },
  {
    icon: "./socialIcons/linkedin.svg",
    delay: 0.5,
    link: "https://www.linkedin.com/in/jayash-saini-371bb0267/",
    name: "linkedin",
  },
  {
    icon: "./socialIcons/twitter.svg",
    delay: 1.5,
    link: "https://twitter.com/JayashSaini73",
    name: "twitter",
  },
  {
    icon: "./socialIcons/instagram.svg",
    delay: 2,
    link: "https://www.instagram.com/jayash_7361/",
    name: "instagram",
  },
  {
    icon: "./socialIcons/gmail.svg",
    delay: 2,
    link: "mailto:Jayash%20Saini%20%3cjayashysaini7361@gmail.com%3e",
    name: "email",
  },
];
const Socials: React.FC = () => {
  return (
    <div className="z-40 flex w-full items-center justify-center mt-8 gap-4 ">
      {icons.map((icon, index) => (
        <TooltipProvider delayDuration={90} key={index}>
          <Tooltip>
            <TooltipTrigger>
              <Link href={icon.link} target="_blank">
                <img src={icon.icon} className="md:w-7 w-6"></img>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-sm text-[#1d1716]">{icon.name}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </div>
  );
};
export default Socials;
