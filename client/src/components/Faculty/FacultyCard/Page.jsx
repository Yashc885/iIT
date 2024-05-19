"use client"
import React, { createContext } from 'react';
import Image from "next/image";
import Link from "next/link";

export default function Page(props) {
    const { title, name, post, image, description, resume } = props;

    return (
        <div className="my-[1rem]">
            <div className="flex flex-col md:flex-row justify-center">
                <div className="w-full md:w-1/3 bg-white grid place-items-center">
                    <Image
                        src={image}
                        className="rounded-xl"
                        alt="faculty image"
                        width={100}
                        height={100}
                    />
                </div>
                <div className="w-full md:w-2/3 bg-white p-3">
                    <h3 className="font-black text-gray-800 md:text-3xl text-xl">{title} {name}</h3>
                    <p className="italic font-semibold">{post}</p>
                    <p className="text-gray-500 text-base text-justify">{description}</p>
                    <div className="mt-3 flex w-[90%] ">
                        <div className="mb-2 w-[30%]">
                            <a href={resume} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Resume</a>
                        </div>
                        <div className="mb-2 w-[70%]">
                            <Link href="research" className="text-blue-500 hover:underline">Research</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
