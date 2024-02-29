'use client';
import CriticScore from '@/app/components/CriticScore';
import DefinitionItem from '@/app/components/DefinitionItem';
import ExpandableText from '@/app/components/ExpandableText';
import GameAttribute from '@/app/components/GameAttribute';
import GameTrailer from '@/app/components/GameTrailer';
import NavBar from '@/app/components/NavBar';
import useGame from '@/app/hooks/useGame';
import { Box, Heading, SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import { useParams } from 'next/navigation';

const GameDetail = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug as string);
  if (isLoading) return <Spinner />;
  if (error || !game) throw error;
  return (
    <Box p={5}>
      <NavBar />
      <Heading>{game?.name}</Heading>
      <ExpandableText>{game?.description_raw}</ExpandableText>
      <GameAttribute game={game} />
      <GameTrailer gameId={game.id} />
    </Box>
  );
};

export default GameDetail;
