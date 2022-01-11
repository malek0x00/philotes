const express = require('express')
const bd = require('./config/database')
const cors = require('cors')
const bodyParser = require('body-parser')
const swaggerui = require('swagger-ui-express')
swaggerDocument = require('./swagger.json')
const userRouter = require('./routers/userRouter')


var app = express()
app.use(cors())
app.set('secretkey',"backend")
//  analyse de l'application / x-www-form-urlencoded

app.use(bodyParser.urlencoded({ extended: false }))
//  analyse de l'application / )json
app.use(bodyParser.json())

app.use('/api-docs', swaggerui.serve, swaggerui.setup(swaggerDocument));
app.use('/client',userRouter)




app.get("/", function (req, res) {
    res.send('test')

})

//handle 404 error
app.use(function(req,res,next){
    let err = new Error('path not found');
    err.status=404;
    next(err);
}
);
//handle errors
app.use(function(err,req,res,next){
    console.log(err);
    if(err.status===404)
    res.status(404).json({message:"path not found"});
      else
    res.status(500).json({message:"something looks wrong"});
}
);
app.listen(3001, function () {
    console.log('running with 3001')
})