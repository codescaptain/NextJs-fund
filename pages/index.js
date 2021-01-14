import Head from 'next/head';
import Link from 'next/link';
import slug from 'slug'
import Layout from './../components/Layout';
import unfetch from 'isomorphic-unfetch'
function HomePage({ charecters }) {
   
    return <Layout>
        <Head>
            <title>Home </title>
        </Head>
        <h1>Welcome to Next.js!</h1>
        <ul>
            {
               charecters.results.map((charecter,key)=>(
                <li key={key}>
                <Link href="/character/[slug]" as={`/character/${slug(charecter.name)}-${charecter.id}`}>
                <a>{charecter.name}</a>
                </Link>
                </li>
               ))
            }
        </ul>



        <style jsx>{``}</style>






    </Layout>
}

export async function getStaticProps() {
    const data = await unfetch("https://rickandmortyapi.com/api/character")
    const charecters = await data.json();

    return {
        props: {
            charecters
        }
    }

}

// HomePage.getInitialProps = async () => {

// }

export default HomePage