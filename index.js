var express = require('express')
var app = express()
var fs = require('fs')
var readTxt = require('./readTxt')


app.set('view engine', 'pug');
app.set('views','./views');

app.use(function(req, res, next){
  readTxt(req, res, req.originalUrl );
  next();
  })
app.use(express.static('public'))

app.get('/', function (req, res) {
  res.render('index');
})

app.all('/provinces/:id', function (req, res) {
  fs.readFile('./provinces/' + req.params.id + ".json",'utf-8', function (err, data) {
      if (err) throw err;
      let obj = JSON.parse(data);
      res.render('index',{
        name:obj.name_of_province,
        img1:obj.image1,
        img2:obj.image2,
        img3:obj.image3,
        GofI:obj.group_of_island,
        pop:obj.population,
        del:obj.delicacies

      });
     
      



    
  });
  
});
app.listen(8081);

