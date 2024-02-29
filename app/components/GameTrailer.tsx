import React from 'react';
import useTrailers from '../hooks/useTrailer';

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, isLoading, error } = useTrailers(gameId);
  if (isLoading) return null;
  if (error) throw error;
  const firstVideo = data?.results[0];
  return !firstVideo ? null : (
    <video src={firstVideo.data[480]} poster={firstVideo.preview} controls />
  );
};

export default GameTrailer;
