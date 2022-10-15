import { Tweet } from "../typings";

export const fetchComments = async (tweetId: string) => {
   const res = await fetch(`/api/getComments?tweetId=${tweetId}`)

   const data = await res.json();
   const tweets: Tweet[] = data.tweets;

   return tweets
}