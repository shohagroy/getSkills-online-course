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
			<p className="text-gray-100">total quiz question: {total} you explore this click below button</p>
		</div>
		<Link to={`quiz/${id}`} type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-400 text-gray-900">Get Quiz</Link>
	</div>
</div>
    );
};

export default Quiz;