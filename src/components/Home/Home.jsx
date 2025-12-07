/* Home.jsx */
import React, { useRef, useEffect } from "react";
import Lottie from "lottie-react";
import devAnimation from "../../ReactBitsComponents/Darker/Darker.json";
import { motion } from "framer-motion";
import RotatingText from "../../ReactBitsComponents/RotatingText/RotatingText";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const NAV_HEIGHT = 80; // match navbar height

export default function Home() {
const lottieRef = useRef();

useEffect(() => {
AOS.init({ once: false, duration: 800 });
if (lottieRef.current) lottieRef.current.setSpeed(0.5);
}, []);

const socialLinks = [
{ icon: FaGithub, url: "[https://github.com/ahmedhossam196](https://github.com/ahmedhossam196)" },
{ icon: FaLinkedin, url: "[https://www.linkedin.com/in/ahmedhossam28/](https://www.linkedin.com/in/ahmedhossam28/)" },
{ icon: FaWhatsapp, url: "[https://wa.me/201154346699](https://wa.me/201154346699)" },
{ icon: FaInstagram, url: "[https://www.instagram.com/ahmed_hossaam74](https://www.instagram.com/ahmed_hossaam74)" },
{ icon: FaEnvelope, url: "mailto:ahmedhossam2874@gmail.com" },
];

return ( <section
   id="home"
   className="hero flex items-center justify-center px-2 lg:px-20 pt-20 min-h-screen"
 > <div className="flex flex-col lg:flex-row items-center lg:items-center justify-center w-full max-w-7xl gap-10">
{/* LEFT */} <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-6"> <div data-aos="zoom-in" data-aos-duration="800"> <div className="flex items-baseline gap-3">
<RotatingText
texts={["Frontend", "Software"]}
mainClassName="text-white text-5xl md:text-7xl font-extrabold"
staggerFrom="last"
initial={{ y: "100%" }}
animate={{ y: 0 }}
exit={{ y: "-120%" }}
staggerDuration={0.045}
splitLevelClassName="overflow-hidden pb-0.5"
transition={{ type: "spring", damping: 28, stiffness: 300 }}
rotationInterval={2000}
/> <span className="bg-linear-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent text-5xl md:text-7xl font-extrabold">
Developer </span> </div> </div>
      <p
        className="text-left md:text-justify text-lg md:text-xl text-gray-300 max-w-xl"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        I specialize in building modern, responsive web applications using React, Next.js, and Tailwind CSS. I’m passionate about writing clean, efficient code and designing smooth, intuitive user experiences.
      </p>

      <div className="flex justify-center items-center gap-10 pt-6" data-aos="fade-up" data-aos-duration="1200">
        <div className="flex gap-6">
          {socialLinks.map(({ icon: Icon, url }, i) => (
            <a key={i} href={url} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#a855f7] transition-colors duration-300 text-3xl">
              <Icon />
            </a>
          ))}
        </div>

        <a
          href="https://drive.google.com/file/d/1OeSX5tWJenM7I9mzrYWOENBkG2aLKLmY/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-linear-to-r from-[#6366f1] to-[#a855f7] text-white font-semibold px-6 py-3 rounded-xl hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-[#a855f7]/40"
        >
          Download CV
        </a>
      </div>
    </div>

    {/* RIGHT */}
    <motion.div
      className="pb-8 lg:w-1/2 flex justify-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.8, type: "spring", stiffness: 120 }}
      data-aos="fade-left"
      data-aos-duration="1000"
    >
      <motion.div
        whileHover={{ scale: 1.15, rotate: 2, y: -10 }}
        transition={{ type: "spring", stiffness: 200, damping: 12 }}
        className="rounded-2xl p-4"
      >
        <Lottie
          lottieRef={lottieRef}
          animationData={devAnimation}
          className="max-w-[500px]"
        />
      </motion.div>
    </motion.div>
  </div>
</section>


);
}
