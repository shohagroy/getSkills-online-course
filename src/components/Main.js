import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from './Quiz';

const Main = () => {
    const quizsData = useLoaderData().data;


    return (
        <div className='bg-gray-200 py-10 mb-20'>
            <div className=' max-w-[1200px] m-auto'>
                <h4 className='py-10 text-3xl font-bold m-4 font-sans'>Quiz Now</h4>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-5 m-4'>
                    {
                        quizsData.map(quiz => <Quiz key={quiz.id} quiz={quiz}/>)
                    }


                </div>


            </div>
        </div>
    );
};

export default Main;