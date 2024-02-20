import { Button, Grid, GridItem, Show } from '@chakra-ui/react';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="">
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area={'nav'} bg={'red'}>
          Nav
        </GridItem>
        <Show above="lg">
          <GridItem area={'aside'} bg={'blue'}>
            Aside
          </GridItem>
        </Show>
        <GridItem area={'main'} bg={'gold'}>
          Main
        </GridItem>
      </Grid>
    </main>
  );
}
