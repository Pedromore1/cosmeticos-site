// src/App.jsx
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import GlobalStyles from './global';
import { StyleLink, MyNav, StylesLink } from './app';
import Home from './pages/Home/home';
import Admin from './pages/Admin/Admin.jsx';
import Login from './pages/Login/Login.jsx';
import CarrinhoPage from './pages/CarrinhoPage/CarrinhoPage.jsx';
import Navbar from './components/NavBarMenu/NavBarMenu.jsx';

// Componente interno para permitir uso de useLocation
function AppRoutes({ menuOpen, setMenuOpen, carrinho, adicionarAoCarrinho, alterarQuantidade, gerarLinkWhatsApp }) {
  const location = useLocation();
  const isHomePage = location.pathname === '/' || location.pathname.startsWith('/categoria');

  return (
    <>
      {/* Navbar SEMPRE visível */}
      <Navbar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        isHomePage={isHomePage} // só o botão hambúrguer reage a isso
      />

      {/* MyNav SEMPRE visível */}
      <MyNav>
        <StyleLink to="/admin">Admin</StyleLink>
        <StylesLink to="/carrinho">🛒 Carrinho ({carrinho.length})</StylesLink>
      </MyNav>

      <Routes>
        <Route path="/" element={<Home adicionarAoCarrinho={adicionarAoCarrinho} menuOpen={menuOpen} />} />
        <Route path="/categoria/:nome" element={<Home adicionarAoCarrinho={adicionarAoCarrinho} menuOpen={menuOpen} />} />
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

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [carrinho, setCarrinho] = useState(() => {
    const salvo = localStorage.getItem('carrinho');
    return salvo ? JSON.parse(salvo) : [];
  });

  useEffect(() => {
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
  }, [carrinho]);

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

  function alterarQuantidade(id, delta) {
    setCarrinho(prev =>
      prev
        .map(p => (p.id === id ? { ...p, quantidade: p.quantidade + delta } : p))
        .filter(p => p.quantidade > 0)
    );
  }

  function gerarLinkWhatsApp(metodoPagamento) {
    const telefone = '5524993224920';
    let mensagem = 'Olá, gostaria de fazer o pedido:\n';
    let total = 0;

    carrinho.forEach(item => {
      mensagem += `- ${item.nome} x${item.quantidade}\n`;
      total += item.preco * item.quantidade;
    });

    mensagem += `\nTotal: R$ ${total.toFixed(2)}`;
    mensagem += `\nMétodo de pagamento: ${metodoPagamento}`;

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
