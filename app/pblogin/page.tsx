'use client'
import { pb, SpotifyAuthStore } from "@/lib/pocketbase";
import ListLogins from "./loginButton"
import Link from "next/link";

export default function Page(){
    
    const authStore=pb.authStore as SpotifyAuthStore
    if(!authStore.isValid){
    return (<div>
        <h1>User is {authStore.isValid.toString()}</h1>
        <ListLogins></ListLogins>
    </div>)
    }
    if(authStore.isValid){
        return (<div>
            <h1>User is {authStore.isValid.toString()}</h1>
            <p>{authStore.accessToken}</p>
            <Link href="/pbuser">user</Link>
        </div>)
    }
}