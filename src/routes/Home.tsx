import { Box, Grid, Skeleton, SkeletonText } from "@chakra-ui/react";
import Room from "../components/Room";

export default function Home() {
  return (
    <Grid
      marginTop={10}
      px={{
        sm: "10",
        md: "20",
        lg: "30",
        xl: "40",
      }}
      columnGap={4}
      rowGap={8}
      templateColumns={{
        sm: "1fr",
        md: "1fr 1fr",
        lg: "1fr 1fr 1fr",
        xl: "1fr 1fr 1fr 1fr",
      }}>
      <Box>
        <Skeleton
          rounded='2xl'
          mb={5}
          height={280}
        />
        <SkeletonText
          w={"70%"}
          noOfLines={2}
          mb={5}
        />
        <SkeletonText
          w={"20%"}
          noOfLines={1}
          mb={4}
        />
      </Box>
      <Room />
    </Grid>
  );
}
