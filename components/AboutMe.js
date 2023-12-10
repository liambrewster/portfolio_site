import React from 'react';
import userData from '@constants/data';
import Image from 'next/image';

export default function AboutMe() {
	return (
		<section className='bg-white dark:bg-gray-800'>
			<div className='max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800'>
				<h1 className=' text-5xl md:text-9xl font-bold py-20 text-center md:text-left'>
					About Me.
				</h1>
			</div>
			<div className='bg-[#F1F1F1] -mt-10 dark:bg-gray-900'>
				<div className='text-container max-w-6xl mx-auto pt-20'>
					<p
						className='leading-loose text-2xl md:text-4xl font-semibold  mx-4'
						style={{ lineHeight: '3rem' }}
					>
						{userData.about.title}. Currently working with{' '}
						<a
							className='bg-sky-500 rounded-md px-2 py-1 text-white'
							href={userData.about.currentProjectUrl}
						>
							{userData.about.currentProject} ✈️
						</a>
					</p>
				</div>
			</div>
			<div className='bg-[#F1F1F1] dark:bg-gray-900 px-4'>
				<div className='pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20'>
					{/* Social Buttons */}
					<div className='inline-flex flex-col'>
						<div>
							<h1 className='text-xl font-semibold text-gray-700 dark:text-gray-200'>
								Contact
							</h1>
							<p className='text-lg text-gray-500 mt-4 dark:text-gray-300'>
								For any sort help / enquiry, shoot a{' '}
								<a
									href={`mailto:${userData.email}`}
									className='text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300'
								>
									mail
								</a>{' '}
								and I&apos;ll get back. I swear.
							</p>
						</div>
						<div className='mt-8'>
							<h1 className='text-xl font-semibold text-gray-700 dark:text-gray-200'>
								Want to Collaborate?
							</h1>
							<p className='text-lg text-gray-500 mt-4 dark:text-gray-300'>
								I&apos;m always looking forward to work with new people on awesome
								projects and I&apos;d love to hear what you are working on to see if i
								can work with you.
							</p>
						</div>
						{/* Social Links */}
						<h1 className='text-xl font-semibold text-gray-700 mt-8 dark:text-gray-200'>
							Social Links
						</h1>
						<div className='mt-4 ml-4'>
							<div className='flex flex-row justify-start items-center'>
								<a
									href={userData.socialLinks.twitter}
									className='flex flex-row items-center space-x-4 group'
								>
									<div className='my-4'>&rarr;</div>
									<div className='text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300'>
										<div className='absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300'></div>
										Twitter
									</div>
								</a>
							</div>
							<div className='flex flex-row justify-start items-center'>
								<a
									href={userData.socialLinks.linkedin}
									className='flex flex-row items-center space-x-4 group'
								>
									<div className='my-4'>&rarr;</div>
									<div className='text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300'>
										<div className='absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300'></div>
										LinkedIn
									</div>
								</a>
							</div>
						</div>
					</div>
					{/* Text area */}
					<div className='col-span-1 md:col-span-2'>
						{userData.about.description?.map((desc, idx) => (
							<p
								key={idx}
								className='text-xl text-gray-700 mb-4 dark:text-gray-300 '
							>
								{desc}
							</p>
						))}
						{/* TODO: update to next image tags */}
						{/* TODO: Change this to be a carousel of companies i hav worked with over the years , like the car badge on a starred project*/}
						{/* <h1 className='bg-sky-500 text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50'>
							Tech Stack
						</h1>
						<div className='flex flex-row flex-wrap mt-8'>
							<img
								src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/wordpress/wordpress.png'
								className='h-20 w-20 mx-4 my-4'
							/>
							<img
								src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png'
								className='h-20 w-20 mx-4 my-4'
							/>
							<img
								src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/express/express.png'
								className='h-20 w-20 mx-4 my-4'
							/>
							<img
								src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png'
								className='h-20 w-20 mx-4 my-4'
							/>
							<img
								src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/markdown/markdown.png'
								className='h-20 w-20 mx-4 my-4'
							/>

							<img
								src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png'
								className='h-20 w-20 mx-4 my-4'
							/>
							<img
								src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png'
								className='h-20 w-20 mx-4 my-4'
							/>
							<img
								src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/firebase/firebase.png'
								className='h-20 w-20 mx-4 my-4'
							/>
							<img
								src='https://avatars.githubusercontent.com/u/54469796?s=200&v=4'
								className='h-20 w-20 mx-4 my-4'
							/>
							<img
								src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mysql/mysql.png'
								className='h-20 w-20 mx-4 my-4'
							/>
							<img
								src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/postgresql/postgresql.png'
								className='h-20 w-20 mx-4 my-4'
							/>
							<img
								src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png'
								className='h-20 w-20 mx-4 my-4'
							/>
							<img
								src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/tailwind/tailwind.png'
								className='h-20 w-20 mx-4 my-4'
							/>
							<img
								src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/bootstrap/bootstrap.png'
								className='h-20 w-20 mx-4 my-4'
							/>
						</div> */}
					</div>
				</div>
			</div>
		</section>
	);
}
