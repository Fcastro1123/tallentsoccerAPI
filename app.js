require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

const db = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const playerRoutes = require('./routes/playerRoutes');
const evaluationRoutes = require('./routes/evaluationRoutes');

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/players', playerRoutes);
app.use('/api/evaluations', evaluationRoutes);

const PORT = process.env.PORT || 3000;

// Conecta ao banco e inicia o servidor
db.sync()
  .then(() => {
    console.log('📦 Conectado ao banco com sucesso!');
    app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ Erro ao conectar no banco:', err);
  });
