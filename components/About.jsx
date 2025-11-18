import { useState } from "react";
import { motion } from "motion/react";

const About = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  return (
    <>
      <section
        id="about"
        className=" mt-[-4.4%] 4xl:mt-[-2%] border-x-[#feb400] border-b-[15px] border-b-[#feb400] border-x-[15px] w-full"
      >
        <div className="w-full container max-w-[1450px] mx-auto px-6 py-16 md:pt-24 lg:pt-48 lg:pb-20">
          <motion.div
            className="w-full"
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
              About TEKE
            </motion.h1>
            <motion.div className="w-full space-y-8 text-white text-center">
              <motion.p
                className="w-full max-w-[900px] mx-auto font-extrabold text-lg md:text-xl lg:text-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                In the ancient deserts of Central Asia, legends spoke of a
                creature faster than the wind the Akhal-Teke, the Golden Horse.{" "}
                <br /> A symbol of victory, royalty, and prosperity… a creature
                believed to bring fortune to those who rode beside it.
              </motion.p>
              {isToggleOpen && (
                <motion.div
                  className="w-full space-y-8"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.p
                    className="w-full max-w-[900px] mx-auto font-extrabold text-lg md:text-xl lg:text-2xl"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    In the ancient deserts of Central Asia, legends spoke of a
                    creature faster than the wind the Akhal-Teke, the Golden
                    Horse. A symbol of victory, royalty, and prosperity… a
                    creature believed to bring fortune to those who rode beside
                    it.
                  </motion.p>
                  <motion.p
                    className="w-full max-w-[900px] mx-auto font-extrabold text-lg md:text-xl lg:text-2xl"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    Centuries later, that legend returns to the blockchain as
                    TEKE a modern meme born from ancient power.
                  </motion.p>
                  <motion.p
                    className="w-full max-w-[900px] mx-auto font-extrabold text-lg md:text-xl lg:text-2xl"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    TEKE carries a total supply of 88,888,888, an extremely
                    lucky pattern in e culture. Eight represents prosperity and
                    endless fortune, and eight repeated becomes a symbol of
                    continuous rising wealth. TEKE isn't just a token it's a
                    myth re-awakened, coded with luck, speed, and destiny.
                  </motion.p>
                  <motion.p
                    className="w-full max-w-[900px] mx-auto font-extrabold text-lg md:text-xl lg:text-2xl"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                  >
                    Where other memes jump, TEKE runs. Where others fade, TEKE
                    charges. And where PEPE made history, TEKE delivers the
                    second chance the market has been waiting for.
                  </motion.p>
                  <motion.p
                    className="w-full max-w-[900px] mx-auto font-extrabold text-lg md:text-xl lg:text-2xl"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                  >
                    This is the Golden Horse of BNB Chain fast like a stallion,
                    loyal like a classic meme, and blessed with the luck of
                    eight eternal cycles of fortune.
                  </motion.p>
                  <motion.p
                    className="w-full max-w-[900px] mx-auto font-extrabold text-lg md:text-xl lg:text-2xl"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                  >
                    If you missed PEPE… don't miss TEKE. The horse has begun its
                    charge and fortune follows those who run with it.
                  </motion.p>
                </motion.div>
              )}

              <motion.button
                onClick={() => setIsToggleOpen(!isToggleOpen)}
                className="text-center pb-2 border-b border-b-[#FEB400] font-pop font-medium"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isToggleOpen ? "Show less" : "Read more..."}
              </motion.button>
              <motion.div
                className="w-full max-w-[400px] mx-auto flex max-lg:flex-col justify-center gap-4 items-center font-pop font-medium"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <motion.a
                  className="bg-[#FEB400] py-2 w-full shadow-[inset_0px_0px_20px_1px_rgba(255,255,255)] text-xl md:text-2xl lg:text-3xl"
                  href="/"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "inset 0px 0px 30px 3px rgba(255,255,255)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  Buy
                </motion.a>
                <motion.a
                  className="bg-[#FEB400] py-2 w-full shadow-[inset_0px_0px_20px_1px_rgba(255,255,255)] text-xl md:text-2xl lg:text-3xl"
                  href="/"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "inset 0px 0px 30px 3px rgba(255,255,255)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  Chart
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
