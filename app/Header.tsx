import { Box, Heading, Text } from "@chakra-ui/react";

export default function Header(){
    return(
        <Box textAlign={{base:"left",md:"left", lg:"center"}} bg="#6B46C1" pt={"90"}pb="250" pl={"10px"}>
            <Heading>Simple pricing for your business</Heading>
            <Text pt="10px">Plans that are carefully crafted to suit your business.</Text>
        </Box>
    )
}