
"use client";
import React from "react";
import {Students}  from "@/components/Students"
import { NavbarSimple } from "@/components/NavbarFolder/Navbar";
import { Header } from "@/components/NavbarFolder/Header";
import { TopSection } from "@/components/NavbarFolder/TopSection";
import { LeftBody } from "@/components/Body/LeftBody";
import {RightSection} from "@/components/Body/RightSection";

export default function page () {
  return (
    <div className="bg-[#DDDDDD]">
        <TopSection />
        <div className="mx-[13%]">
        <Header />
          <div className=" max-w-screen-xl px-auto bg-[#ffffff]">
            <div className="p-2">
              <NavbarSimple />
              <div className=" flex mt-[1.5rem] justify-between">
                {/* <LeftBody className=""/> */}
                <div className="">
                  <div className="items-center justify-center ">
                    <Students />
                  </div>
                </div>
                {/* <RightSection className="" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}