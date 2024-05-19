"use client";
import React from "react";
import Faculty from "@/components/Faculty";
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
                <LeftBody className="w-[15%]"/>
                <Faculty classname="w-[50%]"/>
                <RightSection className="w-[15%]"/>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}