import styled from "styled-components";
import { Link } from "react-router-dom";

export const MyNav = styled.nav`
  background-color: #52131b;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;

  @media (max-width: 1008px) { 
   position: relative;
   top: -100px;
  
  }
`;

export const StyleLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 14px;
`;

export const StylesLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 20px;
`;
