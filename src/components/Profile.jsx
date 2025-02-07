import React from 'react'

function UserHome({
    userName = 'Siddhant Yadav',
    userImage = 'https://avatars.githubusercontent.com/u/162303130?v=4',
    userBio = 'I am a software engineer',
    followers = 100,
    following = 100,
    totalRepos = 100,
    blog ='www.siddhantyadav.com.np',
}) {
    return (

        <div className=' bg-slate-900 w-[90%] flex flex-col h-[80vh] rounded-lg mx-auto mt-10 px-10 py-5'>
            <div className='border-b-2 h-2 border-slate-700 w-full'></div>
            <div className='h-full w-full flex justify-around rounded-lg p-3 gap-1'>
                <div className='h-full w-1/2 rounded-lg flex flex-col justify-center items-center'>
                    <img src={userImage} width={450} height={450}/>
                </div>
                <div className='border-l-2 border-slate-700 h-full w-[1px] rounded-lg'></div>
                <div className='h-full w-1/2 rounded-lg px-5 py-3'>
                    <div className='text-white text-3xl font-bold'>{userName}</div>
                    <div className='border-b-2 h-2 border-slate-700 w-1/2'></div>
                    <div className='text-white text-lg'>{userBio}</div>
                    <div className='border-b-2 h-2 border-slate-700 w-full'></div>
                    <div className='text-white text-md'>Followers : {followers}</div>
                    <div className='border-b-2 h-2 border-slate-700 w-1/2'></div>
                    <div className='text-white text-md'>Following : {following}</div>
                    <div className='border-b-2 h-2 border-slate-700 w-1/2'></div>
                    <div className='text-white text-md'>Total Repos : {totalRepos}</div>
                    <div className='border-b-2 h-2 border-slate-700 w-1/2'></div>
                    <div className='text-white text-md'>Visit Blog : <a href={blog} target='_blank' className='text-blue-500'>{blog}</a></div>
                    <div className='border-b-2 h-2 border-slate-700 w-1/2'></div>
                </div>
            </div>


        </div>



    )
}


export default UserHome
