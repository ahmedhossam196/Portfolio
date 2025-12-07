import React from "react";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import javascript from "../../assets/javascript.png";
import reactImage from "../../assets/react.png";
import nextjs from "../../assets/nextjs.png";
import github from "../../assets/github.png";
import tailwind from "../../assets/tailwind.png";
import Bootstrap from "../../assets/BootStrap.png";
import cplus from "../../assets/cplus.png";
import c from "../../assets/c.png";
import java from "../../assets/java.png";
import python from "../../assets/python.png";
import { Sparkles } from "lucide-react";

const Skills = () => {
const techs = [
// Frontend Skills
{ id: 1, src: html, title: "HTML", style: "shadow-orange-500" },
{ id: 2, src: css, title: "CSS", style: "shadow-blue-500" },
{ id: 3, src: javascript, title: "JavaScript", style: "shadow-yellow-500" },
// Frameworks & Libraries
{ id: 4, src: reactImage, title: "React", style: "shadow-blue-600" },
{ id: 5, src: tailwind, title: "Tailwind", style: "shadow-sky-400" },
{ id: 6, src: nextjs, title: "Next JS", style: "shadow-white" },
{ id: 7, src: Bootstrap, title: "Bootstrap", style: "shadow-purple-500" },
// Programming Languages under Tools/GitHub
{ id: 8, src: c, title: "C", style: "shadow-blue-400" },
{ id: 9, src: cplus, title: "C++", style: "shadow-blue-500" },
{ id: 10, src: java, title: "Java", style: "shadow-yellow-500" },
{ id: 11, src: python, title: "Python", style: "shadow-yellow-300" },
{ id: 12, src: github, title: "GitHub", style: "shadow-gray-400" },
];

return ( <div name="skills" className="w-full py-20 text-white"> <div className="max-w-5xl mx-auto p-4 flex flex-col justify-center w-full">

    {/* Header */}
    <div className="text-center mb-12" data-aos="fade-down" data-aos-duration="800">
      <h2
        className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#6366f1] to-[#a855f7]"
        data-aos="zoom-in-up"
        data-aos-duration="600"
      >
        Skills
      </h2>
      <span
        className="mt-2 text-gray-400 max-w-2xl text-base sm:text-lg flex items-center justify-center gap-2 mx-auto"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <Sparkles className="w-6 h-6 text-purple-400" />
        Crafting digital experiences with code and creativity
        <Sparkles className="w-6 h-6 text-purple-400" />
      </span>
    </div>

    {/* Skills Grid */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 text-center py-8">
      {techs.map(({ id, src, title, style }) => (
        <div
          key={id}
          className={`rounded-xl shadow-lg ${style} 
          bg-white/5 backdrop-blur-md border border-white/10
          p-6 flex flex-col items-center justify-center
          transform transition duration-300 hover:scale-105 
          hover:shadow-xl hover:shadow-cyan-500/20`}
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay={id * 100}
        >
          <img src={src} alt={title} className="w-20 h-20 object-contain" />
          <p className="mt-4 text-lg font-medium text-gray-200">{title}</p>
        </div>
      ))}
    </div>

  </div>
</div>


);
};

export default Skills;
