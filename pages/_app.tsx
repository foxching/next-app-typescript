import React from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from "@chakra-ui/react"
import Layout from '../components/layout/Layout'
import AppContextProvider from '../context/AppContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <AppContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppContextProvider>

    </ChakraProvider>
  )
}
export default MyApp
