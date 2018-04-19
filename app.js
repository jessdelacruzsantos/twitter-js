const express = require('express');
const app = express();
const morgan = require('morgan');
const nunjucks = require('nunjucks');

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', {noCache: true}); 

let people = [{name: 'Gandolf'}, {name: 'Frodo'},{name: 'Hermione'}
];

let title = 'An Example';

app.use(function(req, res , next){
   
    next(); // Never forget!!!
});

app.get('/', function (req, res) {
    let code = res.statusCode;

    if (code === 200) {
        res.render('index.html', {title: title, people: people});
    } else {
        console.log('Something is terribly wrong: ' + code);

    }
});

app.get('/is-anybody-in-there', function (req, res) {
    console.log('GET /is-anybody-in-there');
})

app.post('/modernism', function (req, res) {
    console.log('POST /modernism');
})

app.listen(3000, function (){
    console.log('Listening on 3000');
})