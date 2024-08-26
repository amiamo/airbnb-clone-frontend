import {
  Box,
  Grid,
  HStack,
  Image,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { FaRegHeart, FaStar } from "react-icons/fa";

export default function Room() {
  const gray = useColorModeValue("gray.600", "gray.300");
  return (
    <VStack
      alignItems={"flex-start"}
      spacing={1}>
      <Box
        position={"relative"}
        mb={2}
        overflow={"hidden"}
        rounded={"2xl"}>
        <Image
          minH={"280px"}
          src='https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NjgyNDc0NzIxNDE2NTI5NTIy/original/c329a04a-51b7-477d-9fc7-7aa4a3a998e7.jpeg?im_w=720'
        />
        <Box
          cursor={"pointer"}
          position={"absolute"}
          top={5}
          right={5}
          color={"gray.600"}>
          <FaRegHeart size={20} />
        </Box>
      </Box>
      <Box>
        <Grid
          gap={2}
          templateColumns={"6fr 1fr"}>
          <Text
            as={"b"}
            noOfLines={1}
            fontSize='md'>
            OMG Winner, Coconest Langkawi
          </Text>
          <HStack
            _hover={{ color: "red.400" }}
            spacing={1}>
            <FaStar size={14} />
            <Text>5.0</Text>
          </HStack>
        </Grid>
        <Text
          fontSize={"sm"}
          color={gray}>
          말레이시아 LAngkawi
        </Text>
      </Box>
      <Text
        fontSize={"small"}
        color={gray}>
        <Text as={"b"}>$180</Text>/ night
      </Text>
    </VStack>
  );
}
