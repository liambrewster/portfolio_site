import React from 'react';
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function FeaturedWork() {
  // TODO - Get real project images
  const projects = [
    {
      id:1,
      title:'My Developer Portfolio',
      coverImage: 'https://source.unsplash.com/random/350x250',
      year: '2022',
      tech:'React Js, Hashnode, Vercel',
      description: 'My lastest project has been to redesign my develoepr portfolio which you are looking at right now, but i wrote a blog along the way all about what i did',
      slug: 'https://liambrewster.co.uk',
    },
    {
      id:2,
      title:'Github Profile Finder',
      coverImage: 'https://source.unsplash.com/random/360x260',
      year: '2022',
      tech:'React Js, Github API, Vercel',
      description: 'This was my first deployed React Js project that allow you to input a username and will bring back all matching profiles, that you can then view basic information about',
      slug: 'https://github-finder-xi-bay.vercel.app/',
    },
    {
      id:2,
      title:'Yelp Camp',
      coverImage: 'https://source.unsplash.com/random/250x250',
      year: '2021',
      tech:'Express JS, Mongo DB, Node JS, Telegram',
      description: 'This is a campsite review website, the final project for my bootcamp, but with an added feature of integrating with Telegram to send text message for new sign ups or reviews',
      slug: 'https://yelpcamp.liambrewster.co.uk/',
    },
    
  ]

  return (
    <div className="py-12" id='featured'>
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
                      <a href={project.slug}><h1 className='text-5xl font-bold mb-4'>{project.title}</h1></a>
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
