const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const router = express.Router();
const filePath = path.join(__dirname, '../products.json');


const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage });

function getBaseUrl(req) {
  return `${req.protocol}://${req.get('host')}`;
}


router.post('/', upload.single('imagem'), (req, res) => {
  try {
    const produtos = fs.existsSync(filePath)
      ? JSON.parse(fs.readFileSync(filePath, 'utf8'))
      : [];

    const id = produtos.length ? Math.max(...produtos.map(p => p.id || 0)) + 1 : 1;

    const baseUrl = getBaseUrl(req);

    const novoProduto = {
      id,
      nome: req.body.nome,
      descricao: req.body.descricao || '',
      preco: parseFloat(req.body.preco) || 0,
      categoria: req.body.categoria || '',
      imagem: req.file ? `${req.file.filename}` : ''
    };

    produtos.push(novoProduto);
    fs.writeFileSync(filePath, JSON.stringify(produtos, null, 2));

    res.status(201).json(novoProduto);
  } catch (error) {
    console.error('Erro ao cadastrar produto:', error);
    res.status(500).json({ error: 'Erro ao cadastrar produto.' });
  }
});


router.get('/', (req, res) => {
  try {
    const produtos = fs.existsSync(filePath)
      ? JSON.parse(fs.readFileSync(filePath, 'utf8'))
      : [];
    res.json(produtos);
  } catch (error) {
    console.error('Erro ao listar produtos:', error);
    res.status(500).json({ error: 'Erro ao listar produtos.' });
  }
});


router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);

  try {
    const produtos = fs.existsSync(filePath)
      ? JSON.parse(fs.readFileSync(filePath, 'utf8'))
      : [];

    const index = produtos.findIndex(p => p.id === id);
    if (index === -1) {
      return res.status(404).json({ error: 'Produto não encontrado.' });
    }

    produtos.splice(index, 1);
    fs.writeFileSync(filePath, JSON.stringify(produtos, null, 2));

    res.status(200).json({ message: 'Produto excluído com sucesso.' });
  } catch (error) {
    console.error('Erro ao excluir produto:', error);
    res.status(500).json({ error: 'Erro ao excluir produto.' });
  }
});

module.exports = router;
