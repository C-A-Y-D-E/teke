import React from "react";
import { motion } from "motion/react";

const a = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.03,
      delayChildren: 0.7,
    },
  },
};
const b = {
  hidden: { opacity: 0, scale: 0.5, rotate: "-10deg" },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: "0deg",
    transition: {
      ease: "easeInOut",
      duration: 1,
    },
  },
};
const c = {
  hidden: { opacity: 0, y: "100%" },
  visible: {
    opacity: 1,
    y: "0",
    transition: {
      staggerChildren: 0.25,
      ease: "easeOut",
      duration: 1,
    },
  },
};
const d = {
  hidden: { opacity: 0, scaleX: 0 },
  visible: {
    opacity: 1,
    scaleX: 1,
    transition: {
      delay: 1,
      staggerChildren: 0.25,
      ease: "easeOut",
      duration: 1,
    },
  },
};

const Hero = () => {
  return (
    <>
      <section className="w-full overflow-hidden ">
        <motion.div
          variants={a}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="w-full container max-w-[1450px] mx-auto px-6 max-lg:py-16 lg:pt-16"
        >
          <div className="w-full lg:min-h-[700px] flex flex-col items-center gap-8 relative">
            <motion.div className="w-full flex flex-col gap-8 max-lg:items-center items-start">
              <motion.div
                variants={c}
                className="text-[#FEB400] flex flex-col max-lg:text-center lg:items-start text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold"
              >
                <motion.h1 variants={c} className=" bg-white p-1 mb-1">
                  TEKE  The Lore of the
                </motion.h1>
                <motion.span variants={c} className="bg-white p-1">
                  Golden Horse
                </motion.span>
              </motion.div>
              <motion.div variants={d} className="flex items-center gap-3">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  variants={d}
                  href="/"
                >
                  <img
                    className="w-full max-w-[50px] object-cover"
                    src="tele.png"
                  />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  variants={d}
                  href="https://x.com/AkhalTeke_BNB"
                >
                  <img
                    className="w-full max-w-[50px] object-cover"
                    src="x.png"
                  />
                </motion.a>
              </motion.div>
            </motion.div>
            <motion.img
              variants={b}
              className="w-full max-w-[1050px] xl:max-w-[1100px] object-cover lg:absolute lg:right-[7%] lg:bottom-[-5%] z-20"
              src="hero.png"
            />
          </div>
        </motion.div>
      </section>
      <div className="w-full bg-[#FEB400] h-[70px] lg:h-[145px] 5xl:h-[168px] 2xl:h-[150px] -skew-y-[4.7deg] 2xl:-skew-y-[2deg] mt-[-105px] md:mt-[-120px] lg:mt-[-70px] 4xl:-skew-y-[1deg] 5xl:-skew-y-[0.2deg]" />
    </>
  );
};

export default Hero;
