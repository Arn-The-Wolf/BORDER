import React from 'react';

const App = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-blue-800">
            <div className="relative w-72 h-96 flex flex-col justify-center items-center bg-black rounded-xl overflow-hidden">
                <h1 className="text-3xl font-medium text-white">What do u know about Jesus</h1>
                <p className="text-gray-400 font-light">Jesus is my saviour the controller of life. He did great things to our lives. He lives and will live forever.</p>
                <div className="absolute inset-1 bg-blue-800 rounded-lg"></div>
                <div className="absolute w-36 h-full bg-white shadow-md animate-spin"></div>
            </div>
        </div>
    );
}

export default App;
