import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,  } from 'recharts';


const Statistics = () => {

    let react = JSON.parse(localStorage.getItem('React'));
    let javascript = JSON.parse(localStorage.getItem('JavaScript'));
    let css = JSON.parse(localStorage.getItem('CSS'))
    let git = JSON.parse(localStorage.getItem('Git'))
    

    if(react){
        react.name = 'React';
    }else{
        react = {name: "React", corrcet:0, wrong:0};
    }

    if(css){
        css.name = 'CSS';
    }else{
       css = {name: 'CSS', correct:0, wrong:0}
    }
    
    if(javascript){
        javascript.name = 'JavaScript';
    }else{
        javascript = {name: 'JavaScript', corrcet:0, wrong:0}
    }

    if(git){
        git.name = 'GitHub';
    }else{
        git = {name: 'GitHub', corrcet:0, wrong:0}
    }



const studentResult = [
    react,
    css,
    javascript,
    git
  ];


  const totalQuiz = useLoaderData().data
  
    return (
        <div className='bg-white mb-10'>
            <div className='text-center max-w-[800px] m-auto'>


            <div className='bg-white m-auto h-screen  flex flex-col justify-center items-center border-2'>
                        <h2 className='text-3xl m-3'>Total Quiz Question</h2>

                        <div className='h-[100%] w-[100%] md:h-[60%] '>
                        <ResponsiveContainer>

                            <BarChart
                                width={0}
                                height={0}
                                data={totalQuiz}
                                margin={{
                                    top: 20,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                                >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                                <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                                <Tooltip />
                                <Legend />
                                <Bar yAxisId="left" dataKey="total" fill="#8884d8" />
                                </BarChart>

                                
                            </ResponsiveContainer>
                        </div>
                    </div>

                 
                    <div className='bg-white m-auto h-screen  flex flex-col justify-center items-center border-2'>
                        <h2 className='bg-white  text-3xl my-3'>Students Performance Analysis</h2>
                        <div className='h-[100%] w-[100%] md:h-[60%]'>
                        <ResponsiveContainer>
                        <BarChart
                        width={500}
                        height={300}
                        data={studentResult}
                        
                        margin={{
                            top: 5,
                            right: 50,
                            left: 20,
                            bottom: 5,
                        }}
                        >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="corrcet" fill="green" />
                        <Bar dataKey="wrong" fill="red" />
                        </BarChart>
                        </ResponsiveContainer>
                        </div>
                    </div>
                

            </div>
        </div>
    );
};

export default Statistics;