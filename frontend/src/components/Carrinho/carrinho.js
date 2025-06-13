import styled from "styled-components";

export const Container = styled.div`
  
  min-height: 100vh;
  padding: 2rem;
  font-family: 'Segoe UI', sans-serif;

  @media (max-width: 1008px) {
    padding-bottom: 250px; 
  }
`;

export const Title = styled.h2`
  text-align: center;
  color: #111;
  margin-bottom: 2rem;
`;

export const Content = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
`;

export const Products = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  width: 400px;
`;

export const Summary = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  width: 300px;

      @media (max-width: 1008px) { 
        position: fixed;
        bottom: 0;
        width: 90%;
        border-radius: 12px 12px 0 0;
        z-index: 100;
    }

`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

export const ItemName = styled.span`
  flex: 1;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;

  button {
    background-color: #ccc;
    border: none;
    padding: 0.3rem 0.7rem;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #bbb;
    }
  }
`;

export const Total = styled.p`
  margin-top: 1rem;
  font-weight: bold;
`;

export const PaymentLabel = styled.label`
  display: block;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

export const Select = styled.select`
  width: 100%;
  padding: 0.5rem;
  border-radius: 6px;
  border: 1px solid #ccc;
`;

export const CheckoutButton = styled.a`
  display: inline-block;
  margin-top: 1.5rem;
  background-color: #531920;
  color: white;
  padding: 0.8rem;
  text-align: center;
  width: 100%;
  border-radius: 6px;
  text-decoration: none;
  font-weight: bold;
  transition: 0.3s;

  &:hover {
    background-color: #8b2936;
  }

  @media (max-width: 1008px) {
    width: 93%;
  }
`;