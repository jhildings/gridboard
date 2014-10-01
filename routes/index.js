var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('grid', { title: 'Gridboard' });
});





router.post('/addgrid', function(req, res) {

    // Set our internal DB variable
    var db = req.db;
    console.log("adding..." + req.body.gridboard)
    // Get our form values. These rely on the "name" attributes

    var gridboard = req.body.gridboard;
    console.log("Gridboard is " + gridboard)
    // Set our collection
    var collection = db.get('board');
    var date =   moment().format("YYYY / MM / DD");
    // Submit to the DB
    collection.insert({
        grid: gridboard,
        add_date: date
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // If it worked, set the header so the address bar doesn't still say /adduser
            res.location("/");
            // And forward to success page
            res.redirect("/");
        }
    });
});


module.exports = router;
