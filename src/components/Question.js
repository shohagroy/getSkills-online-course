import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleQuestion from './SingleQuestion';


const Question = () => {

    const quizData = useLoaderData().data;

    const { id, logo, name, questions  } = quizData;

    console.log(questions);


    return (
        <div className='bg-red-300'>
            <div  className='h-screen max-w-[1200px] m-auto flex flex-col items-center'>
            <h3 className='text-3xl font-bold p-3'>Quiz of {name}</h3>
            <p>Total Question: {questions.length}</p>

            {
                questions.map(ques => <SingleQuestion ques={ques} key={ques.id}  />)
            }
            </div>
            

        </div>
    );
};

export default Question;