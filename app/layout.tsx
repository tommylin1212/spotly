import AuthContext from "./AuthContext";
import './globals.css'
import { SessionProvider } from "next-auth/react"
export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <AuthContext>
      <head />
      <body>{children}</body>
      </AuthContext>
    </html>
  )
}
