import React from 'react';
import { MyInput, MyButton, SearchWrapper } from './style';
import { BiSearchAlt } from "react-icons/bi";


function Search({ searchTerm, setSearchTerm }) {
  return (
    <SearchWrapper>
      <MyInput
        type="search"
        placeholder=" Encontre seu produto aqui..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <MyButton>
        <BiSearchAlt className='Searchs' />
      </MyButton>
    </SearchWrapper>
  );
}

export default Search;
