import { NextApiRequest, NextApiResponse } from "next";
import { topTracks } from "../../../lib/spotify"
import { getToken } from "next-auth/jwt"
const secret = process.env.NEXTAUTH_SECRET;

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
  const token = await getToken({ req ,secret:secret})
  console.log("🚀 ~ file: topTracks.ts:8 ~ handler ~ token", token)
  const tokenRes= await fetch("http://localhost:3000/api/token/getToken",{mode:"no-cors",cache:"no-cache"})
  console.log("🚀 ~ file: topTracks.ts:7 ~ handler ~ tokenRes", tokenRes)
 
  
  // if(token===null){
  //  return res.status(307).json({msg:"no token"})
   
  // }
  // const response = await topTracks(token);
  
  // const { items }:SpotifyApi.UsersTopTracksResponse = await response.json();

  // const tracks = items.slice(0, 5).map((track) => ({
  //   title: track.name,
  //   artist: track.artists.map((_artist) => _artist.name).join(", "),
  //   // url: track.external_urls.spotify,
  //   // coverImage: track.album.images[1],
  // }));

  // res.setHeader(
  //   "Cache-Control",
  //   "public, s-maxage=86400, stale-while-revalidate=43200"
  // ); 

  // return res.status(200).json(tracks);
  return res.status(200).json({msg:"done"})
}