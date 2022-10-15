import type { NextApiRequest, NextApiResponse } from 'next'
import { sanityClient } from '../../sanity'
import { Tweet } from '../../typings'
import { groq } from 'next-sanity'

const feedQuery = groq`
   *[_type == 'tweet' && !blockedTweet]{
      _id,
      ...
   } | order(_createdAt desc)
`

type Data = {
  tweets: Tweet[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
   const tweets: Tweet[] = await sanityClient.fetch(feedQuery)
   console.log(tweets)
   res.status(200).json({})
}
