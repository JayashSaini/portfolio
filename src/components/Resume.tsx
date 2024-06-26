"use client";
import Link from "next/link";
const Resume = () => {
  const downloadUrl =
    "https://drive.google.com/uc?export=download&id=1MI8TQOTfINapudKwDwz-EWiBIK-M_pdd";

  https: return (
    <Link
      href={downloadUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-color hover:bg-color duration-200 ease-in-out text-[#f2f1e7] font-bold md:py-3 md:px-6 px-4 py-2 border-[1px]  border-[#ffffffab] rounded focus:outline-none focus:shadow-outline md:text-lg text-sm"
    >
      Download Resume
    </Link>
  );
};

export default Resume;
