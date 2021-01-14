import Navigation from './Navigation'
import Head from 'next/head'
import { ChakraProvider,extendTheme } from "@chakra-ui/react"


// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
 
}
const theme = extendTheme({ colors })
export default function Layout({ children }) {
    return (
        <ChakraProvider theme={theme}>
            <Head>
                <title>Layout title </title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Navigation />
            <main>
                {children}
            </main>
            
            </ChakraProvider>
    )
}