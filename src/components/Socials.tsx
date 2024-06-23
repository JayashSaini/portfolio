"use client";
import { motion } from "framer-motion";
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
    icon: "./socialIcons/discord.svg",
    delay: 1.5,
    link: "https://discord.com/users/1026106296149221467",
    name: "discord",
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
    <div className="z-40 flex w-full items-center justify-center mt-14 gap-4 ">
      {icons.map((icon, index) => (
        <motion.div
          key={index}
          initial={{ y: 0 }}
          animate={{
            y: [-13, 0, -13],
            transition: {
              duration: 2,
              repeat: Infinity,
              delay: icon.delay,
              ease: "easeInOut",
            },
          }}
          whileHover={{
            scale: 1.2,
            transition: {
              duration: 0.2,
            },
          }}
        >
          <TooltipProvider delayDuration={90}>
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
        </motion.div>
      ))}
    </div>
  );
};
export default Socials;
