const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/**
 * Rota / Recurso
 */
/**
 * Metodos HTTP:
 * 
 * GET: Buscar/Listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informaçõa no back-end
 */

/**
 * Tipos de parametros:
 * 
 * Query Params: Parametros nomeados enviados na rota após o "?" (Filtros, paginação)
 * Route Params: Parametros utilicados para identificar recursos
 * Request Body: Corpo da requisição, ultilizado para criar ou alterar recursos
 */

/**
 * SQL
 * Driver: SELECT * FROM users
 * QUery Builder: table('users').select('*').where()
 */

