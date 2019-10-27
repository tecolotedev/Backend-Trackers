require('./config');

const express = require('express');
const app = express();
const axios = require('axios');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
     
const Tarjeta = require('./Models/SchemaTarjeta');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.post('/almacenar',(req,res)=>{
    const {macAdress,nombreDispositivo,longitud,latitud,pais,ciudad,fecha} = req.body
    console.log(req.body)
    let tarjeta = new Tarjeta({
      macAdress,nombreDispositivo,longitud,latitud,pais,ciudad,fecha
    });
    tarjeta.save((err,tarjetaDB)=>{
      if(err)return res.json({ok:false,err});
      res.json({ok:true})
    });
});


mongoose.connect(process.env.URLDB, (err, res) => {
  if (err) throw err;
  console.log('Base de Datos Online');
});
app.listen(process.env.PORT, () => {
  console.log("escuchando el puerto: ", process.env.PORT);
})