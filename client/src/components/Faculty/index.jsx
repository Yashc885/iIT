'use client'
import React, { useState, useEffect } from "react";
import Page from "@/components/Faculty/FacultyCard/page";

export default function FacultyData() {
    const [facultyData, setFacultyData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("http://localhost:8000/api/faculty/");
                if (!res.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await res.json();
                setFacultyData(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error fetching faculty data: {error.message}</p>;
    }

    return (
        <div>
            <div>
                <p className="text-[40px] font-black text-center">Faculty List</p>
            </div>
            <div className="w-[90%] mt-1rem mx-auto">
                {facultyData.map((faculty) => (
                    <Page
                        title={faculty.title}
                        name={faculty.name}
                        post={faculty.post}
                        image={faculty.image}
                        description={faculty.description}
                        resume={faculty.resume}
                    />
                ))}
            </div>
        </div>
    );
}
