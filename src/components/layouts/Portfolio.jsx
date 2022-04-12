import React from 'react';

import YelpCamp from '../Images/YelpCamp.jpg'
import AlexSOM from '../Images/AlexSOM.jpg'
import GithubImg from '../Images/GithubFinder.jpg'
import LiamImg from '../Images/DevPortfolio.jpg'

function Portfolio() {
  const projects = [
    {
      id:1,
      title:'Alex School Of Motoring',
      coverImage: AlexSOM,
      tags:'Web Design, Developement and SEO',
      description: 'This is a total re-design of an existing website for a local Driving school, I managed it all from design to development and run monthly reports to check analytics , making changes to improve search engine results', 
      slug: 'https://alexsom.co.uk/',
    },
    {
      id:2,
      title:'Yelp Camp',
      coverImage: YelpCamp,
      tags:'Concept Design',
      description: 'This was a personal concept project to build a review wesbite based on the niche of campsites, this is in preparation for an upcoming and pending project', 
      slug: 'http://yelpcamp.liambrewster.co.uk/',
    },
    {
      id:3,
      title:'Github Profile Finder',
      coverImage: GithubImg,
      tags:'Concept Design',
      description: 'This was a personal concept project to build a wesbite based on the Github Users, this is in preparation for an upcoming and pending project', 
      slug: 'https://github-finder-xi-bay.vercel.app/',
    },
    {
      id:4,
      title:'Personal Website',
      coverImage: LiamImg,
      tags:'Web Design, Developement and SEO',
      description: 'This was a personal concept project to build a wesbite based on the Github Users, this is in preparation for an upcoming and pending project', 
      slug: 'https://liambrewster.co.uk',
    },
  ]

  return (
    <div className="py-12 bg-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="contents lg:text-center">
        <p className="grid text-sky-400 place-content-end text-ss hover:text-sky-700"> <a href="https://blog.liambrewster.co.uk">View More</a></p>
          <h2 className="mt-2 text-xl md:text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Some Recent Work From Me
          </h2>
          <p className="mt-4 max-w-2xl text-base md:text-xl text-gray-500 lg:mx-auto">
            Check out some of the amazing wesbites for my clients
          </p>
        </div>
        <div className="mt-10">
          <dl className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {projects.map((project) => (
                <div key={project.id} >
                  <img
                    src={project.coverImage}
                    alt=" random imgee"
                    className="w-full object-cover object-center rounded-lg shadow-md"
                  />

                  <div className="relative px-4 -mt-16">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <div className="flex items-baseline">
                        <span
                          className="bg-sky-200 text-sky-800 text-xs px-2 truncate inline-block rounded-full uppercase font-semibold tracking-tighter md:tracking-wider "
                        >
                          Services -&gt;
                        </span>
                        <div
                          className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-tighter md:tracking-wider truncate "
                        >
                          {project.tags}
                        </div>
                      </div>

                      <a href={project.slug}><h3 className="mt-1 text-base md:text-xl font-semibold uppercase leading-tight ">
                      {project.title}
                      </h3></a>

                      <div className="mt-1 text-xs md:text-base truncate md:whitespace-normal ">
                      {project.description}
                      </div>
                    </div>
                  </div>
                </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
