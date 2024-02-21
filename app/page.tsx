import { Button, Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';

export default function Home() {
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
          <GridItem area={'aside'} px={2}><GenreList /></GridItem>
        </Show>
        <GridItem area={'main'}>
          <GameGrid />
        </GridItem>
      </Grid>
    </main>
  );
}
