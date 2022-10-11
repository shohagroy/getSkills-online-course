import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,  } from 'recharts';


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

  
    return (
        <div className='bg-[#111827]'>
            <div className='max-w-[1200px] m-auto text-center'>


                 
                    <div className='bg-white m-10 flex flex-col justify-center items-center border-2'>
                        <h2 className='bg-white  text-3xl m-3'>Students Performance Analysis</h2>
                        
                        <BarChart
                        width={1000}
                        height={500}
                        data={studentResult}
                        margin={{
                            top: 5,
                            right: 30,
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
                    </div>
                

            </div>
        </div>
    );
};

export default Statistics;