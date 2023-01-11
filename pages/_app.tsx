import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {ClerkProvider, SignInButton, UserButton} from '@clerk/nextjs'
import React from "react";
import {secrets} from "../secrets";

export default function App({ Component, pageProps }: AppProps) {
  return <ClerkProvider {...pageProps} frontendApi={secrets.CLERK_FRONTEND_API} >
    <UserButton/>
    <SignInButton/>
    <Component {...pageProps} />
  </ClerkProvider>
}
