import React from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';



const enrollHandelar = ()=>{

	swal({
		title: "Enrolment Successfully!",
		text: 'Your Enrolment Successfully Complete! We will sent the id or password in your email',
		style: {textAlign:'center'} ,
		icon: "success",
	  });
}


const EnrollForm = () => {
    return (
        <div className='bg-gray-900'>
            <section className="max-w-[1200px] m-auto p-6 bg-[] text-gray-50">
	<div  className="container flex flex-col max-w-[870px] mx-auto space-y-12 ng-untouched  ng-pristine ng-valid">
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-900 border-2 border-white">
			<div className="space-y-2 col-span-full ">
				<p className="font-medium">Personal Inormation</p>
			</div>
			<div className="grid grid-cols-6 gap-4 col-span-full ">
				<div className="col-span-full sm:col-span-3">
					<label  className="text-sm">First name</label>
					<input id="firstname" type="text" placeholder="First name" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label  className="text-sm">Last name</label>
					<input id="lastname" type="text" placeholder="Last name" className="w-full rounded-md p-2 focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label  className="text-sm">Email</label>
					<input id="email" type="email" placeholder="Email" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
				</div>
				<div className="col-span-full">
					<label  className="text-sm">Address</label>
					<input id="address" type="text" placeholder="" className="w-full h-20 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label  className="text-sm">City</label>
					<input id="city" type="text" placeholder="" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label className="text-sm">State / Province</label>
					<input id="state" type="text" placeholder=""  className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label  className="text-sm">ZIP / Postal</label>
					<input id="zip" type="text" placeholder="" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
				</div>
			</div>

            <div className='flex justify-center col-span-4'>
            <Link to='/' onClick={enrollHandelar} type="button" className="px-8 py-3 font-semibold rounded dark:bg-gray-100 dark:text-gray-800 bg-[#FF6A59] hover:text-white duration-300">Submit</Link>
            </div>

           
		</fieldset>
        
		
	</div>
</section>
            
        </div>
    );
};

export default EnrollForm;