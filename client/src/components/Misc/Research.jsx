"use client";
import React, { useState, useEffect } from 'react';
export function Research({selectedButton}) {
  const [selectedData, setSelectedData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
    
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        let apiUrl;
        switch (selectedButton) {
          case 'Journal':
            apiUrl = 'http://localhost:8000/api/faculty/';
            break;
          case 'Conference':
            apiUrl = 'http://localhost:8000/api/conference/';
            break;
          case 'FDP':
            apiUrl = 'http://localhost:8000/api/FDP/';
            break;
          case 'Workshop':
            apiUrl = 'http://localhost:8000/api/workshops/';
            break;
          default:
            apiUrl = ''; 
        }
        const res = await fetch(apiUrl);
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await res.json();
        console.log("data" , data);
        setSelectedData(data);
      } catch (error) {
        setError(error);
        console.log("Error" , error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedButton]);

  const handleEventTypeClick = (eventType) => {
    setSelectedEventType(eventType);
    setSelectedButton(eventType); 
  };
  const renderTable = () => {
    switch (selectedButton) {
        case 'Journal':
        return (
          <table className="w-full">
            <thead>
              <tr>
                <th className="border border-gray-400 px-4 py-2">Author Name</th>
                <th className="border border-gray-400 px-4 py-2">Paper Title</th>
                <th className="border border-gray-400 px-4 py-2">Journal Name</th>
                <th className="border border-gray-400 px-4 py-2">Year</th>
                <th className="border border-gray-400 px-4 py-2">Page No</th>
                <th className="border border-gray-400 px-4 py-2">Issue</th>
                <th className="border border-gray-400 px-4 py-2">ISSN No</th>
                <th className="border border-gray-400 px-4 py-2">Publisher</th>
                <th className="border border-gray-400 px-4 py-2">Impact No</th>
                <th className="border border-gray-400 px-4 py-2">Indexing</th>
              </tr>
            </thead>
            <tbody>
              {selectedData.map((item) => (
                <tr >
                  <td className="border border-gray-400 px-4 py-2">{item.author_name}</td>
                  <td className="border border-gray-400 px-4 py-2">{item.paper_title}</td>
                  <td className="border border-gray-400 px-4 py-2">{item.journal_name}</td>
                  <td className="border border-gray-400 px-4 py-2">{item.year}</td>
                  <td className="border border-gray-400 px-4 py-2">{item.page_no}</td>
                  <td className="border border-gray-400 px-4 py-2">{item.issue}</td>
                  <td className="border border-gray-400 px-4 py-2">{item.issn_no}</td>
                  <td className="border border-gray-400 px-4 py-2">{item.publisher}</td>
                  <td className="border border-gray-400 px-4 py-2">{item.impact_factor}</td>
                  <td className="border border-gray-400 px-4 py-2">{item.indexing}</td>
                </tr>
              ))}
            </tbody>
          </table>
        );
      
      case 'Conference':
      return (
        <table className="w-[95%]">
          <thead>
            <tr>
              <th className="border border-gray-400 px-4 py-2">Author Name</th>
              <th className="border border-gray-400 px-4 py-2">Paper Title</th>
              <th className="border border-gray-400 px-4 py-2">Conference Name</th>
              <th className="border border-gray-400 px-4 py-2">Proceeding</th>
              <th className="border border-gray-400 px-4 py-2">Year</th>
              <th className="border border-gray-400 px-4 py-2">Page No</th>
              <th className="border border-gray-400 px-4 py-2">Issue</th>
              <th className="border border-gray-400 px-4 py-2">ISSN No</th>
              <th className="border border-gray-400 px-4 py-2">Publisher</th>
              <th className="border border-gray-400 px-4 py-2">Impact No</th>
              <th className="border border-gray-400 px-4 py-2">Indexing</th>
            </tr>
          </thead>
          <tbody>
          {selectedData.map((item) => (
                <tr >
                  <td className="border border-gray-400 px-4 py-2">{item.c_author_name}</td>
                  <td className="border border-gray-400 px-4 py-2">{item.c_paper_title}</td>
                  <td className="border border-gray-400 px-4 py-2">{item.c_conference_name}</td>
                  <td className="border border-gray-400 px-4 py-2">{item.c_proceeding}</td>
                  <td className="border border-gray-400 px-4 py-2">{item.c_year}</td>
                  <td className="border border-gray-400 px-4 py-2">{item.c_page_no}</td>
                  <td className="border border-gray-400 px-4 py-2">{item.c_issue}</td>
                  <td className="border border-gray-400 px-4 py-2">{item.c_issn_no}</td>
                  <td className="border border-gray-400 px-4 py-2">{item.c_publisher}</td>
                  <td className="border border-gray-400 px-4 py-2">{item.c_impact_factor}</td>
                  <td className="border border-gray-400 px-4 py-2">{item.c_indexing}</td>
                </tr>
              ))}
          </tbody>
        </table>
      );
      case 'Workshop':
      return (
        <table className="w-full">
          <thead>
            <tr>
              <th className="border border-gray-400 px-4 py-2">Faculty Name</th>
              <th className="border border-gray-400 px-4 py-2">Topic</th>
              <th className="border border-gray-400 px-4 py-2">Duration</th>
              <th className="border border-gray-400 px-4 py-2">From Date</th>
              <th className="border border-gray-400 px-4 py-2">To Date</th>
              <th className="border border-gray-400 px-4 py-2">Organised By</th>
            </tr>
          </thead>
          <tbody>
          {selectedData.map((item) => (
                <tr>
                  <td className="border border-gray-400 px-4 py-2">{item.w_faculty_name}</td>
                  <td className="border border-gray-400 px-4 py-2">{item.w_topic}</td>
                  <td className="border border-gray-400 px-4 py-2">{item.w_duration_days}D: {item.duration_hours}Hrs</td>
                  <td className="border border-gray-400 px-4 py-2">{item.w_from_date}</td>
                  <td className="border border-gray-400 px-4 py-2">{item.w_to_date}</td>
                  <td className="border border-gray-400 px-4 py-2">{item.w_organised_by}</td>
                </tr>
              ))}
          </tbody>
        </table>
      );
      case 'FDP':
      return (
        <table className="w-full">
          <thead>
            <tr>
              <th className="border border-gray-400 px-4 py-2">Faculty Name</th>
              <th className="border border-gray-400 px-4 py-2">Topic</th>
              <th className="border border-gray-400 px-4 py-2">Duration</th>
              <th className="border border-gray-400 px-4 py-2">From Date</th>
              <th className="border border-gray-400 px-4 py-2">To Date</th>
              <th className="border border-gray-400 px-4 py-2">Organised By</th>
            </tr>
          </thead>
          <tbody>
          {selectedData.map((item) => (
                <tr >
                  <td className="border border-gray-400 px-4 py-2">{item.faculty_name}</td>
                  <td className="border border-gray-400 px-4 py-2">{item.topic}</td>
                  <td className="border border-gray-400 px-4 py-2">{item.duration_days}D: {item.duration_hours}Hrs</td>
                  <td className="border border-gray-400 px-4 py-2">{item.from_date}</td>
                  <td className="border border-gray-400 px-4 py-2">{item.to_date}</td>
                  <td className="border border-gray-400 px-4 py-2">{item.organised_by}</td>
                </tr>
              ))}
          </tbody>
        </table>
      );
      default:
        return null;
    }
  };

  return (
    <div className="p-4 w-full ">
    <h3 className="text-xl uppercase font-bold mt-8">{selectedButton}</h3>
    <hr className="my-4 border-gray-400" />
    {renderTable()}
  </div>
  );
}

export default Research;
