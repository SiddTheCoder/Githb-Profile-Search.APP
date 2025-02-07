import React from 'react';

function Home() {
    return (
        <div className="bg-slate-900 w-[90%] flex flex-col h-[80vh] rounded-lg mx-auto mt-10 px-10 py-5 text-center flex justify-center items-center">
            <h1 className="text-white text-4xl font-bold">Welcome to GitHub User Finder</h1>
            <p className="text-gray-400 mt-2">Enter a GitHub username to fetch user details.</p>
        </div>
    );
}

export default Home;
