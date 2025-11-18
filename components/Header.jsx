import React, { useState } from "react";
import { motion } from "motion/react";

const a = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.1,
    },
  },
};
const b = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      ease: "easeIn",
      duration: 0.5,
    },
  },
};
const c = {
  hidden: { opacity: 0, x: "100%" },
  visible: {
    opacity: 1,
    x: "0",
    transition: {
      staggerChildren: 0.25,
      ease: "easeOut",
      duration: 1,
    },
  },
};

export default function NavbarBasic() {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  return (
    <>
      {/*<!-- Component: Basic Navbar --> */}
      <header
        id="home"
        className=" relative z-20 w-full after:absolute after:left-0 after:top-full after:z-10 after:block after:h-px after:w-full lg:after:hidden"
      >
        <motion.div
          variants={a}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative mx-auto w-full container max-w-[1450px] px-6 "
        >
          <nav
            aria-label="main navigation"
            className="flex h-[5.5rem] items-stretch justify-between"
            role="navigation"
          >
            {/*      <!-- Brand logo --> */}
            <motion.a
              id="WindUI"
              aria-label="WindUI logo"
              aria-current="page"
              className="flex items-center gap-2 whitespace-nowrap py-3 focus:outline-none"
              href="/"
              variants={b}
            >
              <img
                className="w-full max-w-[45px] object-cover"
                src="logo.png"
              />
            </motion.a>
            {/*      <!-- Mobile trigger --> */}
            <button
              className={`relative order-10 block h-10 w-10 self-center lg:hidden
                ${
                  isToggleOpen
                    ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(2)]:-rotate-45 [&_span:nth-child(3)]:w-0 "
                    : ""
                }
              `}
              onClick={() => setIsToggleOpen(!isToggleOpen)}
              aria-expanded={isToggleOpen ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              <div className="absolute left-1/2 top-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-200 transition-all duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-6 transform rounded-full bg-slate-200 transition duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-200 transition-all duration-300"
                ></span>
              </div>
            </button>
            {/*      <!-- Navigation links --> */}
            <motion.ul
              variants={c}
              role="menubar"
              aria-label="Select page"
              className={`absolute left-0 top-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-black px-8 pb-12 pt-24 transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 font-bold text-white ${
                isToggleOpen
                  ? "visible opacity-100 backdrop-blur-sm"
                  : "invisible opacity-0"
              }`}
            >
              <motion.li
                variants={c}
                role="none"
                className="flex items-stretch"
              >
                <a
                  role="menuitem"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:opacity-80 focus:opacity-100 focus:outline-none focus-visible:outline-none lg:px-8 uppercase"
                  href="#home"
                >
                  <span>Home</span>
                </a>
              </motion.li>
              <motion.li
                variants={c}
                role="none"
                className="flex items-stretch"
              >
                <a
                  role="menuitem"
                  aria-current="page"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:opacity-80 focus:opacity-100 focus:outline-none focus-visible:outline-none lg:px-8 uppercase"
                  href="#about"
                >
                  <span>About</span>
                </a>
              </motion.li>
              <motion.li
                variants={c}
                role="none"
                className="flex items-stretch"
              >
                <a
                  role="menuitem"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:opacity-80 focus:opacity-100 focus:outline-none focus-visible:outline-none lg:px-8 font-bold uppercase"
                  href="#token"
                >
                  <span>Tokenomics</span>
                </a>
              </motion.li>
              <motion.li
                variants={c}
                role="none"
                className="flex items-stretch"
              >
                <a
                  role="menuitem"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:opacity-80 focus:opacity-100 focus:outline-none focus-visible:outline-none lg:px-8 font-bold uppercase"
                  href="#buy"
                >
                  <span>Buy</span>
                </a>
              </motion.li>
            </motion.ul>
          </nav>
        </motion.div>
      </header>
      {/*<!-- End Basic Navbar--> */}
    </>
  );
}
