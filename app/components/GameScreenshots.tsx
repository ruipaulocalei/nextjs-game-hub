import React from 'react';
import useScreenshots from '../hooks/useScreenshots';
import { SimpleGrid } from '@chakra-ui/react';
import Image from 'next/image';

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshots(gameId);
  if (isLoading) return null;
  if (error) throw error;
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={3}>
      {data?.results.map((p) => (
        <Image
          key={p.id}
          src={p.image}
          alt={p.image}
          height={150}
          width={150}
        />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
