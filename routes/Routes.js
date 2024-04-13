const express = require('express')
const AlunoController = require('../Controllers/AlunoController')
const router = express.Router()

router.get('/', function(req, res){
   res.json({})
})
//Alunos
router.get('/Alunos',(req, res) => AlunoController.getAll(req, res) )
router.post('/Alunos',(req, res) => AlunoController.create(req, res) )
router.get('/Alunos/aprovados',(req, res) => AlunoController.getAprovados(req, res) )
router.get('/Alunos/reprovados',(req, res) => AlunoController.getreprovados(req, res) )
router.get('/Alunos/recuperacao',(req, res) => AlunoController.getrecuperacao(req, res) )
router.put('/Alunos',(req, res) => AlunoController.update(req, res) )
router.delete('/Alunos',(req, res) => AlunoController.delete(req, res) )


router.get('/Alunos',(req, res) => AlunoController.getAll(req, res) )

module.exports = router