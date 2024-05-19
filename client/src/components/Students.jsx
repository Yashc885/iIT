import React from 'react';
import Link from "next/link";
export function StudentCard({ name, major, image }) {
  return (
    <div>
    <div className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-4xl mx-auto mb-8 border-black border-2">
      <div className="max-w-full sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg mx-auto overflow-hidden bg-white border border-gray-200 rounded-lg shadow-lg">
        <img className="w-full" src={image} alt={`${name}'s profile`} />
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{name}</h5>
          </a>
          <p className="mb-3 font-normal text-gray-700">{major}</p>
          <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
            View Resume
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </a>
          <div className="flex justify-between mt-3">
            <a href="#" className="text-blue-700 hover:text-blue-800">LinkedIn</a>
            <a href="#" className="text-blue-700 hover:text-blue-800">Twitter</a>
            <a href="#" className="text-blue-700 hover:text-blue-800">GitHub</a>
          </div>
          <div className="py-3 border-2 border-grey-400">
          <div className="w-full bg-blue-400 text-white text-lg md:text-xl lg:text-2xl">
            <a href="/studentDesc">
              <button>
                View Profile
              </button>
            </a>
          </div>
        </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export function Students() {
  const students = [
    { name: 'John Doe', major: 'Computer Science', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Y4afQM8N9eJA9LvdJi3pGpJuOqbjI28LZxqMJZotVA&s' },
    { name: 'Jane Smith', major: 'Engineering', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Y4afQM8N9eJA9LvdJi3pGpJuOqbjI28LZxqMJZotVA&s' },
    { name: 'Alice ', major: 'Mathematics', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Y4afQM8N9eJA9LvdJi3pGpJuOqbjI28LZxqMJZotVA&s' },
    { name: 'John Doe', major: 'Computer Science', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Y4afQM8N9eJA9LvdJi3pGpJuOqbjI28LZxqMJZotVA&s' },
    { name: 'Jane Smith', major: 'Engineering', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Y4afQM8N9eJA9LvdJi3pGpJuOqbjI28LZxqMJZotVA&s' },
    { name: 'Alice ', major: 'Mathematics', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Y4afQM8N9eJA9LvdJi3pGpJuOqbjI28LZxqMJZotVA&s' },
    
  ];

  return (
    <div className="w-full ">
    <div>
        <p className="text-[40px] font-black text-center">Student List</p>
      </div>
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 m lg:grid-cols-3 gap-6 w-[90%]">
      {students.map((student, index) => (
        <StudentCard key={index} {...student} />
      ))}
    </div>
    </div> 
  );
}
