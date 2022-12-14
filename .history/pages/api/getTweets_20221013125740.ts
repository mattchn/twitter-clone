import type { NextApiRequest, NextApiResponse } from 'next'
import { sanityClient } from '../../sanity'
import { Tweet } from '../../typings'
import { groq } from 'next-sanity'

const feedQuery = groq`

*[_type == 'tweet' && ]{
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

  res.status(200).json({ name: 'John Doe' })
}
