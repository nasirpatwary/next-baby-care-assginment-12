import { loginUser } from "@/actions/server/users";
import CredentialsProvider from "next-auth/providers/credentials"
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { collections, dbConnect } from "./dbConnect";
const userCollection = await dbConnect(collections.USERS)
export const authOptions = {
 session: {
    strategy: "jwt", 
  },
providers: [
  CredentialsProvider({
  
  async authorize(credentials, req) {
      const user = await loginUser(credentials)
      return user
    }
  }),
   GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
  }),
  GitHubProvider({
    clientId: process.env.GITHUB_ID,
    clientSecret: process.env.GITHUB_SECRET
  })
],

callbacks: {
    async signIn({ user, account, profile, credentials }) {
      try {
      const {name, email, image} = user
      const exitingUser = await userCollection.findOne({email})
      if (!exitingUser) {
         const newUser = {name, email, image}
         await userCollection.insertOne(newUser)
      }
      return true

      } catch (error) {
        console.log("socail login filed", error)
      }
    },
    // async redirect({ url, baseUrl }) {
    //   return baseUrl
    // },
    async session({ session, user, token }) {
      if (token) {
        session.email = token?.email
      }
      return session
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user) {
        if (account.provider) {
          const dbUser = await userCollection.findOne({email: user?.email})
          token.email = dbUser?.email
        }else{
          token.email = user?.email
        }
      }
      return token
    }}
}