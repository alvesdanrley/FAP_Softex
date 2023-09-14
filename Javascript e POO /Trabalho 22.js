const mysql = require('mysql');

// Configuração da conexão com o banco de dados
const conexao = mysql.createConnection({
  host: 'localhost',
  user: 'seu_usuario',
  password: 'sua_senha',
  database: 'seu_banco_de_dados'
});

// Tentativa de conexão com o banco de dados
conexao.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conexão bem-sucedida ao banco de dados');
});

// Feche a conexão quando terminar de usar o banco de dados
conexao.end((err) => {
  if (err) {
    console.error('Erro ao fechar a conexão com o banco de dados:', err);
    return;
  }
  console.log('Conexão com o banco de dados fechada');
});
