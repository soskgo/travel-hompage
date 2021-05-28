var express = require('express');
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.render('homePage.html')
});

//port open
app.listen(4000, function () {
    console.log("Express server has started on port 4000")
});