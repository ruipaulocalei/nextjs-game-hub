'use client';
import { Button, Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { useState } from 'react';
import { Genre } from './hooks/useGenres';

export default function Home() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  return (
    <main className="">
      <Grid
        p={'10px'}
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area={'nav'}>
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area={'aside'} px={2}>
            <GenreList
              selectedGenre={selectedGenre}
              onSelectGenre={(genre) => setSelectedGenre(genre)}
            />
          </GridItem>
        </Show>
        <GridItem area={'main'}>
          <GameGrid selectedGenre={selectedGenre} />
        </GridItem>
      </Grid>
    </main>
  );
}
