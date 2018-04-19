const express = require('express');
const app = express();
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const routes = require('./routes');

app.use(morgan('dev'));

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', {noCache: true});

app.use(express.static('public'));
app.use(routes);

app.listen(3000, function (){
    console.log('Listening on 3000');
})
