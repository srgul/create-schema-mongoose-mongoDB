var mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/nodeMongodbTest", { useMongoClient: true });

var db = mongoose.connection;

var User = require("./users");

db.once('open', function() {
    console.log("Ok!");

    var user_1 = new User({
        name: "Sait",
        surname: "Gul",
        birtday: "10.01.1997",
        email: "saitramazangul@gmail.com"
    });

    user_1.save(function(err, result) {
        if (err) {
            throw err;
        } else {
            console.log("Ok save!")
        }
    })


});