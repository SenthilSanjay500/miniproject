const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port=3000;

app.set("view engine",'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

app.get('/', function(req,res){
    res.render('index.ejs');
})

app.listen(port,()=>{
    console.log("Port is listening on "+port);
})