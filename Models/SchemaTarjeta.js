const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let schemaTarjeta = new Schema({
    macAdress:{
        type:String,
        required:[true,'La direccion mac es necesaria']
    },
    nombreDispositivo:{
        type:String
    },
    longitud:{
        type:Number
    },
    latitud:{
        type:Number
    },
    pais:{
        type:String
    },
    ciudad:{
        type:String
    },
    fecha:{
        type:Date
    }
});
module.exports = mongoose.model('Tarjeta',schemaTarjeta  );
