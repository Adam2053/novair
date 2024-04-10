import React from "react";
import { Button } from "./Button";
import yt from "../../assets/yt.svg";

const Love = () => {
  return (
    <>
      <div className=" flex flex-col justify-center mt-10 h-[50lvh]">
        <h1 className="text-5xl mb-10">Curious How We Do It?</h1>
        <Button />
      </div>
      <div className="h-[1px] w-[80vw] m-5 mb-8 bg-slate-500"></div>
      <div className="mb-[10rem] w-[70vw]  flex justify-between ">
        <h1 className="text-3xl flex justify-between text-gray-500">
          &copy;2024 Novair Agency All Rights Reserved
        </h1>
        <div className="flex gap-5">
          <img src={yt.src} alt="" />
          <img src={yt.src} alt="" />
          <img src={yt.src} alt="" />
          <img src={yt.src} alt="" />
        </div>
      </div>
    </>
  );
};

export default Love;
