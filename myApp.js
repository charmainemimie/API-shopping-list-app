let express = require('express');
let app = express();
console.log("Hello World")
require('dotenv').config()

/* app.get('/', (req, res)=>{
        res.send("Hello Express");
}) */

app.use("/public",express.static(__dirname + '/public'));

app.use((req, res, next) => {
    console.log(req.method + " " + req.path + " - " + req.ip);
    next();
})

/* app.get('/', (req, res)=>{
    res.sendFile(__dirname+'/views/index.html');
}); */

app.get('/json', (req, res)=>{
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
        }); */
});


































 module.exports = app;
