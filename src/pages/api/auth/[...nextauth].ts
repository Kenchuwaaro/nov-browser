import NextAuth from 'next-auth';
import { Provider } from 'next-auth/client';
import Providers from 'next-auth/providers';

export default NextAuth({
  providers: [
    Providers.Twitter({
      clientId: process.env.TWITTER_CLIENT_ID ?? '',
      clientSecret: process.env.TWITTER_CLIENT_SECRET ?? '',
    }),
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
    }),
  ],
  // SQL or MongoDB database (or leave empty)
  database: process.env.DATABASE_URL,
});
