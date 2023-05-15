const express = require('express');
const morgan = require('morgan');
const routesFile = require('./routes/index.js')
const app = express();
const path=require('path')
require('ejs')

//Configuraciones
app.set('appName', 'Express Course')
app.set('port', 3000)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//middleware
app.use(express.json())
app.use(morgan('dev'))

//routes 
app.use(routesFile)

//Correr el servidor 
app.listen(app.get('port'))
console.log(`Server ${app.get('appName')} on port ${app.get('port')}`)