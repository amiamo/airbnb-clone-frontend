import { Grid } from "@chakra-ui/react";
import RoomSkeleton from "../components/RoomSkeleton";
import Room from "../components/Room";
import { useQuery } from "@tanstack/react-query";
import { getRooms } from "../api";

interface IPhoto {
  pk: number;
  file: string;
  description: string;
}
interface IRoom {
  pk: number;
  name: string;
  country: string;
  city: string;
  price: number;
  rating: string;
  is_owner: boolean;
  photos: IPhoto[];
}

export default function Home() {
  const { isLoading, data } = useQuery<IRoom[]>({
    queryKey: ["rooms"],
    queryFn: getRooms,
  });
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
      {isLoading ? (
        <>
          <RoomSkeleton />
          <RoomSkeleton />
          <RoomSkeleton />
          <RoomSkeleton />
          <RoomSkeleton />
          <RoomSkeleton />
          <RoomSkeleton />
          <RoomSkeleton />
          <RoomSkeleton />
          <RoomSkeleton />
          <RoomSkeleton />
          <RoomSkeleton />
          <RoomSkeleton />
          <RoomSkeleton />
          <RoomSkeleton />
        </>
      ) : null}
      {data?.map((room) => (
        <Room
          imageUrl={room.photos[0].file}
          name={room.name}
          rating={room.rating}
          city={room.city}
          country={room.country}
          price={room.price}
        />
      ))}
    </Grid>
  );
}
