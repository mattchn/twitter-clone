import { Tweet } from "../typings";

export const fetchComments = async (tweetId: string) => {
   const res = await fetch(`/api/getComments?tweetId=${tweetId}`)
}