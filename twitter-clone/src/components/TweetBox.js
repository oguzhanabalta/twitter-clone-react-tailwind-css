import React, {useState} from 'react'
import { ImageIcon } from '../icons/icon'
import { GIFIcon } from '../icons/icon'
import { PollIcon } from '../icons/icon'
import { ScheduleIcon } from '../icons/icon'
import { EmojiIcon } from '../icons/icon'
import db from "../Firebase"
import firebase from 'firebase'

const TweetBox = () => {
    const [content, setContent] =useState('')
    const sendTweet =() => {
        if(content !== '') {
            db.collection('feed').add({
                displayName:"Oğuzhan Balta",
                userName:"@oguzhannbalta",
                content,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                image: "https://www.marketing91.com/wp-content/uploads/2019/04/Ways-To-Be-Friendly-1.jpg",
                avatar:"https://pbs.twimg.com/profile_images/1361059521611911168/3fIO8z-w_400x400.jpg"
            });

            setContent('');


        }

    }
    return (
        <div className="flex flex-col flex-1 mt-2 px-2">
            <textarea className="w-full text-xl placeholder-gray-dark outline-none overflow-hidden resize-none" onChange={e => setContent(e.target.value)} value={content} placeholder="What's happening?"/>
            <div className="flex items-center justify-between">
                <div className="flex -ml-3">
                    <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-blue-100">
                        <ImageIcon className="w-6 h-6 text-primary-base"/>
                    </div>
                    <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-blue-100">
                        <GIFIcon className="w-6 h-6 text-primary-base"/>
                    </div>
                    <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-blue-100">
                        <PollIcon className="w-6 h-6 text-primary-base"/>
                    </div>
                    <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-blue-100">
                        <EmojiIcon className="w-6 h-6 text-primary-base"/>
                    </div>
                    <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-blue-100">
                        <ScheduleIcon className="w-6 h-6 text-primary-base"/>
                    </div>
                    
                </div>
                <button className="bg-primary-base text-white rounded-full px-4 py-2 font-medium " onClick={sendTweet}>Tweet</button>
            </div>
        </div>
    )
}

export default TweetBox
