import { Session } from "next-auth"
export const getAccessToken = async (token:Session) => {
  
    if (!token) return
    if (token.expires>new Date(Date.now())){
        const res={access_token:token.accessToken}
        return res
    }
    const refreshToken=token.refreshToken
    const response:Response= await fetch("https://accounts.spotify.com/api/token", {method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(
        `${process.env.SPOTIFY_ID}:${process.env.SPOTIFY_SECRET}`
      ).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    }),
  });
  
  return response.json();
}

export const topTracks = async (accessToken:string) => {
    
    return fetch("https://api.spotify.com/v1/me/top/tracks",{
        headers: {
            Authorization: `Bearer ${accessToken}`,
          },
    })
}