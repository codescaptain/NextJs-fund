import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
import unfetch from 'isomorphic-unfetch'
import slug from 'slug';

function HomePage({charecter}) {
   

    return <Layout>
        <h1>{charecter.name}</h1>
        <figure>
        <img src={charecter.image} alt={charecter.name}/>
        </figure>

    </Layout>
}
export async function getStaticPaths() {
    const data = await unfetch("https://rickandmortyapi.com/api/character")
    const charecters = await data.json();
    return {
        paths: charecters.results.map(character => {
            return { params: { slug: `${slug(character.name)}-${character.id}` } }
        }),
        fallback: false,
    }
}

export async function getStaticProps({params}) {
    const id=params.slug.split("-").slice(-1)[0];
    const data = await unfetch(`https://rickandmortyapi.com/api/character/${id}`)
    const charecter = await data.json();
    

    return {
        props: {
            charecter
        }
    }

}


export default HomePage