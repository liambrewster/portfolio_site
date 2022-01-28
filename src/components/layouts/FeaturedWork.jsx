import React from 'react';
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function FeaturedWork() {
  // TODO - Get real project data
  const projects = [
    {
      id:1,
      title:'Github Profile Finder',
      coverImage: 'https://source.unsplash.com/random/350x250',
      year: '2021',
      tech:'React Js, Github API, Vercel',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      slug: '/article1',
    },
    {
      id:2,
      title:'Real Esate E-com Store',
      coverImage: 'https://source.unsplash.com/random/360x260',
      year: '2022',
      tech:'React Js, Stripe, Firebase',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      slug: '/article2',
    },
    {
      id:2,
      title:'Helpdesk Support Tickets',
      coverImage: 'https://source.unsplash.com/random/250x250',
      year: '2022',
      tech:'React Js, Stripe, Firebase',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      slug: '/article2',
    },
    
  ]

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="contents lg:text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Check Out Some Of My Featured Work
          </p>
        </div>
        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-1 md:gap-x-8 md:gap-y-10">
            {projects.map((project) => (
                <div key={project.id} className=''>
                  <div className='flex flex-row min-h-64 border-b-4 pb-3 border-gray-300'>
                    {/* Left Image */}
                    <div className="p-2 basis-1/2">
                    <img src={project.coverImage} className='rounded-lg' />
                    </div>

                    {/* Right Text */}
                    <div className="p-2">
                      <h1 className='text-5xl font-bold mb-4'>{project.title}</h1>
                        <div className="flex flex-row">

                        <button className="rounded-full bg-sky-600 text-white text-2xl px-5 tracking-widest mb-4">{project.year}</button>
                        <p className=" text-1xl p-1 ml-20 tracking-widest mb-4">{project.tech}</p>
                        </div>
                      <p className='mt-5'>{project.description}</p>
                      {/* hidden item not on orignal design 
                      TODO - ADD Links to code & live project */}
                      {/* <div className="flex flex-row mt-2">
                      <button className="tracking-widest flex flex-row items-center bg-sky-300 rounded-full text-white my-2 px-3 hover:bg-sky-600"><FaGithub size='35px'className='mr-1'/></button>
                      <button className="tracking-widest flex flex-row items-center bg-sky-300 rounded-full text-white my-3 p-2 ml-2 hover:bg-sky-600"><FaExternalLinkAlt size='35px'className='mr-1'/> </button>
                      </div> */}

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

export default FeaturedWork;
