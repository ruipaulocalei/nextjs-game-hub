'use client';
import { HStack, Text } from '@chakra-ui/react';
import React from 'react';
import ColorModeSwitch from './ColorModeSwitch';

const NavBar = () => {
  return (
    <HStack justifyContent={'space-between'}>
      <Text>Game Hub</Text>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
