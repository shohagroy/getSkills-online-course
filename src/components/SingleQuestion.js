import React, { useState } from 'react';
import Option from './Option';

import toast, { Toaster } from 'react-hot-toast';

import swal from 'sweetalert';
import { Link } from 'react-router-dom';


const SingleQuestion = (props) => {
    const { ques, setNewQuestion, newQuestion, questions, name } = props;
    const {question, correctAnswer, options } = ques;
    const [answer, setAnswer] = useState(false)
    const [tostHandel, setTostHandel] = useState(false)

    let correctAns = parseInt(localStorage.getItem('correct'));
    let wrongAns = parseInt(localStorage.getItem('wrong'));




    const optionClickHandelar = (ans)=>{
        setTostHandel(true)

        if(correctAnswer === ans){
            toast.success(`Good job! you select ${ans} is Correct!`, {
                duration: 5000,
                position: 'top-center',
                style: {background:'rgb(193, 248, 193)', color:'green', font:'bold'}
            })

            if(correctAns){
                correctAns  = correctAns + 1;
                localStorage.setItem('correct', correctAns)
            }
            else{
                localStorage.setItem('correct', 1)
            }

        }else{

            toast.error(`Wrong! you select ${ans} is Wrong! Correct Answer is ${correctAnswer}`, {
                duration: 5000,
                position: 'top-center',
                style: {background:'rgb(250, 200, 200)', font:'bold', color:'red', font:'bold'},
            });

            if(wrongAns){
                wrongAns  = wrongAns + 1;
                localStorage.setItem('wrong', wrongAns)
            }
            else{
                localStorage.setItem('wrong', 1)
            }
        }
    }


    const viewResultHandelar = ()=>{

        swal({
            title: "Good job!",
            text: `${name} Quiz Complete! Your Result Correct: ${correctAns} and Wrong: ${wrongAns} Visited Statistics Page to Analysis Rechart Thank You`,
            style: {textAlign:'center'} ,
            icon: "success",
          });

          localStorage.setItem(name, JSON.stringify({corrcet: correctAns, wrong: wrongAns}))

          localStorage.removeItem('correct');
          localStorage.removeItem('wrong');
    }

    return (

        <div className='bg-gray-200 w-full mb-28'>


            <div className={`${ tostHandel ? 'inline': 'hidden'}`}>
            <Toaster/>
            </div>

            <div className='max-w-[800px] bg-white m-auto  p-2 my-5 border-2 rounded-2xl border-black'>
                <div className='flex justify-between items-center p-3'>
                    <p>Quiz {newQuestion + 1} of {questions.length} </p>
                    <span className='cursor-pointer' onClick={()=>setAnswer(!answer)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </span>
                </div>

                <div className={`bg-green-200 p-2 text-center mx-5 rounded-xl ${answer ? 'block' : 'hidden' }`}>
                    <h4 className='font-bold text-xl text-green-700  '>{correctAnswer}</h4>


                </div>

                <div>
                    <h3 className='font-bold text-2xl p-3'>Question: {question.slice(3, question.length - 4)}</h3>
                    

                    <div className=''>
                        {
                            options.map(option => <Option optionClickHandelar={optionClickHandelar} key={option} option={option} options={options}/>)
                        }
                    </div>
                        

                </div>
                
                <div className='text-center mt-5'>
                <button onClick={()=> setNewQuestion(newQuestion - 1)} type="button" className={`${newQuestion ? 'inline' : 'hidden'} px-8 m-2 py-3 font-semibold rounded bg-[#FF6A59] text-white`}   >Previous</button>
                <button onClick={()=> setNewQuestion(newQuestion + 1)} type="button" className={`px-8 py-3 font-semibold rounded bg-[#FF6A59] text-white ${newQuestion + 1 === questions.length ? 'hidden' : 'inline'}`}>Next</button>

                {
                    <Link to='/' onClick={viewResultHandelar} type="button" className={`px-8 py-3 font-semibold rounded bg-[#FF6A59] text-white ${newQuestion + 1 === questions.length ? 'inline' : 'hidden'}`}>Get Result</Link>
                }

                </div>
                

            </div>
        </div>
    );
};

export default SingleQuestion;