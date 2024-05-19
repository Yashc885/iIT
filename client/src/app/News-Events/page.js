"use client";
import React from "react";
import { NavbarSimple } from "@/components/NavbarFolder/Navbar";
import { Header } from "@/components/NavbarFolder/Header";
import { TopSection } from "@/components/NavbarFolder/TopSection";
import { LeftBody } from "@/components/Body/LeftBody";
import {RightSection} from "@/components/Body/RightSection";
import {HorizontalCard} from "@/components/NewsAndEvents/NewsAndEvents";

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

                <div className="mx-5 w-[70%]">
                    <HorizontalCard className="mb-5"/>
                    <HorizontalCard className="mb-5"/>
                    <HorizontalCard className="mb-5"/>                    
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}