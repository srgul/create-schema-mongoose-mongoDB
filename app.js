var mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/nodeMongodbTest", { useMongoClient: true });

var db = mongoose.connection;

var User = require("./users");

db.once('open', function() {
    console.log("Ok!");

    /*  --Save Data--
    var user_1 = new User({
        name: "Sait",
        surname: "Gul",
        email: "saitramazangul@gmail.com"
    });

    user_1.save(function(err, result) {
        if (err) {
            throw err;
        } else {
            console.log("Ok save!")
        }
    });
    */


    /*--Find Data--

    User.find({}, function(err, result) {
        if (err) {
            throw err;
        } else {
            console.log(result);
        }
    });
    
    */

    /* find Specify 

    User.find({ name: "Sait" }, function(err, result) {
        if (err) {
            throw err;
        } else {
            console.log(result);
        }
    }); 

    */


    /* Remove data 
    
    User.remove({ id = "data_id" }, function(err, msg) {
        if (err) {
            throw err;
        } else {
            console.log(msg);
        }
    });

    */


});