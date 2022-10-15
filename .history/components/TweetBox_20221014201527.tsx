import React, { useState } from 'react'
import {
   CalendarIcon,
   EmojiHappyIcon,
   LocationMarkerIcon,
   PhotographIcon,
   SearchCircleIcon
} from '@heroicons/react/outline'
import { useSession } from 'next-auth/react'

function TweetBox() {
   const [input, setInput] = useState<string>('')
   const{data:session} = useSession()
   const[imageUrlBoxIsOpen, setImageUrlBoxIsOpen] = useState<boolean>(false)


   return (
      <div className='flex space-x-2 p-5'>
         <img 
            src={session?.user?.image || "https://links.papareact.com/gll"}
            alt="" 
            className='h-14 w-14 object-cover rounded-full mt-4'/>
         <div className='flex flex-1 items-center pl-2'>
            <form action="" className='flex flex-1 flex-col'>
               <input 
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  type="text" 
                  placeholder='Whats Happening?' 
                  className='h-24 w-full text-xl outline-none placeholder:text-xl' />
               <div className='flex items-center '>
                  <div className='flex flex-1 space-x-2 text-twitter'>
                     <PhotographIcon 
                        onClick={() => setImageUrlBoxIsOpen(!imageUrlBoxIsOpen)} className='h-5 w-5 cursor-pointer transition-transform duratino-150 ease-out hover:scale-150' />
                     <SearchCircleIcon className='h-5 w-5'/>
                     <EmojiHappyIcon className='h-5 w-5'/>
                     <CalendarIcon className='h-5 w-5'/>
                     <LocationMarkerIcon className='h-5 w-5'/>
                  </div>
                  <button
                     disabled = {!input || !session} 
                     className='bg-twitter rounded-full px-5 py-2 font-bold text-white disabled:opacity-40'>
                        Tweet
                  </button>
               </div>
               {imageUrlBoxIsOpen && (
                     <form className='mt-5 flex rounded-lg bg-twitter/80 py-2 px-4'>
                        <input 
                           className='flex-1 bg-transparent p-2 outline-none'
                           type="text" placeholder='Enter Image Url..'/>
                        <button>Add Image</button>
                     </form>
                  )}
            </form>
         </div>
      </div>
   )
}

export default TweetBox