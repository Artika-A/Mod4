import React from "react";

const Explanation = () => {
    return (
        <div className="container mt-5">
            <h2>React Router Explanation</h2>
            <div className="card p-4 mt-3">
                <h4>What is React Router?</h4>
                <p>
                    React Router is a standard library for routing in React applications. It enables navigation
                    between different components while keeping the URL synchronized with what's being rendered
                    on the page.
                </p>

                <h4 className="mt-4">Key Concepts</h4>
                <ul>
                    <li><strong>BrowserRouter:</strong> Wrapper component that enables routing functionality</li>
                    <li><strong>Routes:</strong> Container for all individual route components</li>
                    <li><strong>Route:</strong> Defines the mapping between URL paths and components</li>
                    <li><strong>Link:</strong> Creates navigation links in your application</li>
                 </ul>

                 <h4 className="mt-4">Basic Example</h4>
                 <pre className="bg-light p-3">
                 {`
          import {BrowserRouter, Routes, Route } from 'react-router-dom';
          
          <BrowserRoutes>
            <Routes>
                <Routes path="/" element={<Home />} />
                <Routes path="/about" element={<About />} />
                <Routes path="/contact" element={<Contact />} />
            </Routes>
          </BrowserRoutes>              
                 `}
                </pre>

                <h4 className="mt-4">Navigation Example</h4>
                <pre className="bg-light p-3">
                    {`
             import { Link } from 'react-router-dom';
             
             <nav>
                 < Link to="/">Home</Link>             // use < Link > instead of <a href> //
                 < Link to="/about">About</Link>
                 < Link to="/contact">Contact</Link>
             </nav>                    
                    
                    `}
                                                
              </pre>
            </div>
        </div>
    )
}




export default Explanation;