import React from 'react';

import BlogPost from '../Images/BlogPost.png'

function LatestPosts() {
  const blogs = [
    {
      id:1,
      title:'How I changed my portfolio site from HTML/CSS/ JS to my first React/Tailwind/Hashnode project [Part 1 -Intro/Design]',
      coverImage: BlogPost,
      dateAdded: '20 Jan 2022',
      tags:'React JS, Portfolio, Hashnode',
      description: 'this blog goes through the stages of me switching my old devloper portfolio into a new shiney React JS with integrated blogs from Hashnode', 
      slug: 'https://blog.liambrewster.co.uk/html-to-react-pt1',
      reactionCount: 24
    },
    {
      id:2,
      title:'How I changed my portfolio site from HTML/CSS/ JS to my first React/Tailwind/Hashnode project [Part 2 - Build Components]',
      coverImage: BlogPost,
      dateAdded: '02 Feb 2022',
      tags:'React JS, Portfolio, Hashnode',
      description: 'second installment of me upgrading my website to become a React JS project', 
      slug: 'https://blog.liambrewster.co.uk/html-to-react-pt2',
      reactionCount: 6
    },
  ]

  return (
    <div className="py-12 bg-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="contents lg:text-center">
        <p className="grid text-sky-400 place-content-end text-ss hover:text-sky-700"> <a href="https://blog.liambrewster.co.uk">View All</a></p>
          <p className="mt-2 text-xl md:text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Check Out My Most Recent Blog Posts
          </p>
          <p className="mt-4 max-w-2xl text-base md:text-xl text-gray-500 lg:mx-auto">
            Check out my two most recent blogs below. but do not forget to check out all of them.
          </p>
        </div>
        <div className="mt-10">
          <dl className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {blogs.map((blog) => (
                <div key={blog.id} >
                  <img
                    src={blog.coverImage}
                    alt=" random imgee"
                    className="w-full object-cover object-center rounded-lg shadow-md"
                  />

                  <div className="relative px-4 -mt-16">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <div className="flex items-baseline">
                        <span
                          className="bg-sky-200 text-sky-800 text-xs px-2 truncate inline-block rounded-full uppercase font-semibold tracking-tighter md:tracking-wider "
                        >
                          Recent Post
                        </span>
                        <div
                          className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-tighter md:tracking-wider truncate "
                        >
                          {blog.tags}
                        </div>
                      </div>

                      <a href={blog.slug}><h4 className="mt-1 text-base md:text-xl font-semibold uppercase leading-tight ">
                      {blog.title}
                      </h4></a>

                      <div className="mt-1 text-xs md:text-base truncate md:whitespace-normal ">
                      {blog.description}
                      </div>
                      <div className="mt-4">
                        <span className="text-sky-600 text-md font-semibold">{blog.dateAdded} </span>
                        <span className="text-sm text-gray-600 invisible md:visible">(currently with {blog.reactionCount} reactions)</span>
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

export default LatestPosts;
