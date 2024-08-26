import { Button, Heading, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <VStack
      bg={"gray.300"}
      justifyContent={"center"}
      minHeight={"100vh"}>
      <Heading>Page not found.</Heading>
      <Text>It seems that you're lost.</Text>
      <Link to={"/"}>
        <Button
          colorScheme={"red"}
          variant={"solid"}>
          &larr; Back Home
        </Button>
      </Link>
    </VStack>
  );
}
