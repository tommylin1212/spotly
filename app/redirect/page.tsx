'use client'
import { pb } from "@/lib/pocketbase"
import { useSearchParams } from "next/navigation"
import { AuthProviderInfo, Record } from "pocketbase"
import { useEffect, useState } from "react";
import { topTracks } from "@/lib/spotify";
import { SpotifyAuthStore } from "@/lib/pocketbase";
import { useRouter } from "next/navigation";

const redirectUrl = 'http://localhost:3000/redirect'
const authStore:SpotifyAuthStore=pb.authStore as SpotifyAuthStore
export default function Page(){
    const router =useRouter()
    const [provider, setProvider] = useState<AuthProviderInfo|null>(null);
    const params = useSearchParams()
    const state:string =params.get('state')||''
    const code:string = params.get('code')||''
    useEffect(() => {
        const pItem=localStorage.getItem('provider')
        if(pItem){
        const provider:AuthProviderInfo = JSON.parse(pItem);
        
        if (provider) {
         setProvider(provider);
        }
      }}, []);
    
    if(!provider)return <div>No Provider</div>
    if(state!=provider.state)return <div>states do not match</div>
    
    pb.collection('users').authWithOAuth2(
        provider.name,
        code,
        provider.codeVerifier,
        redirectUrl,{
            emailVisibility: true
        }
    ).catch((e)=>{
        console.log(e)
    }).then((authData) => {
        if(authData){
            authStore.accessToken=authData.meta?.accessToken
            console.log("🚀 ~ file: page.tsx:37 ~ Page ~ authData", authData)}
        
    })
    router.push('/pblogin')
}