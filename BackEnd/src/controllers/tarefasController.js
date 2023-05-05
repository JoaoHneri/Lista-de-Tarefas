const tarefasModel = require('../models/tarefasModel');
const { param } = require('../router');
const getAll = async (req, res)=>{
    const task = await tarefasModel.getAll();
    return res.status(200).json(task)
};

const createTarefa = async (req, res)=>{
    const task = await tarefasModel.createTarefa(req.body);
    return res.status(201).json(task)
};

const deleteTarefa = async (req, res)=>{
    const {id} = req.params;
    await tarefasModel.deleteTarefa(id);
    res.status(204).json({message: 'Tarefa deletada com sucesso'})
};

const updateTarefa = async (req, res)=>{
    const {id} = req.params;
    const task = await tarefasModel.updateTarefa(id, req.body);
    return res.status(204).json(task)
};




module.exports = {
    getAll,
    createTarefa,
    deleteTarefa,
    updateTarefa
};