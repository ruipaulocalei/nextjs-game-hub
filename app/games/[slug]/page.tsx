'use client';
import ExpandableText from '@/app/components/ExpandableText';
import NavBar from '@/app/components/NavBar';
import useGame from '@/app/hooks/useGame';
import { Box, Heading, Spinner, Text } from '@chakra-ui/react';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/router';
import React from 'react';

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
    </Box>
  );
};

export default GameDetail;
