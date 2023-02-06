import { topTracks } from "@/lib/spotify";
import { getToken } from "next-auth/jwt"
const secret = process.env.NEXTAUTH_SECRET;
export default async function fetchTopTracks(){
    const token = await getToken({ req ,secret:secret})
    return topTracks(token)
}