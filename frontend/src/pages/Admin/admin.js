import { Link } from "react-router-dom";
import styled from "styled-components";

export const MyForm = styled.form `
    margin-left: 10px;

    input {
        height: 20px;
    }


    button {
        border: 1px solid gray;
        border-radius: 10px;
    }
`
export const MyLink = styled(Link) `
    text-decoration: none;
    color: black;
`

export const ProdutosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center; 
  margin-top: 50px;
  gap: 20px;
  justify-content: center;
`;

export const ProdutoCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  width: 200px;
  text-align: center;
`;
