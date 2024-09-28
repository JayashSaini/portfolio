"use client";
import Link from "next/link";
const Resume = () => {
  const downloadUrl =
    "https://drive.google.com/uc?export=download&id=12CVh74sSC6yaCj7INbhomx9i8xCc-Ix3";

  https: return (
    <Link
      href={downloadUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-orange-400 duration-200 ease-in-out text-white font-bold md:py-3 md:px-6 px-4 py-2  md:rounded-[8px] rounded-[4px] focus:outline-none focus:shadow-outline text-sm"
      download={"Jayash Saini Resume"}
    >
      Download Resume
    </Link>
  );
};

export default Resume;
// https://drive.google.com/file/d/1yht02kC690MPfCW6sJrCdPtlWnb1cTdL/view?usp=sharing
