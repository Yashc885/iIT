import React from 'react';
import Image from "next/image";
import { HOD } from "@/Assets/Logos/msit.png";

export function About() {
  return (
    <div className="text-bold justify-center  justify items-center">
      <div className="bg-[#EADBC8] py-8 w-full text-center">
        <h1 className="text-2xl text-extrabold md:text-xl sm:text-lg text-black uppercase underline">
          ABOUT US
        </h1>
        <p className="py-6 flex justify-center justify  items-center px-6">
  Information Technology is the most prominent and rapidly developing field in today's world. To maintain speed with the latest trends in the Information Technology industry, our Information Technology department is fully empowered. Our fully air-conditioned laboratories contain a sufficient number of computer systems with the latest hardware and software configuration. Since IT is composed of data processing and transmission, we have the latest communication hardware and software with proper multimedia support for each system. A very high-speed internet connection is available in the labs. Net surfing is provided to the students as per their requirements. Guest faculty specialized in respective fields of Information Technology are invited from time to time to keep students in touch with the latest trends in technology and to broaden their spectrum of knowledge. All facilities in the labs are continuously examined and upgraded whenever required. The department has well-qualified and experienced faculty for guiding students in the right direction. Our aim here is to expose students to the latest and growing technologies which help them to become highly skilled IT professionals.
</p>

      </div>
      <div className="mt-6">
        <div className="mx-auto md:flex">
          <div className="w-full md:w-1/4 text-center">
            <div className="pt-12">
              <Image
                src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                className="w-24 h-24 rounded-full mx-auto md:mx-0"
                alt="HOD"
                width={100}
                height={100}
              />
              <p className="text-md font-bold text-[#041C32] mt-4">
                Dr. Sunesh Malik
              </p>
              <p className="text-sm text-[#041C32] italic">
                HOD
              </p>
              <p className="text-sm text-[#041C32] italic">
                INFORMATION TECHNOLOGY
              </p>
            </div>
          </div>
          <div className="w-full md:w-3/4">
            <div className="px-6">
              <p className="text-md md:text-lg text-black mt-2 mb-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in
              </p>

              <p className="text-md md:text-lg text-black mt-2 mb-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in
              </p>

              <p className="text-md md:text-lg text-black mt-2 mb-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in
              </p>

              <h4 className="text-lg md:text-xl font-semibold text-black mt-2 mb-2">
                Faculty unit and about our esteemed team:
              </h4>
              <ul className="list-disc pl-6">
                <li className="text-md md:text-lg text-black mt-2 mb-2">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                </li>
                <li className="text-md md:text-lg text-black mt-2 mb-2">
                  an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                </li>
                <li className="text-md md:text-lg text-black mt-2 mb-2">
                  but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in
                </li>
              </ul>

              <p className="text-md md:text-lg text-black mt-2 mb-2">
                We look forward to staying connected with you and updating you with all the circulars and comments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
