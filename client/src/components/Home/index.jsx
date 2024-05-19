"use client";
import React from 'react';
import HomeCard from "@/components/Home/homecard/page";
import Content from "@/components/Home/content";

const Index = () => {
  return (
    <div className="w-full">
      <div className="mx-2">
        <div className="w-full mx-auto justify">
          <div className="text-3xl font-bold">Latest @ IT</div>
          <hr />
          <div className="text-xl">Latest video</div>
          <div className="flex justify-center items-center">
            <video
              className="mx-auto h-96"
              controls
              src="https://www.w3schools.com/html/mov_bbb.mp4"
            />
          </div>
          <p className="text-xl justify text-blue-700">More videos from us...</p>
        </div>
        <div className="w-full mx-auto justify my-4">
          {Content.map((content) => (
            <HomeCard
              key={content.id}
              title={content.title}
              date={content.date}
              data={content.data}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
