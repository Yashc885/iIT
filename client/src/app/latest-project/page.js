import React from "react";
import { NavbarSimple } from "@/components/NavbarFolder/Navbar";
import {LatestProject}  from "@/components/LatestProject/LatestProject";
import { Header } from "@/components/NavbarFolder/Header";
import { TopSection } from "@/components/NavbarFolder/TopSection";
export default function page () {
    return (
        <div className="text-bold">
        <div className="items-center">
        <TopSection />
        <div className="mx-[13%]">
           <Header />
             <NavbarSimple />
        </div>   
            <LatestProject />
        </div>
        </div>
    )
}