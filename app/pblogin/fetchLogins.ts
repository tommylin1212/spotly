import { pb } from "@/lib/pocketbase";

export default async function fetchLogins(){
const authMethod = await pb.collection('users').listAuthMethods()
return authMethod
}