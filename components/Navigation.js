import Link from 'next/link';
import { Container, Text, Grid, Box } from "@chakra-ui/react"
function Navigation() {
    return (
        <Container  centerContent mt={6}>
            <Grid  templateColumns="repeat(3, 1fr)" gap={3}>
                <Box w="100%" h="10"  >
                    <Link href="/">
                        <a>
                            <Text fontSize="25px" color="tomato">
                                Homepage
                  </Text>
                        </a>
                    </Link>
                </Box>

                <Box w="100%" h="10"  >
                <Link href="/about">
                    <a>
                        <Text fontSize="25px" color="tomato">
                            About
                  </Text>
                    </a>
                </Link>
                </Box>

            </Grid>




        </Container>
    );
}

export default Navigation;