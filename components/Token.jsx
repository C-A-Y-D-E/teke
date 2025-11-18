import React from "react";
import { motion } from "motion/react";

const Token = () => {
  const tokenomicsData = [
    { label: "name", value: "akhal teke" },
    { label: "symbol", value: "teke" },
    { label: "supply", value: "88,888,888" },
    { label: "tax", value: "2%" },
    { label: "liquidity", value: "locked" },
    { label: "contract", value: "0xc468Fd1B6724Cf1447f\n73080950299658433046a" },
  ];
  return (
    <>
      <section
        id="token"
        className="border-x-[#feb400] border-b-[15px] border-b-[#feb400] border-x-[15px]"
      >
        <motion.div
          className="w-full container max-w-[1450px] mx-auto px-6 py-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-full grid max-w-[1200px] lg:grid-cols-2 place-items-center gap-8 mx-auto">
            <div className="w-full space-y-8 h-full">
              <motion.h1
                className="text-white max-lg:text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-14 lg:mb-20"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Tokenomics
              </motion.h1>
              {tokenomicsData.map((item, index) => (
                <motion.div
                  key={index}
                  className="space-y-[-30px] lg:pl-5"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <motion.h1
                    className="uppercase text-5xl md:text-6xl text-white/20 font-black"
                    whileHover={{
                      scale: 1.05,
                      color: "rgba(254, 180, 0, 0.3)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.label}
                  </motion.h1>
                  <h3 className="text-white text-lg md:text-xl lg:text-2xl uppercase font-bold whitespace-pre-line">
                    {item.value}
                  </h3>
                </motion.div>
              ))}
            </div>
            <motion.img
              className="w-full max-w-[700px] h-full object-cover"
              src="token.png"
              initial={{ opacity: 0, scale: 0.8, x: 50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
            />
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Token;
