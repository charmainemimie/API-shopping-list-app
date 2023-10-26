//api name
const app=require('express')();
const PORT =8080;

//start api 
 app.listen(
    PORT, 
    ()=>console.log(`it is running on http://localhost:${PORT}`)
) 
