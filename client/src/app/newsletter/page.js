"use client";
import React from "react";
import NewsLetter  from "@/components/NewsLetter/NewsLetter";
import { NavbarSimple } from "@/components/NavbarFolder/Navbar";
import { Header } from "@/components/NavbarFolder/Header";
import { TopSection } from "@/components/NavbarFolder/TopSection";
import { LeftBody } from "@/components/Body/LeftBody";
import { RightSection } from "@/components/Body/RightSection";
export default function page () {
    return (
        <div >
        <TopSection />
            <div className="mx-[13%]">
                <Header />
                <NavbarSimple />
                <div className="max-w-screen-xl px-auto py-2  text-bold">
                <div className="flex">
                <div className="w-[25%]"><LeftBody/></div>
                <div className="w-[50%]"><NewsLetter/></div>
                <div className="w-[25%]"><RightSection /></div>
                </div>
                </div>
            </div>
        </div>
    )
}