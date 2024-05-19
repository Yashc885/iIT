"use client";
import React from "react";
import { NavbarSimple } from "@/components/NavbarFolder/Navbar";
import { Header } from "@/components/NavbarFolder/Header";
import { TopSection } from "@/components/NavbarFolder/TopSection";
import About from "@/components/About/About"
export default function page () {
    return (
        <>
        <div className="bg-[#DDDDDD]">
          <TopSection />
          <Header />
          <div className="mx-[13%]">
            <div className=" max-w-screen-xl px-auto bg-[#ffffff]">
              <div className="p-2">
                <NavbarSimple />
                <div className="  mt-[1.5rem] justify-between">
                    <About />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
}


