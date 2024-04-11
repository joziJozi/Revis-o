const express = require('express')
const revisaoController = require('../Controllers/revisaoController')
const revisao = require('../Models/revisao')
const router = express.Router()

router.get('/', function(req, res){
   res.json({})
})
//revisao
router.get('/revisao',(req, res) => revisaoController.getAll(req, res) )
router.post('/revisao',(req, res) => revisaoController.create(req, res) )
router.get('/revisao:id',(req, res) => revisaoController.get(req, res) )
router.put('/revisao:id',(req, res) => revisaoController.update(req, res) )
router.delete('/revisao:id',(req, res) => revisaoController.delete(req, res) )
 

router.get('/revisao',(req, res) => RevisaoController.getAll(req, res) )

module.exports = router