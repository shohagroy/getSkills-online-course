import React from 'react';
import { Toaster } from 'react-hot-toast';

const Option = ({option, options, optionClickHandelar}) => {

    let optionNumber = options.indexOf(option) + 1;


    return (
        <div className='m-2 '>

            <label className='p-2 cursor-pointer'>
                
                <input onClick={()=> optionClickHandelar(option)} type="radio" name="fruit"/><span className='p-2'>{optionNumber}: {option}
                </span>
            </label>
            


        </div>
    );
};

export default Option;