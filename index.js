const express = require('express');
const routerApi=require('./routes')
const app = express();
const port = process.env.PORT || 3000;
const {logErrors,errorHandler,boomErrorHandler,ormErrorHandler} = require('./middleware/errorHandler')



app.use(express.json());


const whitelist = ['http://localhost:8080', 'https://myapp.co'];
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

app.get('/',(req,res)=>{

    res.send('Hola mi server en express');
});


routerApi(app);
app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);



app.listen(port, (req,res)=>{
    console.log('mi port '+  port);
})




