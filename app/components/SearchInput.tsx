import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs';
import useGameQueryStore from '../store';
import { redirect, useRouter } from 'next/navigation';


const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore(s => s.setSearchText)
  const navigate = useRouter()
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          setSearchText(ref.current.value);
          navigate.back()
        }
      }}
    >
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <BsSearch />
        </InputLeftElement>
        <Input
          ref={ref}
          placeholder="Search games..."
          borderRadius={20}
          variant={'filled'}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
