import { Badge} from "@chakra-ui/react"
export const liveSwitch = (status) => {
        switch (status) {
            case "Dead":
                return <Badge mr={2} borderRadius="full" px="2" colorScheme="red">
                    Dead
                             </Badge>;
            case "Alive":
                return <Badge mr={2} borderRadius="full" px="2" colorScheme="green">
                    Alive
                             </Badge>;
            
            default:
                return <Badge mr={2} borderRadius="full" px="2">
                    Unknown
                             </Badge>;
        }
    }

    export const speciesSwitch = (status) => {
        switch (status) {
            case "Human":
                return <Badge mr={2} borderRadius="full" px="2" colorScheme="pink">
                    Human
                             </Badge>;
            case "Alien":
                return <Badge mr={2} borderRadius="full" px="2" colorScheme="yellow">
                    Alien
                             </Badge>;
            
            default:
                return <Badge mr={2} borderRadius="full" px="2">
                       status
                             </Badge>;
        }
    }

    