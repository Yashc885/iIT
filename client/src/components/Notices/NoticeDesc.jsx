"use client "
import React, { useState, useEffect } from 'react';

export default function Notice() {
    const [notices, setNotices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/api/notices/')
            .then(response => response.json())
            .then(data => setNotices(data))
            .catch(error => console.error('Error fetching notices:', error));
    }, []);

    const downloadCSV = () => {
        const csvContent = "data:text/csv;charset=utf-8," +
                           "Title,Date\n" +
                           notices.map(notice => `${notice.title},${notice.notice_date}`).join("\n");

        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "notices.csv");
        document.body.appendChild(link);
        link.click();
    };

    return (
        <div className="text-xl">
            <div className="text-center py-8">
                <h2 className="text-2xl md:text-xl sm:text-lg font-bold underline uppercase">Notice & Circulars</h2>
            </div>
            <div className="justify-center items-center w-full">
                <div className="w-full max-w-screen-md mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8">
                    <table className="w-full">
                        <thead>
                            <tr>
                                <th className="text-left">Title</th>
                                <th className="text-left pr-4 ">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {notices.map((notice, index) => (
                                <tr key={index} className="py-3 sm:py-4">
                                    <td className="py-3 sm:py-4">
                                        <a href={notice.notice_link} className="text-lg hover:text-blue-600 hover:text-underline font-medium text-gray-900 truncate block">
                                            {notice.title}
                                        </a>
                                    </td>
                                    <td className="py-3 sm:py-4 text-md sm:text-sm  font-semibold text-gray-600">{notice.notice_date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="mt-4 justify-between ">
                        <button onClick={downloadCSV} className="px-4 py-2 border-2 border-black shadow-xl  text-black  font-semibold rounded hover:bg-black hover:text-white ">All Notices</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

