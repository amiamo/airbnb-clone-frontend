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

interface IRoomProps {
  imageUrl: string;
  name: string;
  rating: string;
  city: string;
  country: string;
  price: number;
}

export default function Room({
  imageUrl,
  name,
  rating,
  city,
  country,
  price,
}: IRoomProps) {
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
          h={"280px"}
          w={"440px"}
          src={imageUrl}
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
            {name}
          </Text>
          <HStack
            _hover={{ color: "red.400" }}
            spacing={1}>
            <FaStar size={14} />
            <Text>{rating}</Text>
          </HStack>
        </Grid>
        <Text
          fontSize={"sm"}
          color={gray}>
          {city},{country}
        </Text>
      </Box>
      <Text
        fontSize={"small"}
        color={gray}>
        <Text as={"b"}>{price}</Text>/ night
      </Text>
    </VStack>
  );
}
