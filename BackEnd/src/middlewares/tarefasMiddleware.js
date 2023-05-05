const ValidateBody = (req, res, next)=> {
    const {body} = req;
    if(body.title ==   undefined) {
       return res.status(400).json({message:'O Campo título é obrigatório'});
    }
    if(body.title ==   '') {
        return res.status(400).json({message:'O Campo título não pode ser vazio'});
    }
    if(body.descricao ==   undefined) {
        return res.status(400).json({message:'O Campo descrição é obrigatório'});
    }
    if(body.descricao == '') {
        return res.status(400).json({message:'O Campo descrição não pode ser vazio'});
    }
    next();
};

const ValidateStatus = (req, res, next)=> {
    const {body} = req;
    if(body.status ==   undefined || body.status == '') {
       return res.status(400).json({message:'O Campo Status é obrigatório'});
    }
    next();
};

module.exports = {
    ValidateBody,
    ValidateStatus
}