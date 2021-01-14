import Navigation from './Navigation'
import Head from 'next/head'
export default function Layout({ children }) {
    return (
        <div>
            <Head>
                <title>Layout title </title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Navigation />
            <main>
                {children}
            </main>
            <footer>desgin by ahmet</footer>
        </div>
    )
}