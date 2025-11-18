import React from "react";
import { motion } from "motion/react";

const Buy = () => {
  return (
    <>
      <section
        id="buy"
        className=" pb-4 md:pb-8 border-x-[#feb400] border-b-[15px] border-b-[#feb400] border-x-[15px]"
      >
        <motion.div
          className="w-full container max-w-[1450px] mx-auto px-6 pt-16 max-md:pb-5 lg:pt-16 lg:pb-10 xl:pb-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-white text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-14 lg:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            How to buy
          </motion.h1>
          <div className="w-full max-w-[1200px] mx-auto grid lg:grid-cols-2 place-items-center gap-8 mb-12 lg:mb-16">
            <Box
              h1="Step 1 — Get a Wallet"
              l1="Install MetaMask or Trust Wallet."
              l2="Add BNB Smart Chain if needed (Network RPC: BSC)."
              display="hidden"
              index={0}
            />
            <Box
              h1="Step 2 — Fund with BNB"
              l1="Buy BNB on your preferred exchange (Binance, etc.)."
              l2="Withdraw to your wallet BEP-20 (BSC) address."
              display="hidden"
              index={1}
            />
            <Box
              h1="Step 3 — Go to PancakeSwap"
              l1="Open PancakeSwap > Swap."
              l2="Select BNB → $TEKE."
              l3="Paste the contract: 0xYOURCONTRACT…"
              index={2}
            />
            <Box
              h1="Step 4 — Swap"
              l1="Set slippage (usually 0–2%; adjust only if needed)."
              l2="Confirm the transaction."
              l3="You're in — welcome to the swamp."
              index={3}
            />
          </div>
          <div className="w-full relative text-center md:pt-20">
            <motion.h1
              className="text-[#FEB400]/20 text-nowrap font-extrabold text-[115px] md:text-[250px] lg:text-[300px] xl:text-[400px] 2xl:text-[500px]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              TEKE
            </motion.h1>
            <motion.div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.img
                className="w-full max-w-[850px] lg:max-w-[900px] xl:max-w-[1050px] 2xl:max-w-[1250px] object-cover"
                src="buy.png"
                initial={{ scale: 0.9, rotate: -5 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
              />
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Buy;

const Box = ({ h1, l1, l2, l3, display, index }) => {
  return (
    <motion.div
      className="w-full h-full bg-[#FEB400] rounded-2xl p-6 lg:p-8 space-y-6 uppercase"
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 20px 40px rgba(254, 180, 0, 0.4)",
        transition: { duration: 0.3 },
      }}
    >
      <motion.h1
        className="text-xl md:text-2xl lg:text-3xl font-extrabold"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.4 + index * 0.15 }}
      >
        {h1}
      </motion.h1>
      <motion.div
        className="space-y-1 md:text-lg text-white pl-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 + index * 0.15 }}
      >
        <li className={``}>{l1}</li>
        <li className={` `}>{l2}</li>
        <li className={`${display} `}>{l3}</li>
      </motion.div>
    </motion.div>
  );
};
