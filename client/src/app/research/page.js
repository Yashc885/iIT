"use client";
import React from "react";
import { NavbarSimple } from "@/components/NavbarFolder/Navbar";
import Index from "@/components/Misc/index.jsx";
import { Header } from "@/components/NavbarFolder/Header";
import { TopSection } from "@/components/NavbarFolder/TopSection";
export default function page () {
    return (
        <div >
        <TopSection />
            <div className="mx-[13%]">
                <Header />
                <NavbarSimple />
                <div className="max-w-screen-xl px-auto py-2  text-bold">
                  <Index />
                </div>
            </div>
        </div>
    )
}