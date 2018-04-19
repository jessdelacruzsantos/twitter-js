const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(function(req, res , next){
    console.log('In use.');
    console.log('End of use.');
    next(); // Never forget!!!
});

app.get('/', function (req, res) {
    let code = res.statusCode;

    if (code === 200) {
        console.log('GET / ' + code);
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