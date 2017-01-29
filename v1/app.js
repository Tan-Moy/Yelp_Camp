var express = require('express');
app = express();
bodyParser = require("body-parser");
mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

var campgroundSchema = new mongoose.Schema({

    name: String,
    image: String,
    description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create({
//     name:'Salmon Creek',
//     image:'http://photosforclass.com/download/6015893151'
// },function(err,camp){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("newly added camp:");
//         console.log(camp);color
//     }
// });

app.get('/', function (req, res) {
    res.render("landing");
});

app.get('/campgrounds', function (req, res) {
    Campground.find({}, function (err, allCampgrounds) {
        if (err) {
            console.log(err);
        }
        else {
            console.log("newly added camp:");
            res.render("campgrounds", { campgrounds: allCampgrounds });
        }
    });
});

app.post('/campgrounds', function (req, res) {
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = { name: name, image: image };
    Campground.create(newCampground, function (err, newlyCreated) {
        if (err) {
            console.log(err);
        }
        else {
            res.redirect("/campgrounds");
        }
    });
});

app.get("/campgrounds/new", function (req, res) {
    res.render('new');
});

app.get("/campgrounds/:id", function (req, res) {
    res.send("This will be the show page one day");
});


app.listen(3000, function () {
    console.log("serving...");
});