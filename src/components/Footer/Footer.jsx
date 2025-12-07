import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full text-center text-gray-400 py-8 mt-20 border-t border-white/10">
      {" "}
      <div className="flex flex-col items-center gap-2">
        {" "}
        <p>
          © {new Date().getFullYear()} Ahmed Hossam. All rights reserved.
        </p>{" "}
        <div className="flex gap-6 mt-2">
          {" "}
          <a
            href="https://github.com/ahmedhossam196"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition transform hover:scale-110"
          >
            {" "}
            <FaGithub className="w-5 h-5" />{" "}
          </a>{" "}
          <a
            href="https://www.linkedin.com/in/ahmedhossam196/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition transform hover:scale-110"
          >
            {" "}
            <FaLinkedin className="w-5 h-5" />{" "}
          </a>{" "}
          <a
            href="mailto:ahmedhossam2874@gmail.com"
            className="hover:text-white transition transform hover:scale-110"
          >
            {" "}
            <FaEnvelope className="w-5 h-5" />{" "}
          </a>{" "}
        </div>{" "}
      </div>{" "}
    </footer>
  );
};

export default Footer;
