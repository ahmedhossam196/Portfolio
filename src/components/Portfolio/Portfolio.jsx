import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Projects from "./Projects";
import Certificates from "./Certificates";
import { Code2, Ribbon, Sparkles } from "lucide-react";

const Portfolio = () => {
const [activeTab, setActiveTab] = useState("projects");
const [direction, setDirection] = useState(1); // 1 = right to left, -1 = left to right

const handleTabClick = (tab) => {
if (tab !== activeTab) {
setDirection(tab === "projects" ? -1 : 1);
setActiveTab(tab);
}
};

const variants = {
enter: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
center: { x: 0, opacity: 1 },
exit: (dir) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
};

return ( <section
   id="portfolio"
   className="flex flex-col items-center justify-start px-6 lg:px-20 py-12"
   data-aos="fade-up"
   data-aos-duration="800"
 >
{/* Header */} <div
     className="text-center mb-12"
     data-aos="fade-down"
     data-aos-duration="800"
   > <h2
       className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#6366f1] to-[#a855f7]"
       data-aos="zoom-in-up"
       data-aos-duration="600"
     >
Portfolio </h2> <span
       className="mt-2 text-gray-400 max-w-2xl text-base sm:text-lg flex items-center justify-center gap-2 mx-auto"
       data-aos="fade-up"
       data-aos-duration="800"
     > <Sparkles className="w-6 h-6 text-purple-400" />
Showcasing my projects and certifications with smooth animations <Sparkles className="w-6 h-6 text-purple-400" /> </span> </div>

  {/* Tabs */}
  <div
    className="w-full flex flex-col items-center mb-10"
    data-aos="fade-right"
    data-aos-duration="800"
  >
    <div className="flex justify-center w-full px-4">
      <div className="flex bg-[#0d1025] rounded-2xl gap-4 w-full max-w-5xl mx-auto">
        <button
          onClick={() => handleTabClick("projects")}
          className={`cursor-pointer flex-1 flex flex-col items-center justify-center gap-2 px-4 py-5 rounded-xl font-bold text-lg transition-all duration-300
            ${activeTab === "projects"
              ? "bg-linear-to-r from-[#5f27cd] to-[#341f97] text-white shadow-lg scale-105"
              : "text-gray-400 hover:text-white hover:scale-105"
            }`}
        >
          <Code2 size={28} />
          <span>Projects</span>
        </button>

        <button
          onClick={() => handleTabClick("certificates")}
          className={`cursor-pointer flex-1 flex flex-col items-center justify-center gap-2 px-6 py-5 rounded-xl font-bold text-lg transition-all duration-300
            ${activeTab === "certificates"
              ? "bg-linear-to-r from-[#5f27cd] to-[#341f97] text-white shadow-lg scale-105"
              : "text-gray-400 hover:text-white hover:scale-105"
            }`}
        >
          <Ribbon size={28} />
          <span>Certificates</span>
        </button>
      </div>
    </div>
  </div>

  {/* Tab Content */}
  <div className="w-full px-4 md:px-10">
    <AnimatePresence custom={direction} mode="wait">
      {activeTab === "projects" && (
        <motion.div
          key="projects"
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <Projects />
        </motion.div>
      )}
      {activeTab === "certificates" && (
        <motion.div
          key="certificates"
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <Certificates />
        </motion.div>
      )}
    </AnimatePresence>
  </div>
</section>


);
};

export default Portfolio;
