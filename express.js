var express = require('express');
var app = express();
var bodyParser = require('body-parser');
let routes = require('./route/router');
let flash = require('connect-flash');
let session = require('express-session');
let cookieParser = require('cookie-parser');
let methodOverride = require('method-override');

app.set('views', './views');//set thư mục cùng cấp
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/src'));
app.use(cookieParser('keyboard cat'));
app.use(session({cookie: {maxAge: 60000}}));
app.use(flash());
app.use(methodOverride('_method'));
// app.use(expressValidator());

routes(app);

app.listen(3000, function() {
    console.log("server is running at port 3000");
});
