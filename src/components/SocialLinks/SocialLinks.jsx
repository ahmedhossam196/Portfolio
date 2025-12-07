import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import cv from "../../../public/Ahmed-Hossam-CV.pdf"
const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/ahmedhossam28/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/ahmedhossam196",
    },
    {
      id: 3,
      child: (
        <>
      Gmail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:ahmedhossam2874@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: cv,
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed animate-fadeInLeft">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              `flex justify-between items-center w-44 h-14 px-4 ml-[-120px] hover:-ml-2.5 
              hover:rounded-md duration-300  bg-linear-to-r from-[#5f27cd] to-[#341f97] 
              shadow-lg shadow-cyan-500/30 text-white font-medium ` + style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
