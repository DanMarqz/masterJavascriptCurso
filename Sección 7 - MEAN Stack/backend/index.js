'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 6600;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/portafolio')
          .then(() => {
            console.log('Te has conectado a la base de datos correctamente...');

            //Creación del servidor
            app.listen(port, () => {
              console.log('Servidor corriendo correctametne en: localhost:6600');
            });
            
          })
          .catch(err => console.log(err));