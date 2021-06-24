import React from 'react'
import FeedItem from './FeedItem'
const FeedList = ({tweets}) => {
    return (
        <div>
            {
                tweets.map((tweet, index) => (
                    <FeedItem {...tweet} key={index}></FeedItem>
                ))
            }
        </div>
    )
}

export default FeedList
