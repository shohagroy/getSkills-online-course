import React from 'react';

const Blog = () => {
    return (
        <div className='bg-gray-800'>
            <section className="max-w-[1200px] m-auto p-5 md:p-20 bg-gray-800 text-gray-100">
                <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                    <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Assignment Question</h2>
                    <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">What is the purpose of react router ?</summary>
                            <div className="px-4 pb-4">
                                <p>
                                    React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.

                                    ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, 
                                    and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">How does context api works ?</summary>
                            <div className="px-4 pb-4">
                                <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">What is useRef ?</summary>
                            <div className="px-4 pb-4 space-y-2">
                                <p>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
                                <p>useRef returns a mutable ref object whose .current property is initialized to the passed argument ( initialValue ). The returned object will persist for the full lifetime of the component. Essentially, useRef is like a “box” that can hold a mutable value in its .current property.</p>
                            </div>
                        </details>
                    </div>
                </div>
            </section>
            
        </div>
    );
};

export default Blog;