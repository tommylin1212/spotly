import { Session } from "next-auth"
import { JWT } from "next-auth/jwt"

/** Example on how to extend the built-in session types */
declare module "next-auth" {
  interface Session {
    /** This is an example. You can find me in types/next-auth.d.ts */
    refreshToken: string
    accessToken: string
    expires: Date
    user:{
        name:string
        email:string
    }
  }
}

/** Example on how to extend the built-in types for JWT */
declare module "next-auth/jwt" {
  interface JWT {
    /** This is an example. You can find me in types/next-auth.d.ts */
    name:string
    email:string
    sub:string
    accessToken:string
    refreshToken:string
    iat:number
    exp:number
    jti:string
  }
}