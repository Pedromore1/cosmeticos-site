# 💄 LUMINE COSMÉTICOS

Site completo para venda de cosméticos, feito com **React no front-end** e **Node.js com Express no back-end**. O sistema inclui painel administrativo, carrinho de compras funcional e upload de imagens. É um projeto ideal para evoluir de portfólio para produção real.

---

## 🚀 Funcionalidades

- 🛍️ Listagem de produtos com imagens, nome e preço
- 🧾 Carrinho com alteração de quantidade e valor total dinâmico
- 🔎 Página de detalhes do produto
- 🔐 Login de administrador
- 🧑‍💼 Painel administrativo com:
  - Cadastro de produto com imagem
  - Listagem e exclusão de produtos
- 📤 Upload de imagens com preview
- 🖥️ Interface responsiva para desktop e mobile

---

## 🧪 Tecnologias Utilizadas

### 🖥️ Front-end (React)
- React Router Dom
- Axios
- CSS Modules / Global CSS
- State Management com `useState` e `useEffect`
- Responsividade com media queries

### 🔙 Back-end (Node.js + Express)
- Express
- Multer (upload de imagens)
- Cors
- Body-Parser
- JSON como base de dados temporária (`products.json`)

---

## 📁 Estrutura do Projeto

cosmeticos-site/
├── backend/
│ ├── uploads/ # Imagens dos produtos
│ ├── routes/ # Rotas da API
│ ├── products.json # Armazena os produtos
│ ├── server.js # Servidor principal
│
├── frontend/
│ ├── public/
│ ├── src/
│ │ ├── assets/ # Imagens e logos
│ │ ├── components/ # Componentes reutilizáveis
│ │ ├── constants/ # Constantes globais
│ │ ├── pages/ # Páginas principais (Home, Admin, Login, etc)
│ │ ├── service/ # Comunicação com a API
│ │ ├── App.jsx # Rotas e estrutura principal
│ │ ├── global.js # Estilos globais
│ │ └── index.js # Entry point do React

👨‍💻 Autor
Pedro Henrique Soares Polidoro More