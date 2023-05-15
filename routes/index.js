const express = require('express')
const router = express.Router()

//Arreglo de productos
let produtcs = [];

const title='Web site EJS'
router.get('/home',(req, res)=>{
    res.render('index', {title})
})

//Obtener listado de productos agregados
router.get('/produtcs',(req, res)=>{
    res.json(produtcs)
})

//Agregar productos
router.post('/produtcs',(req, res)=>{
    const newProducts={...req.body, id: produtcs.length + 1}
    produtcs.push(newProducts)
    res.send(newProducts)
})

//Actualizar un producto
router.put('/produtcs/:id',(req, res)=>{
    const newData = req.body
    const productFound =produtcs.find(
        (product)=> product.id == parseInt(req.params.id)
    );

   produtcs = produtcs.map(p=> p.id === parseInt(req.params.id) ? {...p, ...newData} : p)

    res.json({
        message: "Product update"
    })
}) 

//Eliminar un producto
 router.delete('/produtcs/:id',(req, res)=>{
     const productFound =produtcs.find(
         (product)=> product.id == parseInt(req.params.id)
     );
         produtcs = produtcs.filter(p => p.id !== parseInt(req.params.id))
         
     res.json(productFound)
 }) 

 //Obtener un producto por su id
router.get('/produtcs/:id',(req, res)=>{
    const productFound =produtcs.find(
        (product)=> product.id == parseInt(req.params.id)
    );
    
    res.json(productFound)
}) 


module.exports= router