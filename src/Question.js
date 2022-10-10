import React from 'react';
import { useLoaderData } from 'react-router-dom';


const Question = () => {

    const quizData = useLoaderData().data;

    const { id, logo, name, questions  } = quizData;

    console.log(questions);


    return (
        <div className='h-screen max-w-[1200px] m-auto'>
            
            
        </div>
    );
};

export default Question;