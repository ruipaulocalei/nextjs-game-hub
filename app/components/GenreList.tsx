'use client';
import {
  Button,
  HStack,
  Heading,
  List,
  ListItem,
  SkeletonText,
  Text,
} from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import Image from 'next/image';
import getCroppedImageUrl from '../services/image-url';

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data: genres, isLoading, error } = useGenres();
  if (isLoading) return <SkeletonText />;
  return (
    <>
      <Heading fontSize="2xl" marginBottom={2}>
        Genres
      </Heading>
      <List>
        {genres.map((genre) => (
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
                fontWeight={selectedGenre?.id === genre.id ? 'bold' : 'normal'}
                onClick={() => onSelectGenre(genre)}
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
