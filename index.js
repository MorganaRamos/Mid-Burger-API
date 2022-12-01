const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const routes = require('./config/routes.js')

// iniciando servidor
const app = express()

//configurando servidor
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())
app.use(routes)

//conectando servidor
app.listen(21262, () =>{
    console.log('Express iniciando em http://localhost:21262')
})