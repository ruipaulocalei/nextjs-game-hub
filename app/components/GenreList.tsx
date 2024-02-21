'use client';
import {
  Button,
  HStack,
  List,
  ListItem,
  SkeletonText,
  Text,
} from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import Image from 'next/image';

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
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
            <Button
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
  );
};

export default GenreList;
