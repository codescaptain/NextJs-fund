import Head from 'next/head';
import Link from 'next/link';
import Layout from './../components/Layout';
function HomePage() {
    return <Layout>
        <Head>
            <title>Home </title>
        </Head>
        <h1>Welcome to Next.js!</h1>
        <p>Ahmet</p>

        <style  jsx>{`
        p{
            color:red;
            font-size:25px;
        }
        h1{
            color:pink;
        }
        
        `}</style>



       

    </Layout>
}

export default HomePage