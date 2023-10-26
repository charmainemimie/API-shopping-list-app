//api name
const express=require('express');
const app = express();
const PORT =8080;

app.use(express.json())
//start api 
app.listen(
    PORT, 
    ()=>console.log(`it is running on http://localhost:${PORT}`)
) 

//endpoint 1 (READ)
app.get('/tshirt', (req, res)=>{
    //respond okay and send a data payload along with the response which is the tshirt and size
    res.status(200).send({
        tshirt:'👕',
        size:'large',
    })
});

//endpoint 2 (CREATE)
app.post('/tshirt/:id', (req, res)=>{
//url with a dynamic parameter which is the id of the tshirt
    const { id } = req.params;
    const {logo} = req.body;

    if(!logo){
        res.status(418).send({message: 'We need a logo!'})
    }
    res.send({
        tshirt: `👕 with your ${logo} and ID of ${id}`
    })
}); 