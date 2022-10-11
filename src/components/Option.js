import React from 'react';

const Option = ({option}) => {

    console.log()
    return (
        <div className='m-2 bg-blue-300 cursor-pointer'>

            <input type="radio" id={`${option}`}  value={`${option}`}/>
            <label for={`${option}`}>{option}</label>


        </div>
    );
};

export default Option;