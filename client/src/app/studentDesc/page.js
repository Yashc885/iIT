import React from "react";
import StudentDesc from "@/components/Student/StudentDesc";
import { NavbarSimple } from "@/components/NavbarFolder/Navbar";
import { Header } from "@/components/NavbarFolder/Header";
import { TopSection } from "@/components/NavbarFolder/TopSection";

export default function Page() {
    return (
        <div className="">
            <TopSection />
            <Header />
            <div className="mx-[13%]">
                <NavbarSimple />
                <div className="max-w-screen-xl px-auto text-bold">
                    <StudentDesc />
                </div>
            </div>
        </div>
    );
}
