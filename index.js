var express = require ('express');
var exphbs = require ('express-handlebars');
var bodyparser = require ('body-parser');



var port = 3000;

var app = express();


// configuration 
app.use(express.static('public'));
app.engine('handlebars', exphbs());
app.set ('view engine','handlebars');
app.use(bodyparser.urlencoded({extended:false}));
app.use (bodyparser.json());

app.get('/',function(req,res){
    console.log('get /');
    res.render('home');

});

app.get('/products', function(req, res){
    console.log('GET /products');
    res.render('products');
});

app.get('/profile', function(req, res){
    console.log('GET /profile');
    res.render('profile')
});

app.get('/signup',function(req,res){

    console.log('get /');

    res.render('signup');


});


app.listen(port, function(){

console.log('server starder on port:',port);

});