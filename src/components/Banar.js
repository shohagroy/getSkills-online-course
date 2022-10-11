import React from 'react';
import { Link } from 'react-router-dom';

const Banar = () => {
    return (
       <div className='bg-[#FF630E] '>
            <div className="max-w-[1200px] m-auto p-6 py-12 text-gray-900">
        <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between text-white">
                <h2 className="text-center text-6xl tracking-tighter font-bold">Up to
                    <br className="sm:hidden"/> 30% Off
                </h2>
                <div className="space-x-2 text-center py-2 lg:py-0">
                    <span>Plus free Course! Use code:</span>
                    <span className="font-bold text-lg">P-Hero</span>
                </div>
                <Link to="/enroll" rel="noreferrer noopener" className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block bg-gray-50 text-gray-900 border-gray-400">Enroll Now</Link>
            </div>
        </div>
    </div>
       </div>
    );
};

export default Banar;