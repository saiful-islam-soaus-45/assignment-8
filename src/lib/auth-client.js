import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    baseURL: "https://assignment-8-nine-sigma.vercel.app"
})
export default authClient;