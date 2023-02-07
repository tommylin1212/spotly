import styles from "../../page.module.css"

import Image from "next/image"
export function SpotifyTrack(track:SpotifyApi.TrackObjectFull){
 return (
        <a
        className={styles.card}
        >
        <Image
        src={track.album.images[0].url}
        alt="Vercel Logo"
        width={track.album.images[0].width}
        height={track.album.images[0].height}
        priority
      />
        </a>
 )
}