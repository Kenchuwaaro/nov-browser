import { NextApiRequest, NextApiResponse } from 'next';
import { sampleUserData } from 'utils/sample-data';

const handler = (_req: NextApiRequest, res: NextApiResponse): void => {
  try {
      console.log(process.env.GOOGLE_CLIENT_ID)
    res.status(200).json(sampleUserData);
  } catch (err) {
    const error = err as Error;
    res.status(500).json({ statusCode: 500, message: error.message });
  }
};

export default handler;
