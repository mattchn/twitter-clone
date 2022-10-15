import React from 'react'
import { Tweet } from '../typings'
import TimeAgo from 'react-timeago'

interface Props{
   tweet: Tweet
}

function Tweet({tweet}:Props) {
  return (
    <div>
      <div>
         <img src={tweet.profileImg} alt="" />
         <div>
            <div className='flex items-center'>
               <p>{tweet.username}</p>
               <p>@{tweet.username.replace(/\s+/g, '').toLowerCase()}</p>
               <TimeAgo
                  className='text-small text-gray-500'
                  date={tweet._createdAt}
               />
            </div>
         </div>
      </div>
    </div>
  )
}

export default Tweet