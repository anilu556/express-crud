//definir rutas

//configurar rutas
const { Router } = require('express')
const app = Router()
const Companies = require('../controllers/companies/companies')

app.get('/companies', Companies.index)
app.get('/companies/:id', Companies.find)
app.post('/companies', Companies.create);
//app.put('/companies/:id', Companies.update)
// app.delete

//post. si existe res ---> company. Si no existe que lo grabe en el archivo
//put. update si existe, id y nombre. res ---> objeto modificado
//delete. encuentre y elimine. res ----> get companies sin el elemento

//Postman revisar con GET  si borramos, actualizamos o publicamos

module.exports = app;
