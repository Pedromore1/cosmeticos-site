import React, { useState, useEffect } from 'react';
import api from '../../service/api';
import { useNavigate, Link } from 'react-router-dom';
import { MyForm, MyLink, ProdutosContainer, ProdutoCard } from './admin';
import { categoriasFixas } from '../../constants/categorias';

export default function Admin() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nome: '',
    descricao: '',
    preco: '',
    categoria: '',
  });

  const [imagemArquivo, setImagemArquivo] = useState(null);
  const [mensagem, setMensagem] = useState('');
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('admin-token');
    if (token !== 'admin-token-123') {
      navigate('/login');
    }
  }, [navigate]);

  const carregarProdutos = async () => {
    try {
      const response = await api.get('/produtos');
      setProdutos(response.data);
    } catch (error) {
      console.error('Erro ao carregar produtos:', error);
    }
  };

  useEffect(() => {
    carregarProdutos();
  }, []);

  useEffect(() => {
    if (mensagem) {
      const timer = setTimeout(() => setMensagem(''), 5000);
      return () => clearTimeout(timer);
    }
  }, [mensagem]);

  const handleSubmit = async e => {
    e.preventDefault();

    const { nome, descricao, preco, categoria } = form;

    if (!nome || !descricao || !preco || !categoria || !imagemArquivo) {
      setMensagem('Preencha todos os campos.');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('nome', nome);
      formData.append('descricao', descricao);
      formData.append('preco', parseFloat(preco));
      formData.append('categoria', categoria);
      formData.append('imagem', imagemArquivo);

      await api.post('/produtos', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      setMensagem('✅ Produto cadastrado com sucesso!');
      setForm({ nome: '', descricao: '', preco: '', categoria: '' });
      setImagemArquivo(null);
      carregarProdutos();
    } catch (error) {
      console.error(error);
      setMensagem('❌ Erro ao cadastrar produto.');
    }
  };

  const handleExcluir = async (id, nome) => {
    const confirmar = window.confirm(`Deseja excluir o produto "${nome}"?`);
    if (!confirmar) return;

    try {
      await api.delete(`/produtos/${id}`);
      setProdutos(prev => prev.filter(p => p.id !== id));
      setMensagem(`✅ Produto "${nome}" excluído com sucesso!`);
    } catch (error) {
      console.error('Erro ao excluir produto:', error);
      setMensagem('❌ Erro ao excluir o produto.');
    }
  };

  return (
    <div>
      <button>
        <MyLink to="/">🠔 Voltar para área dos produtos</MyLink>
      </button>

      <h2>Cadastro de Produto (Admin)</h2>

      <MyForm onSubmit={handleSubmit} encType="multipart/form-data">
        <input
          name="nome"
          placeholder="Nome"
          value={form.nome}
          onChange={e => setForm({ ...form, nome: e.target.value })}
        /><br />

        <textarea
          name="descricao"
          placeholder="Descrição"
          value={form.descricao}
          onChange={e => setForm({ ...form, descricao: e.target.value })}
        /><br />

        <input
          name="preco"
          type="number"
          step="0.01"
          placeholder="Preço"
          value={form.preco}
          onChange={e => setForm({ ...form, preco: e.target.value })}
        /><br />

        <select
          name="categoria"
          value={form.categoria}
          onChange={e => setForm({ ...form, categoria: e.target.value })}
        >
          <option value="">Selecione uma categoria</option>
          {categoriasFixas.map(cat => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select><br />

        <input
          type="file"
          accept="image/*"
          onChange={e => setImagemArquivo(e.target.files[0])}
        /><br />

        <button type="submit">Cadastrar</button>
      </MyForm>

      {mensagem && <p>{mensagem}</p>}

      <hr />

      <h3 style={{ textAlign: 'center', marginTop: '50px', fontSize: '24px' }}>
        Produtos cadastrados
      </h3>

      <ProdutosContainer>
        {produtos.length === 0 ? (
          <p>Nenhum produto cadastrado.</p>
        ) : (
          produtos.map(produto => {
            const imagemUrl = produto.imagem.startsWith('http')
              ? produto.imagem
              : `https://cosmeticos-api.onrender.com/uploads/${produto.imagem}`;

            return (
              <ProdutoCard key={produto.id}>
                <strong>{produto.nome}</strong><br />
                {produto.imagem && (
                  <img src={imagemUrl} alt={produto.nome} width="100" />
                )}<br />
                <span><strong>Categoria:</strong> {produto.categoria}</span><br />
                <span><strong>Preço:</strong> R$ {Number(produto.preco).toFixed(2)}</span><br />
                <button onClick={() => handleExcluir(produto.id, produto.nome)}>
                  Excluir
                </button>
              </ProdutoCard>
            );
          })
        )}
      </ProdutosContainer>
    </div>
  );
}
