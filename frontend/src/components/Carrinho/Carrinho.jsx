import React, { useState } from 'react';
import {
    Container,
    Title,
    Content,
    Products,
    Summary,
    Item,
    ItemName,
    ButtonGroup,
    Total,
    PaymentLabel,
    Select,
    CheckoutButton
} from './carrinho';

export default function Carrinho({ itens, onAlterarQuantidade }) {
    const total = itens.reduce((acc, item) => acc + item.preco * item.quantidade, 0);
    const [pagamento, setPagamento] = useState('');

    // 🔥 Função que monta a mensagem do WhatsApp
    function gerarMensagemWhatsApp() {
        if (itens.length === 0) return '';

        let mensagem = '*🛍️ Pedido:*\n';
        let totalPedido = 0;

        itens.forEach(item => {
            mensagem += `- ${item.nome} x${item.quantidade}\n`;
            totalPedido += item.preco * item.quantidade;
        });

        mensagem += `\n*💰 Total:* R$ ${totalPedido.toFixed(2)}`;
        mensagem += `\n*💳 Pagamento:* ${pagamento}`;

        return mensagem;
    }

    const linkWhatsApp = pagamento
        ? `https://wa.me/5524992349807?text=${encodeURIComponent(gerarMensagemWhatsApp())}`
        : '#';

    return (
        <Container>
            <Title>Seu carrinho</Title>
            <Content>
                <Products>
                    {itens.length === 0 ? (
                        <p>Carrinho vazio</p>
                    ) : (
                        itens.map(item => (
                            <Item key={item.id}>
                                <ItemName>{item.nome} (x{item.quantidade})</ItemName>
                                <ButtonGroup>
                                    <button onClick={() => onAlterarQuantidade(item.id, 1)}>+</button>
                                    <button onClick={() => onAlterarQuantidade(item.id, -1)}>-</button>
                                </ButtonGroup>
                            </Item>
                        ))
                    )}
                </Products>

                {itens.length > 0 && (
                    <Summary>
                        <h3>Resumo da compra</h3>
                        <Total>Total: R$ {total.toFixed(2)}</Total>

                        <PaymentLabel htmlFor="pagamento">Escolha o método de pagamento:</PaymentLabel>
                        <Select
                            id="pagamento"
                            value={pagamento}
                            onChange={(e) => setPagamento(e.target.value)}
                        >
                            <option value="" disabled>Selecione...</option>
                            <option value="dinheiro">Dinheiro</option>
                            <option value="pix">Pix</option>
                            <option value="cartao_credito">Cartão de Crédito</option>
                            <option value="cartao_debito">Cartão de Débito</option>
                        </Select>

                        <CheckoutButton
                            href={linkWhatsApp}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => {
                                if (!pagamento) {
                                    e.preventDefault();
                                    alert("Selecione um método de pagamento.");
                                }
                            }}
                        >
                            Finalizar Pedido no WhatsApp
                        </CheckoutButton>
                    </Summary>
                )}
            </Content>
        </Container>
    );
}
