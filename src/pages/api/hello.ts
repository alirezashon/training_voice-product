// pages/api/protected-data.ts
import { getSession } from 'next-auth/react';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });

  // Fetch public data
  const publicData = { message: 'This is public data.' };

  if (session) {
    // Fetch private data if the user is authenticated
    const privateData = { message: 'This is private data.' };

    // Return both public and private data
    return res.status(200).json({ publicData, privateData });
  }

  // Return only public data if the user is not authenticated
  return res.status(200).json({ publicData });
}
