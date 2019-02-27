
var express = require('express');
var morgan = require('morgan');
var mongoose = require('mongoose');
mongoose.plugin(schema => { schema.options.usePushEach = true });
var bodyParser = require('body-parser');
var ejs = require('ejs');
var engine = require('ejs-mate');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var flash = require('express-flash');
var MongoStore = require('connect-mongo/es5')(session);
var passport = require('passport');
var stripe = require('stripe');


var secret = require('./config/secret');
var User = require('./models/user');
var Course = require('./models/course');

var app = express();

const db = require('./config/secret').database;

mongoose
.connect(db,{ useNewUrlParser: true})
.then (() => console.log('connected to MongoDB'))
.catch(err => console.log(err));




// Middleware
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: secret.secretKey,
  store: new MongoStore({ url: secret.database, autoReconnect: true})
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(function(req, res, next) {
  res.locals.user = req.user;
  next();
});

require('./routes/teacher')(app);
require('./routes/payment')(app);



app.engine('ejs', engine);
app.set('view engine', 'ejs');

var mainRoutes = require('./routes/main');
var userRoutes = require('./routes/user');


app.use(mainRoutes);
app.use(userRoutes);

app.listen(secret.port, function(err) {
  if (err) throw err;
  console.log("Server is Running on port " + secret.port);
});
