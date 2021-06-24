import React from 'react'

const UserBox = () => {
    return (
        <div className="flex justify-between items-center mb-6 mt-6 hover:bg-primary-light cursor-pointer rounded-full py-2 px-4 transform transition-colors duration-200">
            <img src="https://pbs.twimg.com/profile_images/1361059521611911168/3fIO8z-w_400x400.jpg" alt="profile" className="w-11 h-11 rounded-full"/>
            <div className="flex flex-col">
                <span className="font-bold text-md text-black">Oğuzhan </span>
                <span className="text-sm text-gray-dark">@oguzhannbalta</span>
            </div>
            <div className="flex flex-row space-x-1">
                <div className="w-1 h-1 bg-gray-900 rounded-full"/>
                <div className="w-1 h-1 bg-gray-900 rounded-full"/>
                <div className="w-1 h-1 bg-gray-900 rounded-full"/>
            </div>
            

        </div>
    )
}

export default UserBox
