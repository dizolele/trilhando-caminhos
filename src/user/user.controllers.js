const User = require('./user.models')

module.exports = {
    //Função responsável por exibir todos os usuários começando pelo último cadastrado
    async showAll(req, res){
        try{
            const userDb = await User.find().sort({dateRegister: 'desc'})
            res.status(200).json({userDb})
        }catch(error){
            res.status(500)
            .json({error:error.message})
        }
    },
    
    //Função responsável exibir um Usuário específico com base no id
    async showbyId (req, res){
        try{
            const userDb = await User.findById(req.params.id)
            res.status(200).json({userDb})
        }catch(error){
            res.status(500).json({error:error.message})
        }
    },


    //Função responsavel por atualizar se o parametro for put e criar se for post um Usuário
     post_Put(postPut){
        return async (req, res) =>{
            let userDb
            if(postPut === "post"){
                userDb = await new User()

            }else if(postPut === "put"){
                userDb =  await User.findById(req.params.id)
            }
                userDb.firstName = req.body.firstName
                userDb.lastName  = req.body.lastName
                userDb.email     = req.body.email
                userDb.login     = req.body.login
                userDb.password  = req.body.password
                userDb.adm       = req.body.adm

            try{
                await userDb.save()
                let msg = ''
                postPut === "post" ?  msg ="Adicionado" : msg = "Atualizado"
                res.status(200).json({message: `Usuário ${msg} com sucesso!`})

            }catch(error){
                res.status(500).json({error:error.message})
            }

        }
    },

   //Função responsável por deletar um usuário com base no id
    async delete(req, res){
        try{
            await User.findByIdAndDelete(req.params.id)
            res.status(200).json({message:"Usuário excluído com sucesso!"})
            
        }catch(error){
            res.status(500).json({error:error.message})
        }
    }

}