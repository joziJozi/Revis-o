const Aluno = require("../models/Aluno")

const AlunoController = {
    getAll: async(req, res) => {
       res.json(await Aluno.find())
    },

    getAprovados: async(req, res) => {
       res.json(await Aluno.find({media:{$gte:7}}))
    },

    getreprovados: async(req, res) => {
       res.json(await Aluno.find({media:{$lt:5}}))
    },

    getrecuperacao: async(req, res) => {
       res.json(await Aluno.find({media:{$gte: 5, $lt:7}}))
    },

    get: async(req, res) => {
        try {
            res.json(await Aluno.findById(req.params.id))
        } catch (error) {
            res.status(404).json({error: 'Registro não encontrado'})
        }
    },
    create: async(req, res) => {
        try {
            let soma = 0 
            const notas = req.body.notas
            const alunos = req.body
            for(let n of req.body.notas){
                soma += n
            }

            const media = soma / notas.length 

            alunos.media = media

            res.json(await Aluno.create(alunos))
        } catch (error) {
            res.status(400).json(error)
        }
    },
    update: async(req, res) => {
        try {
            res.json(await Aluno.updateMany({turma: "E"}, {$set:{turma: "B"}}))
        } catch (error) {
            res.status(404).json({error: 'Registro não encontrado'})
        }
    },
    delete: async(req, res) => {
        try {
            res.json(await Aluno.deleteMany({nome: "Teste"}))
        } catch (error) {
            res.status(404).json({error: 'Registro não encontrado'})
        }
    },
}

module.exports = AlunoController