import React from 'react';
import { Game } from '../hooks/useGames';
import { Card, CardBody, HStack, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { platform } from 'os';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow={'hidden'}>
      <Image
        width={420}
        height={400}
        src={game.background_image}
        alt={game.name}
        style={{
          width: '100%',
        }}
      />
      <CardBody>
        <Heading fontSize="2xl" textOverflow={'ellipsis'} noOfLines={1}>
          {game.name}
        </Heading>
        <HStack justifyContent='space-between'>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
