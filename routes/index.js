const express = require('express');
const router = express.Router();

const tweetBank = require('../tweetBank');

router.get('/', function (req, res, next) {
    let tweets = tweetBank.list();

    res.render('index', {tweets});
});
router.get( '/users/:name', function (req, res, next) {
    let name = req.params.name;
    let userTweets = tweetBank.find({name})

    res.render('index', {tweets: userTweets})
});
router.get( '/tweets/:id', function (req, res, next) {
    let id = Number(req.params.id);
    let userTweet = tweetBank.find({id})

    console.log(userTweet);

    res.render('index', {tweets: userTweet})
});
// router.get('/stylesheets/style.css', function (req, res) {
//     res.sendFile('/Users/jessiedelacruz/Desktop/twitter-js/public/stylesheets/style.css');
// })

module.exports = router;
