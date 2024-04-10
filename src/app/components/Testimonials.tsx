import React from "react";
import './Testimonials.css'
import star from '../../assets/star.svg'
import { Button } from "./Button";

const Testimonials = () => {
  return (
    <>
      <div className="flex justify-between  mb-[2rem] px-[22rem]">
        <div className="flex flex-col w-[40%] justify-center">
          <h1 style={{lineHeight:"4rem"}} className="text-5xl mb-10">OUR CLIENTS LOVE WHAT WE DO</h1>{" "}
          <p  className="text-lg mb-8">
            Over 100 companies trusted our approaches and as a result get the
            highest level of satisfaction!
          </p>
          <div className="items-start">

          <Button />
          </div>
        </div>
        <div className="review-card rounded-md w-[500px] p-10 h-[400px]">
            <img width={250} src={star.src} alt="" />
            <p className="mt-10 mb-10 text-lg">Huge thanks to the Designer :s for the clear and prompt execution of our orders. We often need "URGENT". So thank you for excellent quality and speed of order execution!</p>
            <h1 className="mt-10 text-3xl text-gray-400">NOVAIR AGENCY</h1>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
