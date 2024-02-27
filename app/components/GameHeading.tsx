import { Heading } from '@chakra-ui/react';
import React from 'react';
import { GameQuery } from '../store';
import useGenres from '../hooks/useGenres';
import usePlatforms from '../hooks/usePlatforms';

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const {data: genres} = useGenres()
  const {data: platforms} = usePlatforms()

  const genre = genres?.results.find(g => g.id===gameQuery.genreId)
  const platform = platforms?.results.find(p => p.id===gameQuery.platformId)
  const heading = `${platform?.name || ''} ${
    genre?.name || ''
  } Games`;
  return <Heading as="h1" my={3} fontSize={'5xl'}>{heading}</Heading>;
};

export default GameHeading;
