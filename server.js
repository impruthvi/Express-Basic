const express = require('express');
const bodyParser = require('body-parser');
const app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.get('/',function(req,res){
    res.sendFile(__dirname+'/bmi.html');
});

app.post('/',function(req,res){
   var w = parseFloat(req.body.weight);
   var h = parseFloat(req.body.hight);

   var r = w/(h*h);

   
   res.send('result'+r);
});


app.listen(3000,function(){
    console.log('start');
});
