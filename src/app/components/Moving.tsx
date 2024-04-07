"use client";
import React from "react";
import { Button } from "./ui/moving-border";

export function Moving() {
  return (
    <div>
      <Button
        borderRadius="1.75rem"
        className=" bg-white w-[10rem] text-[1.2rem] font-bold dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        Book A Call Now
      </Button>
    </div>
  );
}
