import React, { useState } from 'react';
import styled from 'styled-components';
import { BiSearchAlt } from 'react-icons/bi';

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 8px;
  margin: 10px;
  
`;

const Input = styled.input`
  flex: 1;
  border: none;
  padding: 8px;
  font-size: 16px;
  outline: none;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

  .searchs {
      font-size: 27px;
      margin-left: 40px;
      
  }
`;

export default function MobileSearch({ onSearch }) {
  const [value, setValue] = useState('');

  function handleInputChange(e) {
    const newTerm = e.target.value;
    setValue(newTerm);
    onSearch(newTerm);
  }

  return (
    <SearchWrapper>
      <Input
        type="text"
        placeholder="Encontre seu produto aqui..."
        value={value}
        onChange={handleInputChange}
      />
      <Button>
        <BiSearchAlt className='searchs' />
      </Button>
    </SearchWrapper>
  );
}



