'use client'
import { redirect } from "next/dist/server/api-utils"
import { AuthMethodsList } from "pocketbase"
import { useEffect, useState } from "react"
import fetchLogins from "./fetchLogins"
const redirectUrl = 'http://localhost:3000/redirect'
import Link from "next/link"
function handleClick(logins:AuthMethodsList){
    if (localStorage.getItem('provider')){
        console.log("REMOVING ITEM")
        localStorage.removeItem('provider')
    }
    localStorage.setItem('provider',JSON.stringify(logins.authProviders[0]))
}

export default function ListLogins(){
  const [logins, setLogins] = useState<AuthMethodsList| null>(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetchLogins().then((logins)=>{ setLogins(logins)}).catch((e)=>{console.log(e)})
   
    setLoading(false)
  }, [])

  if (isLoading) return <div>Loading...</div>
  if (!logins) return <div>No profile data</div>
    
    return (<div><Link href={logins.authProviders[0].authUrl+ redirectUrl} onClick={()=>handleClick(logins)}>{logins.authProviders[0].name}</Link></div>)
}