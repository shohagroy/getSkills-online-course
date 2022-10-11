import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,  } from 'recharts';


const Statistics = () => {


    const react = JSON.parse(localStorage.getItem('React'));
    const javascript = JSON.parse(localStorage.getItem('JavaScript'));
    const css = JSON.parse(localStorage.getItem('CSS'))
    const git = JSON.parse(localStorage.getItem('Git'))


    console.log(css)

    // react ? react.name = "React" : react.name = "React"
    css.name = 'CSS';
    // react.name = 'React';
    // javascript.name ="JavaScript";
    // git.name = "Github"




const data = [
    react ? react.name = 'React' : {name: 'React'},
    css,
    javascript ? javascript.name = 'JavaScript' : {name: 'Javascript'},

    {
      name: 'GitHub',
      corrcet: 5,
      wrong: 8,
      amt: 2000,
    },
  ];

  
    return (
        <div className='bg-[#111827]'>
            <div className='max-w-[1200px] m-auto text-center'>


                 
                    <div className='bg-white m-10 flex flex-col justify-center items-center'>
                        <h2 className='bg-white  text-3xl'>Rechart example</h2>
                        
                        <BarChart
                        width={1000}
                        height={500}
                        data={data}
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