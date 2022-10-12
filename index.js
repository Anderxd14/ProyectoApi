const express = require('express');
const routerApi=require('./routes')
const app = express();
const port = 3000;
const {logErrors,errorHandler,boomErrorHandler} = require('./middleware/errorHandler')

app.use(express.json());

app.get('/',(req,res)=>{

    res.send('Hola mi server en express');
});


routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);


app.listen(port, (req,res)=>{
    console.log('mi port '+  port);
})



/*
app.get('/Usuarios',(req,res) =>{
    const {limit,offset} = req.query;
    if(limit && offset){
        res.json({
            limit,
            offset

        });
    }else {
        res.send('No hay valores');
    }
});


app.get('/ReporteHumedad', (req,res)=>{
    res.send('Ruta ReporteHumedad');

});

app.get('/Sensores',(req,res)=>{
    res.send('ruta Sensores');
});
*/



