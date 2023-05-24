const express = require('express');
const routerApi=require('./routes')
const {checkApi} = require('./middleware/authHandler');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;
const {logErrors,errorHandler,boomErrorHandler,ormErrorHandler} = require('./middleware/errorHandler')



app.use(express.json());


const whitelist = ['http://localhost:3000', 'https://myapp.co','http://10.0.2.2:3000','https://proyectoapi-production-1b8e.up.railway.app/'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'));
    }
  }
}
app.use(cors(options));
require('./utils/auth')

app.get('/',(req,res)=>{

    res.send('Hola mi server en express');
});

app.get('/nuevaruta',checkApi,(req,res)=>{

  res.send('soy una ruta nueva');
});


routerApi(app);
app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);



app.listen(port, (req,res)=>{
    console.log('mi port '+  port);
})




