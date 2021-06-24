import React from 'react'
import { LikeIcon, ReplyIcon, ReTweetIcon, ShareIcon } from '../icons/icon'

const FeedItem = ({avatar, content, displayName, image, timestamp, userName,}) => {
    return (        
         <article className="flex space-x-3 border-b border-gray-extraLight px-4 py-3 cursor-pointer">
             <img src={avatar} alt="profile" className="w-11 h-11 rounded-full" />
             <div className="flex-1">
                <div className="flex items-center text-sm">
                    <h4 className="font-bold">{displayName}</h4>
                    <span className="text-gray-dark ml-2">{userName}</span>
                    <div className="mx-2 bg-gray-dark h-1 w-1 border rounded-full"/>
                     <span className="text-gray-dark">
                     {timestamp?.toDate().toLocaleTimeString("tr-TR")}
                     </span>
                </div>
                <p className="mt-2 text-gray-800 text-sm">{content}</p>
                {image && (
                    <img src={image} className="my-2 rounded-xl max-h-96"/>
                )}
                <ul className="-ml-1 mt-3 flex justify-between max-w-md">
                    <li className="flex items-center space-x-3 text-gray-dark group ">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-blue-100 group-hover:text-blue-500">
                            <ReplyIcon className="w-5 h-5"></ReplyIcon>
                        </div>
                        <span className="group-hover:text-blue-500"> 3 </span>
                        
                    </li>

                    <li className="flex items-center space-x-3 text-gray-dark group ">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-green-100 group-hover:text-green-500">
                            <ReTweetIcon className="w-5 h-5"></ReTweetIcon>
                        </div>
                        <span className="group-hover:text-green-500"> 5 </span>
                        
                    </li>

                    <li className="flex items-center space-x-3 text-gray-dark group ">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-red-100 group-hover:text-red-500">
                            <LikeIcon className="w-5 h-5"></LikeIcon>
                        </div>
                        <span className="group-hover:text-red-500"> 10 </span>
                        
                    </li>

                    <li className="flex items-center space-x-3 text-gray-dark group ">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-blue-100 group-hover:text-blue-500">
                            <ShareIcon className="w-5 h-5"></ShareIcon>
                        </div>
                        
                        
                    </li>
                </ul>
             </div>  
         </article>

            
        
    )
}

export default FeedItem
