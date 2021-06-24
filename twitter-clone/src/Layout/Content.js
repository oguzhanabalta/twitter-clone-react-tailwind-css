import React, {useState, useEffect} from "react";
import Divider from "../components/Divider";
import TweetBox from "../components/TweetBox";
import db from "../Firebase";
import { PopulerIcon } from "../icons/icon";
import FeedList from "../components/FeedList";


const Content = () => {
    const [tweets, setTweets] =useState([]);
    useEffect(()=>{
        db.collection('feed').orderBy('timestamp', 'desc').onSnapshot(snapshot => setTweets(snapshot.docs.map(doc => doc.data())))
    }, []);

    console.log(tweets)
   
    return (
        <main className="flex-1 flex flex-col border bg-white">
            <header className="sticky top-0 flex justify-between bg-white p-4 border-b border-gray-extraLight">
                <span className="font-bold text-xl">Home</span>
                <PopulerIcon className="w-6 h-6 text-primary-base"/>
            </header>
            <div className="flex space-x-2 px-4 py-3">
            <img src="https://pbs.twimg.com/profile_images/1361059521611911168/3fIO8z-w_400x400.jpg" alt="profile" className="w-11 h-11 rounded-full"/>
            <TweetBox></TweetBox>
            </div>
            <Divider></Divider>
            <FeedList tweets={tweets}></FeedList>

        </main>

    )
}

export default Content
