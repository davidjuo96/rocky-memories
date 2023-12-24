"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const heroSection = () => {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
      >
        <div className="grid grid-cols-1 sm:grid-cols-12">
          <div className="col-span-7 place-self-center text-center sm:text-left">
            <h1 className="text-white mb-4 text-3xl sm:text-5xl lg:text-6xl font-extrabold">
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#2D4978] via-[#560104] to-red-700">
                Hola, visitante.
                <br />
              </span>
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Soy Rocky",
                  2000, // wait 2s before replacing
                  "Soy un robot",
                  2000,
                  "Soy increible",
                  2000,
                  "Feliz navidad",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>
            <div>
              <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-[#2D4978] via-[#560104] to-red-700 hover:text-black text-white border border-white mt-3">
                Button 1
              </button>
              <button className="px-6 py-3 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-800 text-white border border-white mt-3">
                Button 2
              </button>
            </div>
          </div>
          <div className="col-span-5 place-self-center mt-4 lg:mt-0">
            <div className="rounded-full w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] relative">
              <Image
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                src="/images/logo.png"
                alt="hero image"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default heroSection;
