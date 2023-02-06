"use client";
import { useSession,signOut } from "next-auth/react"
import {useRouter} from "next/navigation"
import { Inter } from '@next/font/google'

import styles from '../page.module.css'
const inter = Inter({ subsets: ['latin'] })

export default function Page() {
  const { data: session } = useSession();
  const router= useRouter()
  if(!session){
   router.push('/login')
   return <div></div>
  }
  if(session){
  return (
    
    <main className={styles.main}>
    <div className={styles.grid}>
      <a
          onClick={()=>signOut()}
          className={styles.card}
        >
          <h2 className={inter.className}>
            Sign Out <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
          {session?.user?.name || "no login"} {session?.user?.email}
          </p>
        </a>
    </div>
    </main>
  );
  }
}