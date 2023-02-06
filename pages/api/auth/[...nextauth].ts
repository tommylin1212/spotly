import NextAuth, { NextAuthOptions } from "next-auth"
import SpotifyProvider from "next-auth/providers/spotify"
console.log(process.env.SPOTIFY_ID)
export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_ID||"",
      clientSecret: process.env.SPOTIFY_SECRET||"",
      authorization:
      "https://accounts.spotify.com/authorize?scope=user-read-email,user-top-read",
    }),
  ],
  session:{strategy:'jwt'},
  callbacks:{
    async jwt({token,account}){
        if(account){
            
            token.accessToken= account.access_token||""
            token.refreshToken=account.refresh_token||""
        }
        return token
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken
      session.refreshToken = token.refreshToken
      return session
    }
  }
}

export default NextAuth(authOptions)