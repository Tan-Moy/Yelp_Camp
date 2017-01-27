var app = require('express')();
var bodyParser = require("body-parser");
var campgrounds = [
    {name: 'Salmon Creek', image: "http://photosforclass.com/download/6015893151"},
    {name: 'Granite Hill', image: "http://photosforclass.com/download/5733464781"},
    {name: 'Mountain Goats', image: "http://photosforclass.com/download/14716858549"},
    {name: "Pirate's Home", image: "http://photosforclass.com/download/5808881553"}
];

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");


app.get('/',function(req,res){
    res.render("landing");
});

app.get('/campgrounds',function(req,res){
    res.render("campgrounds",{campgrounds:campgrounds});
});

app.post('/campgrounds',function(req,res){
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name:name, image:image};
    campgrounds.push(newCampground);
    res.redirect('/campgrounds');
});

app.get("/campgrounds/new",function(req,res){
    res.render('new');
});







app.listen(3000,function(){
    console.log("serving...");
});