import React from 'react';
import { Link } from 'react-router-dom';

const Quiz = ({quiz}) => {


    const {id, name, logo, total } = quiz;


    return (


        <div className="max-w-xs m-auto rounded-md shadow-md bg-gray-900 text-gray-100">
	<img src={logo} alt={name} className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
			<p className="text-gray-100">Total question: {total} Explore this Quiz click Get Quiz Button</p>
		</div>
		<Link to={`quiz/${id}`} type="button" className="flex items-center justify-center w-full p-3 tracking-wide rounded-md bg-[#FF630E] text-white font-bold">Get Quiz

		<span className='p-2'>
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
			<path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
			</svg>
		</span>
		
		</Link>
	</div>
</div>
    );
};

export default Quiz;