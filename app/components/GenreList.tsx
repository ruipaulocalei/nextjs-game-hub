'use client';
import { HStack, List, ListItem, SkeletonText, Text } from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import Image from 'next/image';

const GenreList = () => {
  const { data: genres, isLoading, error } = useGenres();
  if (isLoading) return <SkeletonText />;
  return (
    <List>
      {genres.map((genre) => (
        <ListItem key={genre.id} py={1}>
          <HStack>
            <Image
              alt={genre.name}
              src={genre.image_background}
              height={120}
              width={32}
              className="rounded-lg"
            />
            <Text fontSize={'large'}>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
