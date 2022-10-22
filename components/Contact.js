import React from 'react';
import userData from '@constants/data';
import { useState } from 'react';

export default function Contact() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});
	const [submitted, setSubmitted] = useState(false);

	const { name, email, message } = formData;
	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const onSubmit = (e) => {
		e.preventDefault();
		setSubmitted(true);
		console.log('Sending');
		fetch('/api/contact', {
			method: 'POST',
			headers: {
				Accept: 'application/json, text/plain, */*',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(formData),
		}).then((res) => {
			console.log('Response received');
			if (res.status === 200) {
				console.log('Response succeeded!');
				setSubmitted(true);
			}
		});
	};

	return (
		<section>
			<div className='max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800 antialiased'>
				<h1 className=' text-5xl md:text-9xl font-bold py-20 text-center md:text-left'>
					Contact
				</h1>
			</div>
			<div className='relative z-10 rounded-md shadow-md bg-sky-500 p-4 md:p-10 lg:p-20 max-w-6xl mx-auto mb-20 -mt-4'>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
					<div className='md:ml-4'>
						<header className=''>
							<h1 className='text-gray-50 font-semibold text-2xl'>
								Get in touch, let&apos;s talk.
							</h1>
							<p className='font-light text-base text-gray-200 mt-2'>
								Fill in the details and I&apos;ll get back to you as soon as I can.
							</p>
						</header>
						<div className='icons-container inline-flex flex-col my-20'>
							<div className='flex flex-row items-center space-x-6 rounded-md border border-sky-500 hover:border hover:border-blue-500 p-4'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='16'
									height='16'
									fill='currentColor'
									className='bi bi-envelope-fill h-4 w-4 text-sky-900'
									viewBox='0 0 16 16'
								>
									<path d='M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z' />
								</svg>
								<p className='text-gray-50 font-light text-sm'>{userData.email}</p>
							</div>
							<div className='flex flex-row items-center space-x-6 rounded-md border border-sky-500 hover:border hover:border-blue-500 p-4'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='16'
									height='16'
									fill='currentColor'
									className='bi bi-pin-fill h-4 w-4 text-sky-900'
									viewBox='0 0 16 16'
								>
									<path d='M4.146.146A.5.5 0 0 1 4.5 0h7a.5.5 0 0 1 .5.5c0 .68-.342 1.174-.646 1.479-.126.125-.25.224-.354.298v4.431l.078.048c.203.127.476.314.751.555C12.36 7.775 13 8.527 13 9.5a.5.5 0 0 1-.5.5h-4v4.5c0 .276-.224 1.5-.5 1.5s-.5-1.224-.5-1.5V10h-4a.5.5 0 0 1-.5-.5c0-.973.64-1.725 1.17-2.189A5.921 5.921 0 0 1 5 6.708V2.277a2.77 2.77 0 0 1-.354-.298C4.342 1.674 4 1.179 4 .5a.5.5 0 0 1 .146-.354z' />
								</svg>
								<p className='text-gray-50 font-light text-sm'>{userData.address}</p>
							</div>
						</div>
						<div className='social-icons flex flex-row space-x-8'>
							<a
								href={userData.socialLinks.linkedin}
								className='h-10 w-10 rounded-full hover:bg-blue-500 flex items-center justify-center cursor-pointer'
							>
								<svg
									width='24'
									height='24'
									className='text-gray-50'
									viewBox='0 0 24 24'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										fillRule='evenodd'
										clipRule='evenodd'
										d='M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z'
										fill='currentColor'
									/>
								</svg>
							</a>
							<a
								href={userData.socialLinks.twitter}
								className='h-10 w-10 rounded-full hover:bg-blue-500 flex items-center justify-center cursor-pointer'
							>
								<svg
									width='24'
									height='24'
									className='text-gray-50'
									viewBox='0 0 24 24'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										fillRule='evenodd'
										clipRule='evenodd'
										d='M8 3C9.10457 3 10 3.89543 10 5V8H16C17.1046 8 18 8.89543 18 10C18 11.1046 17.1046 12 16 12H10V14C10 15.6569 11.3431 17 13 17H16C17.1046 17 18 17.8954 18 19C18 20.1046 17.1046 21 16 21H13C9.13401 21 6 17.866 6 14V5C6 3.89543 6.89543 3 8 3Z'
										fill='currentColor'
									/>
								</svg>
							</a>
						</div>
					</div>
					{submitted && (
						<div className='flex rounded-lg bg-white flex-col justify-center align-items-center'>
							<header className=''>
								<h1 className='text-sky-500 font-semibold text-center text-3xl'>
									Contact Form Submitted
								</h1>
								<p className='font-light text-base text-center text-sky-500 mt-2'>
									Thanks For Your message, we will review and reply shortly!.
								</p>
							</header>
						</div>
					)}
					{!submitted && (
						<form
							className='form rounded-lg bg-white p-4 flex flex-col'
							onSubmit={onSubmit}
						>
							<label
								htmlFor='name'
								className='text-sm text-gray-600 mx-4'
							>
								{' '}
								Your Name
							</label>
							<input
								type='text'
								className='font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500'
								name='name'
								value={name}
								onChange={onChange}
							/>
							<label
								htmlFor='email'
								className='text-sm text-gray-600 mx-4 mt-4'
							>
								Email
							</label>
							<input
								type='text'
								className='font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500'
								name='email'
								value={email}
								onChange={onChange}
							/>
							<label
								htmlFor='message'
								className='text-sm text-gray-600 mx-4 mt-4'
							>
								Message
							</label>
							<textarea
								rows='4'
								type='text'
								className='font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500'
								name='message'
								value={message}
								onChange={onChange}
							></textarea>
							{/* TODO: where should the form submit to? telegram or email? */}
							<button
								type='submit'
								className='bg-sky-500 rounded-md w-1/2 mx-4 mt-8 py-2 text-gray-50 text-xs font-bold'
							>
								Send Message
							</button>
						</form>
					)}
				</div>
			</div>
		</section>
	);
}
