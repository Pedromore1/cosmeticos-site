import styled from 'styled-components'

export const SearchMobile = styled.div`
    z-index: 1;

      @media (min-width: 1008px) { 
        display: none;
      }

      @media (max-width: 1008px) { 
        position: relative;


        left: 27px;
        border: solid 1px black;
        border-radius: 10px;
        width: 85%;
        height: 65px;
      }
`
export const DivLogo = styled.div`
    background-color:#52131b;
    height: 200px;

      @media (max-width: 1008px) { 
        display: none;
      }

    .logo{
        position: relative;
        width: 230px;
        bottom: 15px;
        left: 50px;
        
        @media (max-width: 1008px) { 
            display: none;     
    }

        @media (min-width: 1009px) {
          margin-top: 8px;
            width: 14%;
    }

        @media (max-width: 1115px) {
          margin-top: 20px;
          width: 12%;
    }
    }
`

export const LogoNome = styled.div`
        display: none;
        

        @media (max-width: 1008px) { 
           display: flex;
          
    }

        h1 {
        display: none;
        

        @media (max-width: 1008px) { 
           display: flex;
           position: absolute;
           top: 25px;
           left: 17%;
           background-color: transparent;
           color: white;
           font-size: 27px;     
    }
    }

`

export const MyDiv = styled.div`
    background-color:#52131b;
    margin-top: -50px;
    height: 50px;

      @media (max-width: 1008px) {
        display: none;
      }
`

export const MyH3 = styled.h3`
    display: flex;
    justify-content: center;
    font-size: 25px;
`
export const NenhumProduto = styled.p`
    display: flex;
    justify-content: center;
    margin-top: 160px;
    font-size: 25px;
    font-weight: bold;
`

export const ScrollContainer = styled.div`
  @media (max-width: 1008px) {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    gap: 20px;
    padding: 10px 10px;
  }
`;

export const MyUl = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    justify-content: center;
    list-style: none;

    li {
        width: 85vw;
        max-width: 190px;
        min-width: 160px;
        height: 400px;
        background-color: #fff;
        padding: 13px;
        border: 1px solid #ccc;
        border-radius: 8px;
        text-align: center;
        transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.03);
  }

        @media (max-width: 1008px) {
          border: none;
          height: 400px;
  }
    }

    img {
        object-fit: cover;
        border-radius: 10px;
    }

    h3 {
        font-size: 17px;
    }

    p {
        font-size: 15px;
        color: #555;
        margin: 5px 0;
    }

    strong{
        font-size: 18px;
        color: black;
    }
    
     @media (max-width: 1008px) {
      flex-wrap: nowrap;
      overflow-x: auto;
      overflow-y: hidden;
      justify-content: flex-start;
      scroll-snap-type: x mandatory;
      -webkit-overflow-scrolling: touch;

    li {
      scroll-snap-align: start;
    }
  }
`

export const MyButton = styled.button`
    width: 153px;
    padding: 8px 12px;
    background-color: #8B0000;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.03);
  }
`
