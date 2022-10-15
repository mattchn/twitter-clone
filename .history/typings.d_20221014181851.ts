export interface Tweet extends TweetBody{
   _id: string
   _createdAt: string
   _updateAt: string
   _rev: string
   _type: 'tweet'
   blockTweet: boolean
}

export type TweetBody = {
   text: string
   username: string
   profileImg: string
   image?: string
}

export type CommentBody = {
   comment: string
   tweetId: string
   username: string
   profileImg: string
}
