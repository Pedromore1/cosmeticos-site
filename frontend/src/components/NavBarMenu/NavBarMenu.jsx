import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = styled.header`
  display: none;

  @media (max-width: 1008px) {
    display: flex;
    background-color: #52131b;
    margin-top: 20px;
    padding: 1rem;
    color: white;
    width: 100%;
    max-width: 100vw; 
    position: relative;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
  z-index: 2;

  @media (max-width: 1008px) {
    display: ${({ open }) => (open ? 'flex' : 'none')};
    flex-direction: column;
    overflow: hidden;
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    width: 100%; 
    max-width: 100vw;
    background-color: #52131b;
    padding: 1rem;
    box-sizing: border-box; 
  }

  .Categorias {
    text-decoration: none;
    color: white;
    font-size: 17px;
    font-weight: bold;
    word-break: break-word;
  }
`;

const Hamburger = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 2rem;
  color: white;
  z-index: 10;

  @media (max-width: 1008px) {
    display: block;
  }
`;

const DesktopOnly = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;

  @media (max-width: 1008px) {
    display: none;
  }

  li a {
    color: white;
    text-decoration: none;
    font-weight: bold;
  }
`;

export default function NavBarMenu({ menuOpen, setMenuOpen, isHomePage }) {
  if (!isHomePage) return null;

  return (
    <Header>
      <Hamburger onClick={() => setMenuOpen(!menuOpen)}>☰</Hamburger>

      <DesktopOnly>
        <li><Link to="/categoria/Perfumes">Perfumes</Link></li>
        <li><Link to="/categoria/Hidratante Corporal">Hidratante Corporal</Link></li>
        <li><Link to="/categoria/Hidratante Facial">Hidratante Facial</Link></li>
        <li><Link to="/categoria/Kit">Kit</Link></li>
        <li><Link to="/categoria/Promoções">Promoções</Link></li>
      </DesktopOnly>

      <NavLinks open={menuOpen}>
        <li><Link className="Categorias" to="/categoria/Perfumes" onClick={() => setMenuOpen(false)}>Perfumes</Link></li>
        <li><Link className="Categorias" to="/categoria/Hidratante Corporal" onClick={() => setMenuOpen(false)}>Hidratante Corporal</Link></li>
        <li><Link className="Categorias" to="/categoria/Hidratante Facial" onClick={() => setMenuOpen(false)}>Hidratante Facial</Link></li>
        <li><Link className="Categorias" to="/categoria/Kit" onClick={() => setMenuOpen(false)}>Kit</Link></li>
        <li><Link className="Categorias" to="/categoria/Promoções" onClick={() => setMenuOpen(false)}>Promoções</Link></li>
      </NavLinks>
    </Header>
  );
}
