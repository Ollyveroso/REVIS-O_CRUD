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

  connection.query(
    'SELECT name, address FROM customers LIMIT 10',
    (err, results) => {
      if (err) {
        console.error('Erro ao ler registros:', err);
      } else {
        console.log('Registros lidos:');
        results.forEach((row, index) => {
          console.log(`#${index + 1}: Nome: ${row.name}, Endereço: ${row.address}`);
        });
      }

      connection.end();
    }
  );
});
