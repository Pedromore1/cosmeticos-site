import React from 'react';
import Carrinho from '../../components/Carrinho/Carrinho.jsx';
import {Mybutton} from './carrinhopage.js'
import { Link } from 'react-router-dom'

export default function CarrinhoPage({ carrinho, onAlterarQuantidade, gerarLinkWhatsApp }) {
  return (
    <div>
      <Mybutton>
        <Link to="/" className='link'> Voltar </Link>
      </Mybutton>

  
      <Carrinho
        itens={carrinho}
        onAlterarQuantidade={onAlterarQuantidade}
        gerarLinkWhatsApp={gerarLinkWhatsApp}
      />
    </div>
  );
}
