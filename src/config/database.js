const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

// 23/06 w CRIA TABELA SE ELA NAO EXISTIR
async function initDatabase(retries = 5, delay = 2000) {
    const queryText = `
    CREATE TABLE IF NOT EXISTS posts (
      id SERIAL PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      content TEXT NOT NULL,
      author VARCHAR(255),
      "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;

    for (let i = 1; i <= retries; i++) {
        try {
            await pool.query(queryText);
            console.log('Tabela "posts" verificada/criada com sucesso!');
            return; 
        } catch (error) {
            if (error.code === 'ECONNREFUSED' && i < retries) {
                console.log(`⏳ Banco de dados inicializando. Tentativa ${i}/${retries} falhou. Aguardando ${delay / 1000}s...`);
                await new Promise(res => setTimeout(res, delay));
            } else {
                console.error(' Erro fatal ao criar a tabela "posts":');
                throw error;
            }
        }
    }
}

//EXECUTA A INICIALIZACAO
initDatabase();

module.exports = pool;