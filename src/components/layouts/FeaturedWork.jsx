import React from 'react';

import DevPortfolio from '../Images/DevPortfolio.jpg'
import GithubFinder from '../Images/GithubFinder.jpg'
import YelpCamp from '../Images/YelpCamp.jpg'
import AlexSOM from '../Images/AlexSOM.jpg'

function FeaturedWork() {
  const projects = [
    {
      id:1,
      title:'My Developer Portfolio',
      coverImage: DevPortfolio,
      imageAlt: 'Liam Brewster Developer Portfolio Mockup',
      year: '2022',
      tech:'React Js, Hashnode, Vercel',
      description: 'My lastest project has been to redesign my developer portfolio which you are looking at right now, but i wrote a blog along the way all about what i did',
      slug: 'https://liambrewster.com',
    },
    {
      id:2,
      title:'Github Profile Finder',
      coverImage: GithubFinder,
      imageAlt: 'Liam Brewster Github Profile Finder Project Mockup',
      year: '2022',
      tech:'React Js, Github API, Vercel',
      description: 'This was my first deployed React Js project that allow you to input a username and will bring back all matching profiles, that you can then view basic information about',
      slug: 'https://github-finder-xi-bay.vercel.app/',
    },
    {
      id:3,
      title:'Yelp Camp',
      coverImage: YelpCamp,
      imageAlt: 'Liam Brewster YelpCamp Bootcamp Project Mockup',
      year: '2021',
      tech:'Express JS, Mongo DB, Node JS, Telegram',
      description: 'This is a campsite review website, the final project for my bootcamp, but with an added feature of integrating with Telegram to send text message for new sign ups or reviews',
      slug: 'https://yelpcamp.liambrewster.co.uk/',
    },
    {
      id:4,
      title:'Alex School Of Motoring',
      coverImage: AlexSOM,
      imageAlt: 'Alex School of Motoring Website',
      year: '2020',
      tech:'HTML, CSS, JS, ',
      description: 'This was a paid project to rebuild their website by bringing it up to date with modern design and information, along with ongoing support and hosting servicßes',
      slug: 'https://alexsom.co.uk/',
    },
    
  ]

  return (
    <div className="py-12" id='featured'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="contents lg:text-center">
          <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Check Out Some Of My Featured Work
          </h2>
        </div>
        <div className="md:mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-1 md:gap-x-8 md:gap-y-10">
            {projects.map((project) => (
                <div key={project.id} className=''>
                  <div className='flex flex-col md:flex-row min-h-64 border-b-4 pb-3 border-gray-300'>
                    <div className="p-2 md:basis-1/2">
                    <img src={project.coverImage} alt={project.imageAlt} className='rounded-lg' />
                    </div>
                    <div className="p-2">
                      <a href={project.slug}><h3 className='text-center md:text-left text-xl md:text-5xl font-bold mb-2 md:mb-4'>{project.title}</h3></a>
                        <div className="flex flex-row">

                        <button className="rounded-full bg-sky-600 text-white text-sm md:text-2xl px-2 md:px-5 tracking-widest mb-4">{project.year}</button>
                        <p className=" text-xs md:text-xl p-1 ml-20 tracking-widest mb-4">{project.tech}</p>
                        </div>
                      <p className='mt-1 ml-1 md:ml-0 md:mt-5 text-sm md:text-base'>{project.description}</p>                    

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
