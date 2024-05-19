"use client";
import React, { useState } from "react";
import  NewsletterCard  from "@/components/NewsLetter/NewsletterCard";

export default function Newsletter() {
  const [selectedYear, setSelectedYear] = useState(null);

  const handleYearClick = (year) => {
    setSelectedYear(year);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold mt-8 mb-4">Newsletter</h1>
      <div className="flex mt-4 space-x-4">
        {[2021, 2022, 2023, 2024].map((year) => (
          <button
            key={year}
            className={`px-4 py-2 rounded-md text-white ${selectedYear === year ? "bg-blue-600" : "bg-blue-400"}`}
            onClick={() => handleYearClick(year)}
          >
            {year}
          </button>
        ))}
      </div>
      {selectedYear && <NewsletterCard year={selectedYear} />}
    </div>
  );
}
