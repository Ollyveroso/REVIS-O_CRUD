"Inserir 20 registros na tabela customers com os campos name e address":

const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'seu_usuario',
  password: 'sua_senha',
  database: 'sua_base_de_dados',
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }

  console.log('Conexão ao banco de dados estabelecida com sucesso!');

  for (let i = 1; i <= 20; i++) {
    const name = `Cliente ${i}`;
    const address = `Endereço ${i}`;

    connection.query(
      'INSERT INTO customers (name, address) VALUES (?, ?)',
      [name, address],
      (err, results) => {
        if (err) {
          console.error('Erro ao inserir registro:', err);
        } else {
          console.log(`Registro ${results.insertId} inserido com sucesso.`);
        }
      }
    );
  }

  connection.end();
});
