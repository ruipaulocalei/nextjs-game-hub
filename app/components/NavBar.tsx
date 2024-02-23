'use client';
import { HStack, Text } from '@chakra-ui/react';
import React from 'react';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

const NavBar = () => {
  return (
    <HStack>
      <Text>Game Hub</Text>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
