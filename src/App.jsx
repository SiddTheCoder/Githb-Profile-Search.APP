import React, { useEffect, useState } from 'react';
import Profile from './components/Profile';
import Home from './components/Home';

function App() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null); 
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Reset error state on new search
    setError(false);

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      
      // Check if the user is not found
      if (data.message === 'Not Found') {
        setError(true);
        setUserData(null);
      } else {
        setUserData(data);
        setError(false);
      }
      console.log(data);
    } catch (err) {
      setError(true);
    }
  };



  return (
    <>
      <form 
        onSubmit={handleSubmit} 
        className='flex justify-center items-center w-full'
      >
        <input 
          type="text" 
          className='w-[30%] mt-10 bg-slate-900 h-10 rounded-lg px-5 py-2' 
          placeholder='Enter Github Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button 
          type="submit" 
          disabled={!username}
          className="ml-2 mt-10 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md cursor-pointer disabled:opacity-50"
        >
          Search
        </button>
      </form>
  
      {error ? (
        // Display an error div when the user is not found
        <div className="errorDiv mt-10 text-center text-red-500">
          User not found. Please try again.
        </div>
      ) : (
        // If there's no error, conditionally render Home or Profile
        !userData ? <Home /> : (
          <Profile 
            userName={userData.name || "No Name Available"}
            userImage={userData.avatar_url}
            userBio={userData.bio || "No bio available"}
            followers={userData.followers}
            following={userData.following}
            totalRepos={userData.public_repos}
            blog={userData.blog || "N/A"}
          />
        )
      )}
    </>
  );
}

export default App;
