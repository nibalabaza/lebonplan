var express = require ('express');
var exphbs = require ('express-handlebars');
var bodyparser = require ('body-parser');
var mongoose = require('mongoose');
var multer = require('multer');
var fs = require('fs');

var productModel = require('./models/product');

var port = 3000;
var upload = multer({
    dest: 'public/uploads'
});

var app = express();


// configuration 
app.use(express.static('public'));
app.engine('handlebars', exphbs());
app.set ('view engine','handlebars');
app.use(bodyparser.urlencoded({extended:false}));
app.use (bodyparser.json());

mongoose.connect('mongodb://localhost/product', {
  useNewUrlParser: true,
  useUnifiedTopology: true
},function(err){
    if(err!== null){
        console.log('Connection error err', err);
    }else{
        console.log('DB connected');
    }
});

app.get('/',function(req,res){
    console.log('get /');
    res.render('home');

});

app.get('/products', function(req, res){
    console.log('GET /products');
    res.render('products');
});

app.get('/product', function(req, res){
    console.log('GET /product');
    res.render('product');
});

app.get('/admin', function(req, res){
    console.log('GET /admin');
    res.render('admin');
});

app.get('/profile', function(req, res){
    console.log('GET /profile');
    res.render('profile')
});


app.post('/addproduct', upload.array('pic') , function(req, res){

    console.log(req.file);
   

 console.log('POST/addproduct');
    console.log("req.body", req.body);
    console.log('files ',req.files);
    console.log('file ',req.file);
    var product={
        title: req.body.title,
        price: req.body.price,
        city: req.body.city,
        pic1:req.files[0].path,
        pic2:req.files[1].path,
        pic3:req.files[2].path,
        description: req.body.description,

    };

    productModel.create(product, function (err, document) {
        if (err !== null) {
            console.log('Err saved product', err);
            return;
        }
        res.render('addproduct');
    });
    // product.save(function(err, document){
    //     console.log('err', err)
    //     console.log('documents', document);
    //     if (err !== null){
    //         console.log('cannot save student err', err)
    //     }
    //     else{
    //         console.log('student saved successfuly');
    //         console.log('document',document);
    //     }
    //     res.render('addproduct');
    // });
    
});



app.get('/products',function(req,res){
    console.log('product /');
    res.render('products');


});






app.get('/signup',function(req,res){
    console.log('get /');
    res.render('signup');


});


app.listen(port, function(){

console.log('server starder on port:',port);

});