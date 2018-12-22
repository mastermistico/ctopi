const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

var Law  = require("../models/law");
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/laws');
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback){
  console.log("Connection Succeeded");
});


// Add nueva norma
app.post('/laws', (req, res) => {
  var db = req.db;
  const { 
	  	Nombre,   
	    Entidad,
	    Codigo,
	    Ciudad,
	    Usuario } = req.body
  var new_law = new Law({
    Nombre: Nombre,
    Entidad: Entidad,
    Codigo: Codigo,
    Ciudad: Ciudad,
    Usuario: Usuario
  })

  new_law.save(function (error) {
    if (error) {
      console.log(error)
    }
    res.send({
      success: true,
      message: 'Norma guardada!'
    })
  })
})

// listar normas
app.get('/laws', (req, res) => {
  Law.find({}, function (error, posts) {
    if (error) { console.error(error); }
    res.send({
      laws: posts
    })
  }).sort({_id:-1})
})

//por id
app.get('/laws/:id', (req, res) => {
  var db = req.db;
  Law.findById(req.params.id, function (error, post) {
    if (error) { console.error(error); }
    res.send(post)
  })
})

// Update normas
app.put('/laws/:id', (req, res) => {
  var db = req.db;
  Law.findById(req.params.id, function (error, post) {
    if (error) { console.error(error); }

    post.Nombre = req.body.Nombre
    post.Entidad = req.body.Entidad
    post.Ciudad = req.body.Ciudad
    post.Usuario = req.body.Usuario
    post.Codigo = req.body.Codigo
    post.save(function (error) {
      if (error) {
        console.log(error)
      }
      res.send({
        success: true
      })
    })
  })
})


// Delete normas
app.delete('/laws/:id', (req, res) => {
  var db = req.db;
  Law.remove({
    _id: req.params.id
  }, function(err, post){
    if (err)
      res.send(err)
    res.send({
      success: true
    })
  })
})


app.listen(process.env.PORT || 8081)
