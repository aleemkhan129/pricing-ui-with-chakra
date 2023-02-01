import icon1 from "@/icons/icon1";
import { Box, Flex, HStack, Icon, Text } from "@chakra-ui/react";
import icon2 from "@/icons/icon2";
import icon3 from "@/icons/icon3";
export default function Features() {
  return (
    <Box maxW={"650px"} m="auto" mt={"57px"} mx={{base:"10px",lg:"auto"}}>
      <HStack>
        <Flex direction={{ base: "column", lg: "row" }}>
          <HStack mt={{base:"13px"}}>
            <Icon as={icon1} />
            <Text color={"black"}>30 days money back Guarantee</Text>
          </HStack>

          <HStack mt={{base:"13px"}}>
            <Icon as={icon2} />
            <Text color={"black"}>No setup fees 100% hassle-free</Text>
          </HStack>
          <HStack mt={{base:"13px"}}>
            <Icon as={icon3} />
            <Text color={"black"}>
              No monthly subscription Pay once and for all
            </Text>
          </HStack>
        </Flex>
      </HStack>
    </Box>
  );
}
