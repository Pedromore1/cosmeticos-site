// src/components/CategoriaMenu/CategoriaMenu.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Mydiv, CategoriaLink } from './styled';

export default function CategoriaMenu({ categorias, categoriaSelecionada }) {
  const navigate = useNavigate();

  const handleClick = (cat) => {
    const categoriaURL = encodeURIComponent(cat);
    navigate(`/categoria/${categoriaURL}`);
  };

  return (
    <Mydiv>
      {categorias.map(cat => (
        <CategoriaLink
          key={cat}
          onClick={() => handleClick(cat)}
          
        >
          <span>{cat}</span>
        </CategoriaLink>
      ))}
    </Mydiv>
  );
}
