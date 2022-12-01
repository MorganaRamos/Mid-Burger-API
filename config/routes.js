const express = require('express')
const routes = express.Router()

//banco de Dados fake para teste api 
let bancoFake =[
    {'1': { Produto: 'Mid Hamburguer', Valor:'30', Categoria:'Hambuguer'}},
    {'2': { Produto: 'Coca cola', Valor:'9', Categoria:'Bebidas'}},
    {'3': { Produto: 'Suco Laranja', Valor:'12', Categoria:'Bebidas'}},
    {'4': { Produto: 'Batata rústica', Valor:'18', Categoria:'Acompanhamento'}}
]


module.exports = routes
