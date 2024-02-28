'use client';
import { Box, Flex, Grid, GridItem, HStack, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { useState } from 'react';
import PlatformSelector from './components/PlatformSelector';
import SortSelector from './components/SortSelector';
import GameHeading from './components/GameHeading';

export default function Home() {
  return (
    <main>
      <Grid
        p={'10px'}
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area={'nav'}>
          <NavBar
          />
        </GridItem>
        <Show above="lg">
          <GridItem area={'aside'} px={2}>
            <GenreList />
          </GridItem>
        </Show>
        <GridItem area={'main'}>
          <Box pl={2}>
            <GameHeading />
            <Flex mb={3}>
              <Box marginRight={4}>
                <PlatformSelector />
              </Box>
              <SortSelector />
            </Flex>
          </Box>
          <GameGrid />
        </GridItem>
      </Grid>
    </main>
  );
}
