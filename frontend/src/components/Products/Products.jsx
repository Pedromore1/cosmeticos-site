import React from 'react';

function ProductsCard({ produto, onAdicionar }) {
     const imagemUrl = produto.imagem.startsWith('http')
    ? produto.imagem
    : `https://cosmeticos-api.onrender.com/uploads/${produto.imagem}`;


    return (
        <div>
           <img src={imagemUrl} alt={produto.nome} />
            <h3> {produto.nome} </h3>
            <p> {produto.descrição} </p>
            <strong> R$ {Number(produto.preco).toFixed(2)} </strong>
            <button onClick={() => onAdicionar(produto)}> Adicionar ao carrinho </button>
        </div>
    );
}

export default ProductsCard;