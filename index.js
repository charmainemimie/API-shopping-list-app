//api name
const app=require('express')();
const PORT =8080;

//start api 
/* app.listen(
    PORT, 
    ()=>console.log(`it is running on http://localhost:${PORT}`)
) */

//endpoint 1 (READ)
app.get('/tshirt', (req, res)=>{
    //respond okay and send a data payload along with the response which is the tshirt and size
    res.status(200).send({
        tshirt:'👕',
        size:'large'
    })
});

