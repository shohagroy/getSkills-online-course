import React from 'react';
import Option from './Option';

const SingleQuestion = (props) => {

    const { ques, setNewQuestion, newQuestion, questions } = props;

    const {question, correctAnswer, options } = ques;


    return (
        <div className='bg-blue-300 w-full'>
            <div className='max-w-[800px] m-auto bg-red-300 p-2 my-5 border-2 border-black'>
                <p>Quiz {newQuestion + 1} of {questions.length} </p>
                <div>
                    <p>Question: {question.slice(3, question.length - 4)}</p>

                    <div className='bg-yellow-300'>
                        {
                            options.map(option => <Option key={option} option={option} /> )
                        }

                    </div>

                </div>
                
                <div className='text-center mt-5'>
                <button onClick={()=> setNewQuestion(newQuestion - 1)} type="button" className="px-8 m-2 py-3 font-semibold rounded dark:bg-gray-100 dark:text-gray-800">Previous</button>
                <button onClick={()=> setNewQuestion(newQuestion + 1)} type="button" className="px-8 py-3 font-semibold rounded dark:bg-gray-100 dark:text-gray-800">Next</button>
                </div>

            </div>
        </div>
    );
};

export default SingleQuestion;