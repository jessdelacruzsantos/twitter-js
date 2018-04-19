const express = require('express');
const router = express.Router();

const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
    let tweets = tweetBank.list();
    res.render( 'index.html', {tweets});
});

// router.get('/stylesheets/style.css', function (req, res) {
//     res.sendFile('/Users/jessiedelacruz/Desktop/twitter-js/public/stylesheets/style.css');
// })

module.exports = router;