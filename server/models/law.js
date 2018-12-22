const mongoose = require('mongoose');

const LawSchema = new mongoose.Schema({ 
  Nombre: {
    type: String,
    default: ''
  },
  Fecha: {
    type: Date,
    default: Date(+new Date() + 7*24*60*60*1000)
  },
  Entidad: {
    type: String,
    default: ''
  },
  Codigo: {
  	type: Number,
  	default: 0
  },
  Ciudad: {
  	type: String,
  	default: ''
  },
  Usuario:{
  	type: String,
  	default: ''
  }
});

const Law = mongoose.model('Law', LawSchema);

module.exports = Law;