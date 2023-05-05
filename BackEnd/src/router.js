const express = require('express');
const tarefasController = require('./controllers/tarefasController'); 

const tarefasMiddlewares = require('./middlewares/tarefasMiddleware')
const router = express.Router();

router.get('/tarefas', tarefasController.getAll);
router.post('/tarefas', tarefasMiddlewares.ValidateBody, tarefasController.createTarefa);
router.delete('/tarefas/:id', tarefasController.deleteTarefa);
router.put('/tarefas/:id',tarefasMiddlewares.ValidateBody,tarefasMiddlewares.ValidateStatus, tarefasController.updateTarefa);

module.exports = router;