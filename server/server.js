const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// setup body parser - to translating request body into json
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//serve static files from the public folder
app.use(express.static('server/public'));


//set up my router
let listRouter = require('./routes/list.router');
app.use('/todo', listRouter);





//start express
const PORT = 5000;
app.listen(PORT, ()=>{
    console.log('Up and running on PORT =>', PORT);
})