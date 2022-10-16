const boom = require('@hapi/boom');
const five =require('johnny-five');
const { models } = require('./../libs/conexionSequelize');


class sensorService {
    constructor (){
      this.circuito = circuito.on("ready", prende);
      this.configuracion = {pin:"A0"};
    }   



    async prende(){

      const led = await five.Led(13);
      return led.on();

      const configuracion ={pin:"A0"};
      

    }

    async create(data){
        return data;
    }
}


/*
pendiente terminar funcion prender en formato  async await
function prende()

{
  led = new five.Led(13);
  led.on();

  const configuracion = {pin:"A0"};
  sensor = new five.Sensor(configuracion);

}

*/

module.exports

