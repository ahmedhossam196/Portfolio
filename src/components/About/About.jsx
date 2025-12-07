import React from "react";
import { motion } from "framer-motion";
import ProfileCard from "../../ReactBitsComponents/ProfileCard/ProfileCard";
import { Sparkles, FileText, Code } from "lucide-react";
import HossImg from "../../assets/smile.png";
// import cv from "../../../public/Ahmed-Hossam-CV.pdf"
export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-start px-6 lg:px-20 py-12"
    >
      {/* Linear Title */}
      <div className="text-center mb-12">
        <div className="inline-block relative group">
          <h2
            className="text-4xl font-bold md:text-5xl  text-transparent bg-clip-text bg-linear-to-r from-[#6366f1] to-[#a855f7]"
            data-aos="zoom-in-up"
            data-aos-duration="600"
          >
            About Me
          </h2>
        </div>
        <p
          className="mt-2 text-gray-400 max-w-2xl text-base sm:text-lg flex items-center justify-center gap-2 mx-auto"
          data-aos="zoom-in-up"
          data-aos-duration="800"
        >
          <Sparkles className="w-5 h-5 text-purple-400" />
          Transforming ideas into digital experiences
          <Sparkles className="w-5 h-5 text-purple-400" />
        </p>
      </div>

      {/* Content: Left Details + Right ProfileCard */}
      <div className="flex flex-col lg:flex-row items-start gap-16 max-w-6xl w-full">
        {/* LEFT – Detailed Text */}
        <div className="space-y-6 text-center lg:text-left -mt-8">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#6366f1] to-[#a855f7]">
              Hello, I'm
            </span>
            <span
              className="block mt-2 text-gray-200"
              data-aos="fade-right"
              data-aos-duration="1300"
            >
              Ahmed Hossam
            </span>
          </h2>

          <p
            className="text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed text-justify pb-4 sm:pb-0"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            A Computer Engineering graduate passionate about building modern,
  interactive, and user-friendly web applications. I specialize in
  Front-End development using React, Next.js, and Tailwind CSS. I enjoy
  turning ideas into visually appealing and efficient digital solutions,
  and I continuously strive to improve my skills and create impactful
  experiences for users and businesses.
          </p>

          {/* Quote Box */}
         <div
  className="relative bg-linear-to-br from-[#6366f1]/5 via-transparent to-[#a855f7]/5 border border-linear-to-r border-[#6366f1]/30 rounded-2xl p-4 my-4 backdrop-blur-md shadow-2xl overflow-hidden"
  data-aos="fade-up"
  data-aos-duration="800"
>
  {/* Left floating orb */}
  <div className="absolute top-2 right-4 w-16 h-16 bg-linear-to-r from-[#6366f1]/20 to-[#a855f7]/20 rounded-full blur-xl"></div>
  {/* Right floating orb */}
  <div className="absolute -bottom-4 -left-2 w-12 h-12 bg-linear-to-r from-[#a855f7]/20 to-[#6366f1]/20 rounded-full blur-lg"></div>

  {/* Left quote icon */}
  <svg
    className="absolute top-1/2 left-4 -translate-y-1/2 text-[#6366f1] opacity-30"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
  </svg>

  {/* Quote text */}
  <blockquote className="text-gray-300 text-center italic font-medium text-base relative z-10 mx-8">
    Hard work beats talent when talent doesn’t work hard.
  </blockquote>

  {/* Right quote icon */}
  <svg
    className="absolute top-1/2 right-4 -translate-y-1/2 text-[#6366f1] opacity-30 rotate-180"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
  </svg>
</div>


          {/* Buttons */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-4 lg:px-0 w-full">
            <a
              href= "https://drive.google.com/file/d/1OeSX5tWJenM7I9mzrYWOENBkG2aLKLmY/view?usp=sharing"
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full lg:w-auto"
            >
              <button
                data-aos="fade-up"
                data-aos-duration="800"
                className="w-full cursor-pointer lg:w-auto sm:px-6 py-2 sm:py-3 rounded-lg bg-linear-to-r from-[#6366f1] to-[#a855f7] text-white font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center lg:justify-start gap-2 shadow-lg hover:shadow-xl"
              >
                <FileText className="w-4 h-4 sm:w-5 sm:h-5" /> Download CV
              </button>
            </a>
            <a href="#portfolio" className="w-full lg:w-auto">
              <button
                data-aos="fade-up"
                data-aos-duration="1000"
                className="w-full cursor-pointer lg:w-auto sm:px-6 py-2 sm:py-3 rounded-lg border border-[#a855f7]/50 text-[#a855f7] font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center lg:justify-start gap-2 hover:bg-[#a855f7]/10"
              >
                <Code className="w-4 h-4 sm:w-5 sm:h-5" /> View Projects
              </button>
            </a>
          </div>
        </div>

        {/* RIGHT – Profile Card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
          className="lg:w-1/2 flex justify-center"
        >
          <ProfileCard
            name="Ahmed Hossam"
            title="Frontend Developer | Software Engineer"
            handle="Hoss"
            status="Online"
            contactText="Contact Me"
            avatarUrl={HossImg}
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
            onContactClick={() => console.log("Contact clicked")}
          />
        </motion.div>
      </div>
    </section>
  );
}
