'use client'
import { useSession, signIn} from "next-auth/react"
import { Inter } from '@next/font/google'
import styles from '../page.module.css'
import {useRouter} from "next/navigation"

const inter = Inter({ subsets: ['latin'] })
export default function Page() {
    
  const { data: session } = useSession()
  const router= useRouter()
  if (session) {
    router.push('/user')
    return<div></div>
  }
  return (
    <main className={styles.main}>
    <div className={styles.grid}>
      <a
          onClick={()=>signIn()}
          className={styles.card}
        >
          <h2 className={inter.className}>
            Sign In <span>-&gt;</span>
          </h2>
        </a>
    </div>
    </main>
  )
}