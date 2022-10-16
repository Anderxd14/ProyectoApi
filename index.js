const express = require('express');
const routerApi=require('./routes')
const app = express();
const port = 3000;
const {logErrors,errorHandler,boomErrorHandler,ormErrorHandler} = require('./middleware/errorHandler')
const {Initboard} =  require('./services/humedadService');

app.use(express.json());

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




