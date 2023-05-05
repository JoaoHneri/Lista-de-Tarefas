const connection = require('./connection')

const getAll = async ()=>{
    const [tarefas] = await connection.execute('SELECT * FROM tarefas');
    return tarefas;
};

const createTarefa = async (task)=>{
    const {title, descricao} = task;
    const dateUTC = new Date(Date.now()).toUTCString();
    const query = 'INSERT INTO tarefas (title, status, descricao, data_de_criacao) VALUES (?, ?, ?, ?)'
    const [createdTarefa] = await connection.execute(query, [title, 'pendente', descricao, dateUTC]);
    return {insertId: createdTarefa.insertId};
};

const deleteTarefa = async (id)=>{
    const removedTarefa = await connection.execute('DELETE FROM tarefas WHERE id = ?', [id])
    return removedTarefa;
};

const updateTarefa = async (id, task)=>{
    const {title, status, descricao} = task;
    const query = 'UPDATE tarefas SET title = ?, status = ?, descricao = ? WHERE id = ?'
    const removedTarefa = await connection.execute(query, [title, status, descricao, id])
    return removedTarefa;
};

const getIdTarefa = async (id)=>{
    const [tarefas] = await connection.execute('SELECT * FROM tarefas WHERE id = ?', [id]);
    return tarefas;
};

module.exports =  {
    getAll,
    createTarefa,
    deleteTarefa,
    updateTarefa,
    getIdTarefa
};