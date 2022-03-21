import React from 'react';
import LiamImage from '../Images/LiamImage.png'

function Hero() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <p className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
                <span className="block xl:inline">Hi, I am </span>
                <span className="block text-sky-500 xl:inline">Liam Brewster</span>
              </p>

              <h1 className='mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0'>A Sheffield based, Website designer, Developer &amp; Social Media Manager / Marketer</h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              I help your business get more customers with your website so you can focus on the reason you started in the first place. I want your customers to see the best side of you by ensuring you have the most user-friendly and functional online prescence. I am looking forward to collaborate with you on your amazing website to thrive online, so let's chat.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#contactform"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-400 hover:bg-sky-700 md:py-4 md:text-lg md:px-10"
                  >
                    Send Me A Message
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="grid place-items-center mb-3 lg:mb-0 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-46 w-full object-cover sm:h-72 md:h-96 lg:w-96 lg:h-96"
          src={LiamImage}
          alt="Liam Brewster the UK Web Designer and Developer"
        />
      </div>
    </div>
  )
}

export default Hero;
