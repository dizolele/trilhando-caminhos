const User = require('./user.models')

module.exports = {
    //Função middleware responsável por verificar se usuário existe no banco
 
    async checkId(req, res, next){
        try{
            
            const idDb = await User.findById(req.params.id)
            if(!idDb){
                return res.status(404).json({error:"usuário não cadastrado!"})
            }
            next()
                
        }catch(error){
            res.status(403)
            .json({error:error.message})
        }

        
    },

     // Função middleware responsável por validar se o usuário adm existe
     async checkAdmId (req, res, next){
        try{
            const idAdmDb = await User.findById(req.params.idAdm)

            if(idAdmDb){
                next()
            } else{
                res.status(404).json({error: "Usuário Adm não está cadastrado!"})
               
            }

                
        }catch(error){
            res.status(403).json({error:error.message})
        }

        
    },
    
    // Função middleware responsável por validar se o usuário é adm
    async checkAdm (req, res, next){
        try{
            const idAdmDb = await User.findById(req.params.idAdm)

            if(idAdmDb.adm === true){
                next()
            } else{
                res.status(403).json({error: "Precisa ser Adm para executar essa ação!"})
            }

                
        }catch(error){
            res.status(403)
            .json({error:error.message})
        }

        
    }

   
}