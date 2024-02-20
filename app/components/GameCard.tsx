import React from 'react';
import { Game } from '../hooks/useGames';
import { Card, CardBody, Heading } from '@chakra-ui/react';
import Image from 'next/image';

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
      />
      <CardBody>
        <Heading fontSize="2xl" textOverflow={'ellipsis'} noOfLines={1}>
          {game.name}
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
