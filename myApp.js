let express = require('express');
let app = express();
console.log("Hello World")
require('dotenv').config()

/* app.get('/', (req, res)=>{
        res.send("Hello Express");
}) */

//middleware1....serving static resources
app.use("/public",express.static(__dirname + '/public'));

//middleware2
app.use((req, res, next) => {
    console.log(req.method + " " + req.path + " - " + req.ip);
    next();
})

//endpoint 1
/* app.get('/', (req, res)=>{
    res.sendFile(__dirname+'/views/index.html');
}); */

//endpoint 2
/* app.get('/json', (req, res)=>{
    //res.json({"message": "Hello json"})
     if(process.env.MESSAGE_STYLE === 'uppercase'){
        res.json({"message": "HELLO JSON"})
    }
    else{
        res.json({"message": "Hello json"})
    } 
/*         if (process.env.MESSAGE_STYLE==='uppercase') {
            response = "Hello world".toUpperCase();
        }
        else {
            response = "Hello world";
        }
        res.json({
            "message": response
        }); 
}); */

//endpoint 3...with middleware
/* app.get('/now',(req,res,next) => {
    //middleware
    // adding a new property to req object
    // in the middleware function
    req.time = new Date().toString();
    next();
},


    //route body
    // accessing the newly added property
    // in the main function
    (req,res) => {
        res.json({time: req.time})
    }
); */

//endpoint 4 ....route parameters
app.get('/:word/echo',(req,res) => {
        const word=req.params.word;
        res.json({echo: word});
});

































 module.exports = app;
