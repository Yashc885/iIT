import React from "react";
import TeamCard from "@/components/TeamSection/TeamSectionCard/page";
import Content from "@/components/TeamSection/Content";
import "next/image";
const index = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
    <div className="  mx-auto max-w-screen-xl  lg:px-6">
      <div className="mx-auto max-w-screen-sm text-center  lg:mb-16">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Team</h2>
        <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Explore the whole collection of open-source web components and elements built with the utility classes from Tailwind</p>
      </div>
      <div className="w-[90%] mt-1rem mx-auto">
        {Content.map((Content) => (
          <TeamCard
            key={Content.id}
            name={Content.name}
            image={Content.image}
            title={Content.title}
            description={Content.description}
          />
        ))}
      </div>
    </div>
    </section>
  );
};

export default index;
