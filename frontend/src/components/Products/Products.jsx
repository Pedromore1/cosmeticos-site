import React from 'react';

function ProductsCard({ produto, onAdicionar }) {

    return (
        <div>
            <img src={`http://localhost:5000${produto.imagem}`} alt={produto.nome} />
            <h3> {produto.nome} </h3>
            <p> {produto.descrição} </p>
            <strong> R$ {Number(produto.preco).toFixed(2)} </strong>
            <button onClick={() => onAdicionar(produto)}> Adicionar ao carrinho </button>
        </div>
    );
}

export default ProductsCard;