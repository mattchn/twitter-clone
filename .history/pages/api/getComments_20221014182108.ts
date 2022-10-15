import type { NextApiRequest, NextApiResponse } from 'next'
import { sanityClient } from '../../sanity'
import { Comment } from '../../typings'
import { groq } from 'next-sanity'

const feedQuery = groq`
   *[_type == 'comments' && !blockTweet]{
      _id,
      ...
   } | order(_createdAt desc)
`

type Data = {
  comments: Comment[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
   const comments: Comment[] = await sanityClient.fetch(feedQuery)
   res.status(200).json({comments})
}