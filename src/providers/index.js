"use client"
import { SessionProvider } from "next-auth/react"
import { Toaster } from "react-hot-toast"
import { ThemeProvider } from "next-themes";
export const Providers = ({children}) =>{
    return ( 
    <SessionProvider>
        <ThemeProvider
      attribute="class" 
      defaultTheme="system" 
      enableSystem
    >
      {children}
    </ThemeProvider>
        <Toaster />
     </SessionProvider>
    )
}