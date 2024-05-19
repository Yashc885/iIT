"use client";
import React from "react";
import { NavbarSimple } from "@/components/NavbarFolder/Navbar";
import { Header } from "@/components/NavbarFolder/Header";
import { TopSection } from "@/components/NavbarFolder/TopSection";
import { LeftBody } from "@/components/Body/LeftBody";
import {RightSection} from "@/components/Body/RightSection";
import NoticeDesc from "@/components/Notices/NoticeDesc";

export default function page () {
  return (
    <div className="bg-[#DDDDDD]">
        <TopSection />
        <Header />
        <div className="mx-[13%]">
          <div className="max-w-screen-xl px-auto bg-[#ffffff]">
            <div className="p-2">
              <NavbarSimple  />
                    <NoticeDesc className="mb-5"/>              
              </div>
            </div>
          </div>
        </div>
  );
}