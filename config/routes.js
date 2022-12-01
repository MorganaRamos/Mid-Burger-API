const express = require('express')
const routes = express.Router()

//banco de Dados fake para teste api 
let bancoFake =[
    {'1': { Produto: 'Mid Hamburguer', Valor:'30', Categoria:'Hambuguer'}},
    {'2': { Produto: 'Coca cola', Valor:'9', Categoria:'Bebidas'}},
    {'3': { Produto: 'Suco Laranja', Valor:'12', Categoria:'Bebidas'}},
    {'4': { Produto: 'Batata rústica', Valor:'18', Categoria:'Acompanhamento'}}
]

//buscando dados
routes.get('/',(req,res) => {
    return res.json(bancoFake)
})

//inserindo dados
routes.post('/add',(req,res) => {
    const body = req.body

    if(!body)
        return res.status(400).end()

    bancoFake.push(body)   
    return res.json(body)
})


module.exports = routes
