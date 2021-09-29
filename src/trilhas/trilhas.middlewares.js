const Trilha = require('./trilhas.models')

module.exports = {
    //Função middleware responsável por verificar se uma trilha existe no banco
    async checkId (req, res, next){
        try{
            const idDb = await Trilha.findById(req.params.id)
            if(!idDb){
                return res.status(404).json({error:"Trilha não cadastrada!"})
            }
            next()
                
        }catch(error){
            res.status(403).json({error: error.message})

        }

        
    }
}