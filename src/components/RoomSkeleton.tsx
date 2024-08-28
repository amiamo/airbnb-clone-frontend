import { Box, SkeletonText, Skeleton } from "@chakra-ui/react";

export default function RoomSkeleton() {
  return (
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
  );
}
