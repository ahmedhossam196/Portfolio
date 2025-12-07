import "./Home.module.css";
import Lottie from "lottie-react";
import devAnimation from "../../ReactBitsComponents/Darker/Darker.json";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import RotatingText from '../../ReactBitsComponents/RotatingText/RotatingText';
import cv from "../../../public/Ahmed-Hossam-CV.pdf"
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const lottieRef = useRef();

  useEffect(() => {
    AOS.init({ once: false, duration: 800 });
  }, []);

  const socialLinkClasses = "text-white hover:text-[#a855f7] transition-colors duration-300 text-3xl";

  return (
    <section id="home" className="hero h-lvh flex items-center justify-center px-2 lg:px-20">
      <div className="flex flex-col lg:flex-row items-center lg:items-center justify-center w-full max-w-7xl gap-10">

        {/* LEFT SECTION */}
        <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-6">

          {/* Animated Title with AOS */}
          <div data-aos="zoom-in" data-aos-duration="800">
            <div className="flex items-baseline gap-3">
              <RotatingText
                texts={['Frontend', 'Software']}
                mainClassName="text-white text-5xl md:text-7xl font-extrabold"
                staggerFrom="last"
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '-120%' }}
                staggerDuration={0.045}
                splitLevelClassName="overflow-hidden pb-0.5"
                transition={{ type: 'spring', damping: 28, stiffness: 300 }}
                rotationInterval={2000}
              />
              <span className="bg-linear-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent text-5xl md:text-7xl font-extrabold">
                Developer
              </span>
            </div>
          </div>

          {/* Paragraph with AOS */}
          <p
            className="text-justify text-lg md:text-xl text-gray-300 max-w-xl"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            I specialize in building modern, responsive web applications using React, Next.js, and Tailwind CSS. I’m passionate about writing clean, efficient code and designing smooth, intuitive user experiences.
          </p>

          {/* Social Icons with AOS */}
          <div className="flex justify-center items-center gap-10 pt-6" data-aos="fade-up" data-aos-duration="1200">
            <div className="flex gap-6">
              <a href="https://github.com/ahmedhossam196" target="_blank" rel="noopener noreferrer"><FaGithub className={socialLinkClasses} /></a>
              <a href="https://www.linkedin.com/in/ahmedhossam28/" target="_blank" rel="noopener noreferrer"><FaLinkedin className={socialLinkClasses} /></a>
              <a href="https://wa.me/201154346699" target="_blank" rel="noopener noreferrer"><FaWhatsapp className={socialLinkClasses} /></a>
              <a href="https://www.instagram.com/ahmed_hossaam74" target="_blank" rel="noopener noreferrer"><FaInstagram className={socialLinkClasses} /></a>
              <a href="mailto:ahmedhossam2874@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope className={socialLinkClasses} /></a>
            </div>

            <a href="../../../public/Ahmed-Hossam-CV.pdf"  download className="bg-linear-to-r from-[#6366f1] to-[#a855f7] text-white font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-[#a855f7]/40">
              Download CV
            </a>
          </div>
        </div>

        {/* RIGHT SECTION */}
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
              onLoadedImages={() => { lottieRef.current.setSpeed(0.5); }}
              animationData={devAnimation}
              className="max-w-[500px]"
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
