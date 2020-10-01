var mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/nodeMongodbTest", { useMongoClient: true });

var Schema = mongoose.Schema;

var userShema = new Schema({
    name: String,
    surname: String,
    phone: String,
    email: String,
    old: Number
});

var User = mongoose.model('User', userShema);

module.exports = User;