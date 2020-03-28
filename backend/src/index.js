const express = require('express');
const cors = require('cors')
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
/*
    Métodos HTTP
    GET: Lista uma informação do back-end
    POST: Cria uma informação no back-end
    PUT: Altera uma informação no back-end
    DELETE: Deleta uma informação no back-end

*/
/*
    Tipos de parâmetros:

    Query params: Parâmetros nomeados enviados na rota após "?" (Filtros, Paginação)
    Route params: Parâmetros utilizados para identificar recursos
    Request body: Corpo da requisição, utilizado para criar ou alterar recursos
*/

/**
 *  Tipos de query:
 * 
 *  Driver: SELECT * FROM users
 *  Query builder: table('users').select('*').where() 
*/

app.listen(3333);