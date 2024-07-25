import React from "react";
import { Genre } from "../hooks/useGenres";
import useData from "../hooks/useData";
import {
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Button,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import { Props } from "./GenreList";

export const GenreList = ({ onSelectedGenre, selectedGenre }: Props) => {
  const { data, loading, error } = useData<Genre>("/genres");

  {
    error && <Button>{error}</Button>;
  }
  if (loading) return <Spinner></Spinner>;
  return (
    <>
      <Heading></Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
                objectFit="cover"
              ></Image>
              <Button
                onClick={() => onSelectedGenre(genre)}
                variant="link"
                whiteSpace="normal"
                textAlign="left"
                fontSize="lg"
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};
