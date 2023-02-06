import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]"

const handler= async (req: any, res:any) => {
  const session = await getServerSession(req, res, authOptions)
  if (session) {
    return res.status(200).json(session)
  } else {
    // Not Signed in
    res.status(401)
  }
  
  res.end()
}
export default handler;