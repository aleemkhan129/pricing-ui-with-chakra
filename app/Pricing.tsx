import CheckMarkIcon from "@/icons/CheckMarkIcon";
import {
  Box,
  Flex,
  Text,
  Heading,
  Button,
  HStack,
  Icon,
  ListItem,
  ListIcon,
  List,
  UnorderedList,
} from "@chakra-ui/react";

export default function Pricing() {
  return (
    <Box
      mx={{base:"10px",lg:"auto"}}
      maxW={"994px"}
      // m={"auto"}
      // ml={{base:"10px",lg:"auto"}}
      // mr={{base:"10px",lg:"auto"}}
      mt="-130px"
      bg={"white"}
      borderRadius="16px"
      overflow={"hidden"}
      boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"
    >
      <Flex direction={{ base: "column", md: "column", lg: "row" }}>
        <Box bg={"#cbbBee"} color="black" p={"60px"} textAlign="center">
          <Text fontWeight={"bold"} fontSize="24px">
            Premium PRO
          </Text>
          <Heading>$329</Heading>
          <Text>billed just once</Text>
          <Button mt={"20px"} w={"300px"} color={"white"} bg={"#805AD5"}>
            Get Started
          </Button>
        </Box>
        <Box p="48px" color={"black"}>
          <Text>
            Access these features when you get this pricing package for your
            business.
          </Text>
          <HStack mb={"10px"}>
            <Icon as={CheckMarkIcon} />
            <Text>International calling and messaging API</Text>
          </HStack>
          <HStack mb={"10px"}>
            <Icon as={CheckMarkIcon} />
            <Text>Additional phone numbers</Text>
          </HStack>
          <HStack mb={"10px"}>
            <Icon as={CheckMarkIcon} />
            <Text>Automated messages via Zapier</Text>
          </HStack>
          <HStack mb={"10px"}>
            <Icon as={CheckMarkIcon} />
            <Text>24/7 support and consulting</Text>
          </HStack>
        </Box>
      </Flex>
    </Box>
  );
}
