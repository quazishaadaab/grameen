import RedditProvider from "next-auth/providers/reddit";


import NextAuth from "next-auth"
export default NextAuth({
  // Configure one or more authentication providers
//   problem with the .env.local file
  providers: [
    RedditProvider({
      clientId: `m-qkxmC8o7vm__81Ct4eUA` ,
      clientSecret: `HBl1YIsO0HJSCA_URFN_yWfQAYROpg`
    })
  ]
})