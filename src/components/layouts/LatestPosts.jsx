import React from 'react';
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'

function LatestPosts() {
  // TODO - Get real blog data
  const blogs = [
    {
      id:1,
      title:'How I changed my portfolio site from HTML/CSS/ JS to my first React/Tailwind/Hashnode project [Part 1 -Intro/Design]',
      date: '12 Feb 2022',
      tags:'HTML, CSS, JS',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    },
    {
      id:2,
      title:'Udemy Course Review - React JS Course',
      date: '14 Feb 2022',
      tags:'HTML, CSS, JS',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.', 
    },
  ]

  return (
    <div className="py-12 bg-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="contents lg:text-center">
        <p className="grid text-sky-400 place-content-end text-ss hover:text-sky-700">View All</p>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Check Out My Recent Blog Posts
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
            accusamus quisquam.
          </p>
        </div>
          {/* TODO- fix the mobile responsivness */}
        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {blogs.map((blog) => (
              <div key={blog.id} className="relative bg-white hover:bg-slate-100 h-48 grid content-center justify-center">
                <dt>
                  <p className="mt-4 ml-4 text-lg leading-6 font-medium text-gray-900">{blog.title}</p>
                </dt>
                <dd className="m-4 text-s text-gray-500">{blog.date} | {blog.tags}</dd>
                <dd className="m-4 text-s text-gray-500">{blog.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

export default LatestPosts;
