const mongoose = require('mongoose');

const mongoDB = 'mongodb://localhost/db';

mongoose.connect(mongoDB,{useUnifiedTopology: true,useNewUrlParser: true});

mongoose.Promise = global.Promise;

module.exports = mongoose;