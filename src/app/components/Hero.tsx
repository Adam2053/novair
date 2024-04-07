"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import logo from "../../assets/logo.png";
import { Moving } from "./Moving";

export function Hero() {
  return (
    <>
      <LampContainer>
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
      />
    </>
  );
}
