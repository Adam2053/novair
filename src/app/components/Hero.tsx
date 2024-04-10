"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import logo from "../../assets/logo.png";
import { Moving } from "./Moving";
import { Button } from "./Button";

export function Hero() {
  return (
    <>
      <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-start justify-start dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <p className="text-4xl sm:text-9xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-2">
          GET STARTED <br /> WITH YOUR <br /> HVAC BUSINESS HERE
        </p>

        <div className="absolute top-0 flex justify-center items-center left-8 ml-[10%]">
          <img
            style={{ height: "150px", width: "150px" }}
            src={logo.src}
            alt=""
          />
          <p style={{transform:"translateX(-35px)"}} className="text-4xl flex sm:text-7xl font-bold z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-2">
            OVAIR
          </p>
        </div>
        <Button />
      </div>

      {/* <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          NOVAIR <br /> <p className="text-4xl">Start Your HVAC Business with us</p>
          <Moving />
        </motion.h1>
      </LampContainer>
      <img
        className="absolute top-0 left-0 ml-[10%]"
        style={{ height: "150px", width: "150px" }}
        src={logo.src}
        alt=""
      /> */}
    </>
  );
}
