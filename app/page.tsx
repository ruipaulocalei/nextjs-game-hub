import { Button, Grid, GridItem, Show } from '@chakra-ui/react';
import Image from 'next/image';
import NavBar from './components/NavBar';

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
          <GridItem area={'aside'}>Aside</GridItem>
        </Show>
        <GridItem area={'main'}>Main</GridItem>
      </Grid>
    </main>
  );
}
