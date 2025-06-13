import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  SearchMobile,
  DivLogo,
  LogoNome,
  MyDiv,
  MyH3,
  NenhumProduto,
  ScrollContainer,
  MyUl,
  MyButton
} from './styled';
import api from '../../service/api';
import CategoriaMenu from '../../components/CategoriaMenu/CategoriaMenu';
import Search from '../../components/Search/Search';
import imagem from '../../assets/logo.jpg';
import { categoriasFixas } from '../../constants/categorias';
import MobileSearch from '../../components/Search/MobileSearch/MobileSearch.jsx';

export default function Home({ adicionarAoCarrinho, menuOpen }) {
  const [produtos, setProdutos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const { nome } = useParams(); // categoria na URL
  const categoriaSelecionada = decodeURIComponent(nome || '');

  // Função para normalizar strings (remove acentos e baixa tudo)
  const normalize = (str) =>
    str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  useEffect(() => {
    api.get('/produtos')
      .then(res => {
        setProdutos(res.data);
        setSearchTerm(''); // limpa busca ao mudar categoria
      })
      .catch(console.error);
  }, [nome]); // recarrega ao mudar categoria na URL

  const produtosFiltrados = produtos.filter((produto) => {
    const nomeProduto = normalize(produto.nome);
    const categoriaProduto = normalize(produto.categoria);
    const termo = normalize(searchTerm);

    if (termo) {
      return nomeProduto.includes(termo) || categoriaProduto.includes(termo);
    }

    return categoriaSelecionada
      ? categoriaProduto === normalize(categoriaSelecionada)
      : true;
  });

  return (
    <div>
      {!menuOpen && (
        <SearchMobile>
          <MobileSearch onSearch={setSearchTerm} />
        </SearchMobile>
      )}

      <LogoNome>
        <Link to="/" onClick={() => setSearchTerm('')}>
          <h1>LUMINE</h1>
        </Link>
      </LogoNome>

      <DivLogo>
        <Link to="/" onClick={() => setSearchTerm('')}>
          <img
            className="logo"
            src={imagem}
            alt="Logo"
            style={{ cursor: 'pointer' }}
          />
        </Link>
      </DivLogo>

      <MyDiv>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <div>
          <CategoriaMenu
            categorias={categoriasFixas}
            categoriaSelecionada={categoriaSelecionada}
          />
        </div>
      </MyDiv>

      <div>
        {(searchTerm || categoriaSelecionada) && (
          <MyH3>
            {searchTerm ? 'Resultados da busca' : categoriaSelecionada}
          </MyH3>
        )}

        {produtosFiltrados.length === 0 && (
          <NenhumProduto>Nenhum produto encontrado.</NenhumProduto>
        )}

        <ScrollContainer>
          <MyUl>
            {produtosFiltrados.map((produto) => {
              const imagemUrl = produto.imagem.startsWith('http')
                ? produto.imagem
                : `https://cosmeticos-api.onrender.com/uploads/${produto.imagem}`;

              return (
                <li key={produto.id}>
                  <img src={imagemUrl} alt={produto.nome} width="100" />
                  <h3>{produto.nome}</h3>
                  <p>{produto.descricao}</p>
                  <p>
                    <strong>
                      {produto.preco.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      })}
                    </strong>
                  </p>
                  <MyButton onClick={() => adicionarAoCarrinho(produto)}>
                    Adicionar ao Carrinho
                  </MyButton>
                </li>
              );
            })}
          </MyUl>
        </ScrollContainer>
      </div>
    </div>
  );
}
