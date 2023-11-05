let express = require('express');
let app = express();
console.log("Hello World");
require('dotenv').config();
let bodyParser = require('body-parser');

/* Note: extended is a configuration option that tells body-parser which parsing needs to be used. When extended=false it
 uses the classic encoding querystring library. When extended=true it uses qs library for parsing.

When using extended=false, values can be only strings or arrays. The object returned when using querystring does not 
prototypically inherit from the default JavaScript Object, which means functions like hasOwnProperty, toString will not 
be available. The extended version allows more data flexibility, but it is outmatched by JSON. */

//middleware.....Use body-parser to Parse POST Requests
app.use(bodyParser.urlencoded({extended: false}));

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
/* app.get('/:word/echo',(req,res) => {
        const word=req.params.word;
        res.json({echo: word});
}); */



//endpoint 5 [app.route(path).get(handler).post(handler)]....Get Query Parameter Input from the Client
app.get('/name', function(req, res) {
 //http://localhost:3000/name?first=simangaliso&last=mangorima
    res.json({
      name: req.query.first + " " + req.query.last
    });
  });

//endpoint 6....Get Data from POST Requests
   app.post('/name',(req,res)=>{
    const firstName =req.body.first;
    const lastName =req.body.last;

    res.json({name: firstName + " " + lastName})
  }); 

/*   app.post("/name", (req, res)=> {
    // Handle the data in the request
    var string = req.body.first + " " + req.body.last;
    res.json({ name: string });
  }); */
































 module.exports = app;
