import styled from "styled-components";

export const ButtonBack = styled.button`
    margin-top: 20px;
    margin-left: 20px;
    background-color: #52131b;
    width: 70px;
    padding: 5px;
    border: none;
    border-radius: 10px;
    transition: all 5px ease;

    &:hover {
        transform: scale(1.03);
    }
    .voltar {
       text-decoration: none;
       color: white;
       font-size: 15px;
       font-weight: bold;
    }
`

export const Mydiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 85vh;

    form {
       border: solid 1px transparent;
       border-radius: 10px;
       background-color:rgb(238, 237, 235);
       padding: 50px;
       box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

     @media (max-width: 1008px) { 
        margin-top: -150px;
        width: 65%;
        height: 200px;
      }

    }

    h2 {
        position: relative;
        bottom: 15px;
        font-size: 29.7px;

    @media (max-width: 1008px) { 
        bottom:  55px;
        left: -25px;
        font-size: 30px;
        font-weight: bold;
    }

    }

    input {
        border: solid 1px white;
        border-radius: 10px;
        width: 300px;
        height: 40px;
        margin-bottom: 20px;
        font-size: 16px;

    @media (max-width: 1008px) { 
        position: relative;
        left: -25px;
        bottom: 60px;
    }

    }

`;

export const MyButton = styled.button`
    width: 100%;
    padding: 10px;
    background-color: #600015;
    color: white;
    border: none;
    border-radius: 8px;
    font-weight: bold;
    font-size: 17px;
    cursor: pointer;
    transition: all 0.2s ease;
 
    &:hover {
        transform: scale(1.01);
        background-color: #900020;
    }

    @media (max-width: 1008px) { 
    position: relative;
    bottom: 60px;
    }

`