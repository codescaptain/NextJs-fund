import Head from 'next/head';
import Link from 'next/link';
import slug from 'slug'
import Layout from './../components/Layout';
import unfetch from 'isomorphic-unfetch'
import {Box, Grid, Image, Heading}
    
from "@chakra-ui/react"
import { liveSwitch, speciesSwitch } from '../components/status'
function HomePage({ charecters }) {


    return <Layout>
        <Head>
            <title>Home </title>
        </Head>

        <Grid templateColumns="repeat(3, 2fr)" m={3} gap={3}>

            {
                charecters.results.map((charecter, key) => (
                    <Box

                        alignItems="center"
                        key={key} maxW="lg" borderWidth="2px" borderRadius="lg" overflow="hidden">
                        <Link href="/character/[slug]" as={`/character/${slug(charecter.name)}-${charecter.id}`}>
                            <a><Image
                                fallbackSrc="https://via.placeholder.com/150"

                                src={charecter.image}
                                alt={charecter.name} /></a>
                        </Link>

                        <Heading as="h3" size="m" isTruncated ml={3}>
                            <Link href="/character/[slug]" as={`/character/${slug(charecter.name)}-${charecter.id}`}>
                                <a>{charecter.name}</a>
                            </Link>
                        </Heading>
                        <Box p="6">
                            <Box d="flex" alignItems="baseline">
                                {
                                    liveSwitch(charecter.status)
                                }
                                {
                                    speciesSwitch(charecter.species)
                                }


                            </Box>
                        </Box>
                    </Box>



                ))
            }


        </Grid>










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