"use client";
import React from "react";
import {Mission}  from "@/components/mission/Mission";
import { NavbarSimple } from "@/components/NavbarFolder/Navbar";
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
                <Mission />
                </div>
            </div>
        </div>
    )
}