'use client';
import { Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { useState } from 'react';
import { Genre } from './hooks/useGenres';
import PlatformSelector from './components/PlatformSelector';
import { Platform } from './hooks/usePlatforms';

export default function Home() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );
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
          <PlatformSelector selectedPlatform={selectedPlatform}
            onSelectPlatform={(platform) => setSelectedPlatform(platform)}
          />
          <GameGrid selectedPlatform={selectedPlatform} selectedGenre={selectedGenre} />
        </GridItem>
      </Grid>
    </main>
  );
}
