'use client'
import { pb, SpotifyAuthStore } from "@/lib/pocketbase"

export default function Page(){
    
    const authStore=pb.authStore as SpotifyAuthStore
    return(<>
        <h1>User is {authStore.isValid.toString()}</h1>
        <h1>{authStore.model?.collectionName}</h1></>)
}