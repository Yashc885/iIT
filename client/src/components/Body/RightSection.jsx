import React from 'react';

export function RightSection() {
  return (
    <>
      <div className="rounded-xl bg-whit h-60 shadow-xl">
        <div className="w-full bg-[#35374B] text-xs text-center sm:text-sm lg:text-base font-semibold text-white rounded-t-xl p-1">
          <h2>Tasks</h2>
        </div>
        <div className="bg-white rounded-b-xl p-3">
          <div>
            <div>
              <div>
                <h5 className="text-blue-500 p-1 sm:text-sm lg:text-base">Upcoming Tasks</h5>
                <hr className="border-gray-300" />
                <h4 className="text-black text-md md:text-lg underline "> Title</h4>
                <p className="py-6 text-gray-700 text-md md:text-lg ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, autem! Molestiae, expedita.</p>
                <h5 className="text-blue-500 p-1 sm:text-sm lg:text-base">Recent Tasks</h5>
                <hr className="border-gray-300" />
                <h4 className="text-black text-md md:text-lg underline "> Title</h4>
                <p className="py-6 text-gray-700 text-md md:text-lg ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, autem! Molestiae, expedita.</p>
                <h5 className="text-blue-500 p-1 sm:text-sm lg:text-base">Recent Tasks</h5>
                <hr className="border-gray-300" />
                <h4 className="text-black text-md md:text-lg underline "> Title</h4>
                <p className="py-6 text-gray-700 text-md md:text-lg ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, autem! Molestiae, expedita.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RightSection;
