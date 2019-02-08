var express = require('express');
var fs = require("fs");
var path = require('path');
var router = express.Router();


var Videos = require("../models/videoschema");

var videos = path.join(__dirname,'../videos');

var folders = fs.readdirSync(videos);

//console.log(Videos);

// Get Homepage
router.get('/', ensureAuthenticated, function(req, res){

	folders.forEach(folder =>{

		if(!folder.includes('.')){


		var fileFolder = path.join(__dirname, '../videos',folder);
		var files = fs.readdirSync(fileFolder);

		files.forEach(file =>{

	var item = {
	name : file,
	filename: folder +'/' + file,
	category:folder
		}	

		var vids = new Videos(item);
		vids.save();
	

		});
	}

	})
	

	console.log('We are in ......')
	res.render('index');
});

function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		//req.flash('error_msg','You are not logged in');
		res.redirect('/users/login');
	}
}

module.exports = router;