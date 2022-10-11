import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleQuestion from './SingleQuestion';


const Question = () => {

    const quizData = useLoaderData().data;

    const { id, logo, name, questions  } = quizData;


    const [newQuestion, setNewQuestion] =   useState(0);

    let start = newQuestion;
    let end = newQuestion + 1;

    console.log(start, end)


    return (
        <div className=''>
            <div  className='h-screen max-w-[1200px] m-auto flex flex-col items-center'>
            <h3 className='text-3xl font-bold p-3'>Quiz of {name}</h3>
            <p>Total Question: {questions.length}</p>

            {
                questions.slice(start, end).map(ques => <SingleQuestion ques={ques} setNewQuestion={setNewQuestion} newQuestion={newQuestion} questions={questions} key={ques.id}  />)
            }
            </div>
            

        </div>
    );
};

export default Question;