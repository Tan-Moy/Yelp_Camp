var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [{
    name: "Tree Tops",
    image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et lorem nibh. Fusce efficitur orci vitae sem tristique venenatis. Suspendisse congue non arcu quis convallis. Donec posuere ligula at ornare hendrerit. Morbi viverra tincidunt mattis. Pellentesque et mauris quam. Nulla ut placerat urna. Nam sit amet elit et lacus maximus cursus. Mauris at aliquam nibh. Nunc id turpis vel sem scelerisque fringilla vitae ac odio. Integer cursus turpis in sem consectetur, sed vestibulum justo tempor. Nam fermentum, ex sed elementum sollicitudin, diam est malesuada sem, ac scelerisque sem turpis vel nibh. Curabitur nisl ligula, sollicitudin non est maximus, rhoncus porta diam. "
}, {
    name: "Icy Embrace",
    image: "https://farm1.staticflickr.com/112/316612921_f23683ca9d.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et lorem nibh. Fusce efficitur orci vitae sem tristique venenatis. Suspendisse congue non arcu quis convallis. Donec posuere ligula at ornare hendrerit. Morbi viverra tincidunt mattis. Pellentesque et mauris quam. Nulla ut placerat urna. Nam sit amet elit et lacus maximus cursus. Mauris at aliquam nibh. Nunc id turpis vel sem scelerisque fringilla vitae ac odio. Integer cursus turpis in sem consectetur, sed vestibulum justo tempor. Nam fermentum, ex sed elementum sollicitudin, diam est malesuada sem, ac scelerisque sem turpis vel nibh. Curabitur nisl ligula, sollicitudin non est maximus, rhoncus porta diam. "
}, {
    name: "Canyon Floor",
    image: "https://farm1.staticflickr.com/189/493046463_841a18169e.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et lorem nibh. Fusce efficitur orci vitae sem tristique venenatis. Suspendisse congue non arcu quis convallis. Donec posuere ligula at ornare hendrerit. Morbi viverra tincidunt mattis. Pellentesque et mauris quam. Nulla ut placerat urna. Nam sit amet elit et lacus maximus cursus. Mauris at aliquam nibh. Nunc id turpis vel sem scelerisque fringilla vitae ac odio. Integer cursus turpis in sem consectetur, sed vestibulum justo tempor. Nam fermentum, ex sed elementum sollicitudin, diam est malesuada sem, ac scelerisque sem turpis vel nibh. Curabitur nisl ligula, sollicitudin non est maximus, rhoncus porta diam. "
}];

function seedDB() {
    //Remove all campgrounds
    Campground.remove({}, function(err) {
        if (err) {
            console.log(err);
        }
        console.log("removed campgrounds!");
        //add a few campgrounds
        data.forEach(function(seed) {
            Campground.create(seed, function(err, campground) {
                if (err) {
                    console.log(err)
                } else {
                    console.log("added a campground");
                    //create a comment
                    Comment.create({
                        text: "This place is great, but I wish there was internet",
                        author: "Homer"
                    }, function(err, comment) {
                        if (err) {
                            console.log(err);
                        } else {
                            campground.comments.push(comment);
                            campground.save();
                            console.log("Created new comment");
                        }
                    });
                }
            });
        });
    });
    //add a few comments
}

module.exports = seedDB;
