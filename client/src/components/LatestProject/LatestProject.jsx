import React from 'react';

export function ProjectCard({ id, image, title, description }) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg" src={image} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
      </div>
    </div>
  );
}

export function LatestProject() {
  // Sample data
  const projects = [
    {
      id: 1,
      image: 'https://www.cse.iitd.ernet.in/projects/data/2016-5-kolin-csz148390@cse.iitd.ac.in-projectImage-Samuel_DADS.png',
      title: 'Noteworthy technology acquisitions 2021',
      description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.'
    },
    {
      id: 2,
      image: 'https://www.cse.iitd.ernet.in/projects/data/2016-5-kolin-csz148390@cse.iitd.ac.in-projectImage-Samuel_DADS.png',
      title: 'Exploring the latest advancements in AI',
      description: 'Discover the cutting-edge technologies shaping the future of artificial intelligence.'
    },
    {
      id: 3,
      image: 'https://www.cse.iitd.ernet.in/projects/data/2016-5-kolin-csz148390@cse.iitd.ac.in-projectImage-Samuel_DADS.png',
      title: 'The rise of blockchain technology',
      description: 'Learn about the revolutionary potential of blockchain and its impact on various industries.'
    },
    {
        id: 4,
        image: 'https://www.cse.iitd.ernet.in/projects/data/2015-6-aseth-aruhela-projectImage-osn.png',
        title: 'Noteworthy technology acquisitions 2021',
        description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.'
      },
      {
        id: 5,
        image: 'https://www.cse.iitd.ernet.in/projects/data/2015-6-aseth-aruhela-projectImage-osn.png',
        title: 'Exploring the latest advancements in AI',
        description: 'Discover the cutting-edge technologies shaping the future of artificial intelligence.'
      },
      {
        id: 6,
        image: 'https://www.cse.iitd.ernet.in/projects/data/2015-6-aseth-aruhela-projectImage-osn.png',
        title: 'The rise of blockchain technology',
        description: 'Learn about the revolutionary potential of blockchain and its impact on various industries.'
      },
    // Add more sample data as needed
  ];

  return (
    <div className=" mx-[13%] flex justify-center bg-[#ffffff] ">
    <div className="border-1 border-black p-4 ">
    <p className="text-[40px] font-black text-center mb-[2rem] border-b-4 border-grey">Latest Project</p>
    
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  </div>
  );
}

export default LatestProject;
