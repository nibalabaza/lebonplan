var mongoose = require('mongoose');

var product= new mongoose.Schema({ 
    title: {type: String},
     price: {type: Number},
    city: {type: String},
    pic1: {type: String},
    pic2: {type: String},
    pic3: {type: String},
    description: {type: String}
})

var model = mongoose.model('Product', product);

module.exports = model;