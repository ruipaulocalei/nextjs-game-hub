'use client';
import { HStack, Text } from '@chakra-ui/react';
import React from 'react';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({onSearch}:Props) => {
  return (
    <HStack>
      <Text>Games</Text>
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
