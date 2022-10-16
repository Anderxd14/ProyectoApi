const bomm = require('@hapi/boom');
const {models}  = require('./../libs/conexionSequelize');


class humedadService {
  constructor()
  {

  }

  async repeConsulHumeda(){

    const humedadSuelo = sensor.value;
    const porcentaje = Math.round((humedadSuelo/1023)*100);
    const pocentajeFin =  100-porcentaje
    const NewRport =await models.Sensor.create(pocentajeFin)
    setTimeout(repeConsulHumeda, 5000);
  }
}



//fin configuracion sensor. 



module.exports = {humedadService}


