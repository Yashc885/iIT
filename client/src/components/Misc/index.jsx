// pages/Misc/index.jsx
'use client'; 
import React, { useState, useEffect } from 'react';
import Research from '@/components/Misc/Research.jsx'; 

export default function Index() {
  const [selectedButton, setSelectedButton] = useState('Journal');
  const [selectedData, setSelectedData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  if (error) {
    return <p>Error fetching data: {error.message}</p>;
  }

    return (
        <div>
            <div>
                <p className="text-[40px] font-black text-center">{selectedButton} List</p>
            </div>
            <div className="w-[90%] mt-1rem mx-auto">
                <Research selectedData={selectedData} />
            </div>
            <div className="flex gap-4 py-3 mt-3">
                <button
                    className={`border-4 border-black px-4 py-2 rounded-md hover:bg-gray-100 hover:border-gray-500 focus:outline-none focus:border-gray-500 ${
                        selectedButton === 'Journal' ? 'underline' : ''
                    }`}
                    onClick={() => setSelectedButton("Journal")}
                >
                    Journal
                </button>
                <button
                    className={`border-4 border-black px-4 py-2 rounded-md hover:bg-gray-100 hover:border-gray-500 focus:outline-none focus:border-gray-500 ${
                        selectedButton === 'Conference' ? 'underline' : ''
                    }`}
                    onClick={() => setSelectedButton("Conference")}
                >
                    Conference
                </button>
                <button
                    className={`border-4 border-black px-4 py-2 rounded-md hover:bg-gray-100 hover:border-gray-500 focus:outline-none focus:border-gray-500 ${
                        selectedButton === 'Workshop' ? 'underline' : ''
                    }`}
                    onClick={() => setSelectedButton("Workshop")}
                >
                    Workshop
                </button>
                <button
                    className={`border-4 border-black px-4 py-2 rounded-md hover:bg-gray-100 hover:border-gray-500 focus:outline-none focus:border-gray-500 ${
                        selectedButton === 'FDP' ? 'underline' : ''
                    }`}
                    onClick={() => setSelectedButton("FDP")}
                >
                    FDP
                </button>
            </div>
            <Research selectedButton = {selectedButton} />

        </div>
    );
}
