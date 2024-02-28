'use client';
import {
  Button,
  HStack,
  Heading,
  List,
  ListItem,
  SkeletonText
} from '@chakra-ui/react';
import Image from 'next/image';
import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';
import useGameQueryStore from '../store';

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const selectedGenreId = useGameQueryStore(s => s.gameQuery.genreId)
  const setGenreId = useGameQueryStore(s => s.setGenreId)
  if (isLoading) return <SkeletonText />;
  return (
    <>
      <Heading fontSize="2xl" marginBottom={2}>
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} py={1}>
            <HStack>
              <Image
                alt={genre.name}
                src={`${getCroppedImageUrl(genre.image_background)}`}
                height={200}
                objectFit="cover"
                width={32}
                style={{ borderRadius: 4 }}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontWeight={selectedGenreId === genre.id ? 'bold' : 'normal'}
                onClick={() => setGenreId(genre.id)}
                fontSize={'large'}
                variant="link"
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

export default GenreList;
