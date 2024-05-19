"use client";
import React from 'react';
import Image from "next/image"
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
const StudentsDesc = () => {
  return (
    <div className="font-sans  rounded-lg shadow-xl bg-black text-white w-full">
      <div className="wrapper">
      <div className="flex py-6  items-center justify-center">
         <h1 className="text-2xl font-bold relative">
            Tanay Agarwal
         <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500"></span>
     </h1>
</div>
<div className='w-[90%] mx-auto flex justify-center items-center'>
  <p className="py-3 text-md sm:text-lg md:text-md lg:text-lg xl:text-xl">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum dolor cupiditate nostrum vero dolorum
    necessitatibus placeat eius odit saepe! Harum accusantium magni ex tempora dolorem recusandae, illum ad
    reiciendis, magnam explicabo fuga alias consequatur, aut debitis maxime. Aperiam vel, fugit in, sequi quis
    expedita corporis quas autem esse amet sit.
  </p>
</div>
<div className="flex justify-center items-center w-full ">
      <div className="w-3/5">
        <div className="flex justify-center">
          <div className="w-full max-w-full">
            <Image
              src="https://images.unsplash.com/photo-1682547094964-dd621debede3?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODQxNDMxNjl8&ixlib=rb-4.0.3&q=85"
              alt="A beautiful image"
              width={1920}
              height={1080}
            />
          </div>
        </div>
      </div>
    </div>
     
    <div className="py-12 flex flex-col justify-center items-center">
      <h2 className="text-3xl font-bold mb-6"> Record</h2>
      <hr className="w-3/4 self-center" />
      <div className="w-full max-w-md">
        <table className="table-auto mx-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">Sem</th>
              <th className="px-4 py-2">Attendance %</th>
              <th className="px-4 py-2">CGPA</th> 
            </tr>
          </thead>
          <tbody>
            {[...Array(8)].map((_, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">Sem {index + 1}</td>
                <td className="border px-4 py-2">Attendance%</td>
                <td className="border px-4 py-2">CGPA</td> 
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
        <hr className="w-3/4 self-center" />
        <div className="flex justify-center space-x-4">
      <FaLinkedin size={32} color="#0077B5" />
      <FaTwitter size={32} color="#1DA1F2" />
      <FaGithub size={32} color="#211F1F" />
    </div>
       
      </div>
    </div>
  );
}

export default StudentsDesc;
