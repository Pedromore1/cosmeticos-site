// src/App.jsx
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import GlobalStyles from './global';
import { StyleLink, MyNav, StylesLink } from './app.js';
import Home from './pages/Home/home';
import Admin from './pages/Admin/Admin.jsx';
import Login from './pages/Login/Login.jsx';
import CarrinhoPage from './pages/CarrinhoPage/CarrinhoPage.jsx';
import Navbar from './components/NavBarMenu/NavBarMenu.jsx';


// Componente das Rotas
function AppRoutes({ menuOpen, setMenuOpen, carrinho, adicionarAoCarrinho, alterarQuantidade, gerarLinkWhatsApp }) {
  const location = useLocation();
  const isHomePage = location.pathname === '/' || location.pathname.startsWith('/categoria');

  return (
    <>
      <Navbar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        isHomePage={isHomePage} 
      />

      <MyNav>
        <StyleLink to="/admin">Admin</StyleLink>
        <StylesLink to="/carrinho">🛒 Carrinho ({carrinho.length})</StylesLink>
      </MyNav>

      <Routes>
        <Route 
          path="/" 
          element={<Home adicionarAoCarrinho={adicionarAoCarrinho} menuOpen={menuOpen} />} 
        />
        <Route 
          path="/categoria/:nome" 
          element={<Home adicionarAoCarrinho={adicionarAoCarrinho} menuOpen={menuOpen} />} 
        />
        <Route 
          path="/carrinho" 
          element={
            <CarrinhoPage
              carrinho={carrinho}
              onAlterarQuantidade={alterarQuantidade}
              gerarLinkWhatsApp={gerarLinkWhatsApp}
            />
          } 
        />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}


// Função principal
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [carrinho, setCarrinho] = useState(() => {
    const salvo = localStorage.getItem('carrinho');
    return salvo ? JSON.parse(salvo) : [];
  });


  // Desativa scroll horizontal quando o menu está aberto no mobile
  useEffect(() => {
    document.body.style.overflowX = menuOpen ? 'hidden' : '';
  }, [menuOpen]);


  // Atualiza carrinho no localStorage
  useEffect(() => {
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
  }, [carrinho]);


  // Adicionar item ao carrinho
  function adicionarAoCarrinho(produto) {
    setCarrinho(prev => {
      const existe = prev.find(p => p.id === produto.id);
      if (existe) {
        return prev.map(p =>
          p.id === produto.id ? { ...p, quantidade: p.quantidade + 1 } : p
        );
      }
      return [...prev, { ...produto, quantidade: 1 }];
    });
  }


  // Alterar quantidade do item no carrinho
  function alterarQuantidade(id, delta) {
    setCarrinho(prev =>
      prev
        .map(p => (p.id === id ? { ...p, quantidade: p.quantidade + delta } : p))
        .filter(p => p.quantidade > 0) // Remove se quantidade ficar zero
    );
  }


  // Gerar link do WhatsApp
  function gerarLinkWhatsApp(metodoPagamento) {
    const telefone = '5524992349807';
    if (carrinho.length === 0) return '';

    let mensagem = '*🛍️ Pedido:*\n';
    let total = 0;

    carrinho.forEach(item => {
      mensagem += `- ${item.nome} x${item.quantidade}\n`;
      total += item.preco * item.quantidade;
    });

    mensagem += `\n*💰 Total:* R$ ${total.toFixed(2)}`;
    mensagem += `\n*💳 Pagamento:* ${metodoPagamento}`;

    return `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
  }


  return (
    <Router>
      <GlobalStyles />
      <AppRoutes
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        carrinho={carrinho}
        adicionarAoCarrinho={adicionarAoCarrinho}
        alterarQuantidade={alterarQuantidade}
        gerarLinkWhatsApp={gerarLinkWhatsApp}
      />
    </Router>
  );
}
