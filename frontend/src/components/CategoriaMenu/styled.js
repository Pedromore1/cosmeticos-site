import styled from 'styled-components'

export const CategoriaLink = styled.button`
  cursor: pointer;
  position: relative;
  padding: 0 16px;

  span {
    position: relative;
    display: inline-block;
  }

  span::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: white;
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.3s ease;
  }

  &:hover span::after,
  &.ativo span::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;




export const Mydiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-top: -50px;
    margin-right: 190px;
    


    button { 
    padding: 0 16px;
    background-color: transparent;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 20px;
    transition: all 0.3s ease;
}


`
