
const revisao = require("../Models/revisao")

const revisaoController = {
    getAll: async(req, res) => {
       res.json(await revisao.find())
    },
    get: async(req, res) => {
        try {
            res.json(await revisao.findById(req.params.id))
        } catch (error) {
            res.status(404).json({error: 'Registro não encontrado'})
        }
    },
    create: async(req, res) => {
        try {
            res.json(await revisao.create(req.body))
        } catch (error) {
            res.status(400).json(error)
        }
    },
    update: async(req, res) => {
        try {
            res.json(await revisao.findByIdAndUpdate(req.params.id, req.body))
        } catch (error) {
            res.status(404).json({error: 'Registro não encontrado'})
        }
    },
    delete: async(req, res) => {
        try {
            res.json(await revisao.findByIdAndDelete(req.params.id))
        } catch (error) {
            res.status(404).json({error: 'Registro não encontrado'})
        }
    },
}

module.exports = revisaoController