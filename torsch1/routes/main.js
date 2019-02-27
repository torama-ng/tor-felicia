var router = require('express').Router();
var Course = require('../models/course');
var User = require('../models/user');

var async = require('async');


router.get('/', function(req, res, next) {
  res.render('main/home');
});

router.get('/about', function(req, res) {
  res.render('main/about');
});

router.get('/courses', function(req, res, next) {
  Course.find({}, function(err, courses) {
    res.render('courses/courses', { courses: courses });
  });
});

router.get('/courses/:id', function(req, res, next) { 
  async.parallel([
    function(callback) {
      Course.findOne({ _id: req.params.id})
      .populate('ownByStudent.user')
      .exec(function(err, foundCourse) {
        callback(err, foundCourse);
      });
    },

    function(callback) {
      User.findOne({ _id: req.user._id, 'coursesTaken.course': req.params.id})
      .populate('coursesTaken.course')
      .exec(function(err, foundUserCourse) {
        callback(err, foundUserCourse);
      });
    },

    function(callback) {
      User.findOne({ _id: req.user._id, 'coursesTeach.course': req.params.id})
      .populate('coursesTeach.course')
      .exec(function(err, foundUserCourse) {
        callback(err, foundUserCourse);
      });
    },
  ], function(err, results) {
    var course = results[0];
    var userCourse = results[1];
    var teacherCourse = results[2];
    if (userCourse === null && teacherCourse === null){
      res.render('courses/cdesc', { course: course});
    } else if (userCourse === null && teacherCourse != null) {
      res.render('courses/course', { course: course});
    } else {
      res.render('courses/course', { course: course });
    }
  });
});


module.exports = router;