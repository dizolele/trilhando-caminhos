const Trilha = require('./trilhas.models')


module.exports = {

    //Função responsável por exibir todas as trilhas começando pela última criada
    async showAll(req, res){
        try{
            const trilhaDb = await Trilha.find().sort({dataPublicacao: 'desc'})
            res.status(200).json({trilhaDb})
        }catch(error){
            res.status(500)
            .json({error:error.message})
        }
    },
    
    //Função responsável exibir uma trilha específica com base o id
    async showbyId (req, res){
        try{
            const trilhaDb = await Trilha.findById(req.params.id)
            res.status(200).json({trilhaDb})
        }catch(error){
            res.status(500)
            .json({error:error.message})
        }
    },


    //Função responsavel por atualizar se o parametro for put e criar se for post uma trilha
     post_Put(postPut){
        return async (req, res) =>{
            let trilhaDb
            if(postPut === "post"){
                trilhaDb = await new Trilha()
            }else if(postPut === "put"){
                trilhaDb =  await Trilha.findById(req.params.id)
            }
            
           
                trilhaDb.nomeTrilha       = req.body.nomeTrilha
                trilhaDb.regiao           = req.body.regiao
                trilhaDb.pontoPartida     = req.body.pontoPartida
                trilhaDb.diasAventura     = req.body.diasAventura
                trilhaDb.km               = req.body.km
                trilhaDb.nivelDificuldade = req.body.nivelDificuldade
                trilhaDb.preco            = req.body.preco
                trilhaDb.comentarios      = req.body.comentarios
                trilhaDb.avaliacao        = req.body.avaliacao
            

            try{
                await trilhaDb.save()
                let msg = ''
                postPut === "post" ?  msg ="Adicionado" : msg = "Atualizado"
                res.status(200).json({message: `Trilha ${msg} com sucesso!`})

            }catch(error){
                res.status(500).json({error:error.message})
            }

        }
    },

    // Função responsável por comentar e avaliar as trilhas
    async avaliarComentar(req, res){
        try{
            const trilhaDb = await Trilha.findById(req.params.id)

            trilhaDb.comentarios.unshift(req.body.comentarios)
            trilhaDb.avaliacao.unshift(req.body.avaliacao)

            await trilhaDb.save()
            res.status(200).json({message: "Comentário adicionado com sucesso!"})
     
        }catch(error){
            res.status(500).json({error:error.message})
        }
    },

   //Função responsável por deletar uma trilha com base no id
    async delete(req, res){
        try{
            
            await Trilha.findByIdAndDelete(req.params.id)
            res.status(200).json({message:"Trilha excluída com sucesso!"})
        
        } catch(error){
            res.status(500).json({error:error.message})
        }
    }

}