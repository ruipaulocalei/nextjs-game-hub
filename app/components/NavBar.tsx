'use client';
import { HStack, Text } from '@chakra-ui/react';
import React from 'react';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';
import Link from 'next/link';

const NavBar = () => {
  return (
    <HStack>
      <Link href='/'><Text>GameHub</Text></Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
