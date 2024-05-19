import React from "react";

export function Header() {
  return (
    <div className="">
      <div className="flex justify-center items-center">
        <div className="w-[90%] max-w-screen-xl px-4">
          <div className="flex items-center">
            <div className="w-1/5 flex justify-end">
              <img
                src="https://www.msit.in/static/img/msit.png"
                alt="MSIT logo"
                className="h-auto w-3/4 md:w-3/4 lg:w-1/3" 
              />
            </div>
            <div className="pb-10"></div>
            <div className="w-4/5">
              <div className="pl-6">
                <h2 className="text-sm md:text-xl lg:text-2xl font-bold"> 
                  Department of Information Technology (IT)
                </h2>
                <h6 className="text-base md:text-sm lg:text-xl text-black-800 "> 
                  Maharaja Surajmal Institute of Technology
                </h6>
                <div className="pb-5"></div>
              </div>
            </div>
            <div className="mt-5"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
