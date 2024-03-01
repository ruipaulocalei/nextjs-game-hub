'use client';
import CriticScore from '@/app/components/CriticScore';
import DefinitionItem from '@/app/components/DefinitionItem';
import ExpandableText from '@/app/components/ExpandableText';
import GameAttribute from '@/app/components/GameAttribute';
import GameScreenshots from '@/app/components/GameScreenshots';
import GameTrailer from '@/app/components/GameTrailer';
import NavBar from '@/app/components/NavBar';
import useGame from '@/app/hooks/useGame';
import { Box, GridItem, Heading, SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import { useParams } from 'next/navigation';

const GameDetail = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug as string);
  if (isLoading) return <Spinner />;
  if (error || !game) throw error;
  return (
    <Box p={5}>
      <NavBar />
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
        <GridItem>
          <Heading>{game?.name}</Heading>
          <ExpandableText>{game?.description_raw}</ExpandableText>
          <GameAttribute game={game} />
        </GridItem>
        <GridItem>
          <GameTrailer gameId={game.id} />
          <GameScreenshots gameId={game.id} />
        </GridItem>
      </SimpleGrid>
    </Box>
  );
};

export default GameDetail;
