import React from 'react';

export function LeftBody() {
  return (
    <div className="rounded-xl bg-white h-60 shadow-xl">
      <div className="w-full bg-[#35374B] text-xs sm:text-sm lg:text-base text-center font-semibold text-white rounded-t-xl p-1">
        <h2>Announcement</h2>
      </div>
      <div className="bg-white rounded-b-xl p-3">
         <div>
            <div>
                <div>
                    <h3 className="text-blue-700 p-1 sm:text-md lg:text-lg">General</h3>
                    <hr className="border-gray-300" />
                    <h4 className="text-black text-md md:text-lg underline "> Title</h4>
                    <p className="py-6 text-gray-700 text-md md:text-lg ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, autem! Molestiae, expedita.</p>
                    <h3 className= " text-blue-700 p-1 sm:text-md lg:text-lg">JOBS</h3>
                    <hr className="border-gray-300" />
                    <h4 className="text-black text-md md:text-lg underline "> Title</h4>
                    <p className="py-6 text-gray-700 text-md md:text-lg ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, autem! Molestiae, expedita.</p>
                    <h3 className="text-blue-700 p-1 sm:text-md lg:text-lg">Admission & Results</h3>
                    <hr className="border-gray-300" />
                    <h4 className="text-black text-md md:text-lg underline "> Title</h4>
                    <p className="py-6 text-gray-700 text-md md:text-lg ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, autem! Molestiae, expedita.</p>
                </div>
            </div>
         </div>
      </div>
    </div>
  );
}

export default LeftBody;
