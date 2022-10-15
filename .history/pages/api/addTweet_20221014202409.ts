import type { NextApiRequest, NextApiResponse } from 'next'
import { sanityClient } from '../../sanity'
import { TweetBody } from '../../typings'

type Data = {
   comments: Comment[]
 }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
   const data: TweetBody = JSON.parse(req.body)

   res.status(200).json({comments})
}