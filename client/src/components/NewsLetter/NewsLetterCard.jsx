"use client";
import React from "react";

export default function NewsletterCard({ year }) {
  return (
    <div className="py-8">
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700 py-6">
      <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
    <div className="p-5">
      <div href="#" className="font-semibold text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-600">
        <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions {year}</h5>
      </div>
      <p className="mb-3 text-lg text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of {year} so far, in reverse chronological order.</p>
      <a href="#" className="inline-flex items-center px-4 py-2 text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Read more
        <svg className="rtl:rotate-180 w-5 h-5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
      </a>
    </div>
  </div>
  </div>
  );
}