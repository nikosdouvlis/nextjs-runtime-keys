import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {ClerkProvider, SignInButton, UserButton} from '@clerk/nextjs'
import React from "react";

export default function App({ Component, pageProps }: AppProps) {
  return <ClerkProvider {...pageProps} >
    <UserButton/>
    <SignInButton/>
    <Component {...pageProps} />
  </ClerkProvider>
}
