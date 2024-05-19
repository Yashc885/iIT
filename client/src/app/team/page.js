"use client";
import React from "react";
import TeamSection from "@/components/TeamSection";
import { NavbarSimple } from "@/components/NavbarFolder/Navbar";
import { Header } from "@/components/NavbarFolder/Header";
import { TopSection } from "@/components/NavbarFolder/TopSection";
import { LeftBody } from "@/components/Body/LeftBody";
import {RightSection} from "@/components/Body/RightSection";

export default function page () {
  return (
    <div className="bg-[#DDDDDD]">
        <TopSection />
        <Header />
        <div className="mx-[13%]">
          <div className="max-w-screen-xl px-auto bg-[#ffffff]">
            <div className="p-2">
              <NavbarSimple />
              <div className=" flex mt-[1.5rem] justify-between">
              <div className="w-[25%]">
                <LeftBody />
              </div>
                <div className=" ml-2 mr-2 w-[50%]">
                <TeamSection />
                </div>
                <div className="w-[25%]">
                <RightSection />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}