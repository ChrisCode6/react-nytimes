var express = require('express');

var router = express.Router();

var Article = require('../models/article');

router.get('/api/saved', function (req, res) {
    Article.find({}, function (err, data) {
        if (err) {
            console.log(err);
        } else {

            var resultData = [];

            data.forEach(function (article) {
                resultData.push({
                    title: article.title,
                    url: article.url,
                    date: article.date,
                    articleID: article.articleID
                });
            });

            res.send(resultData);
        }
    });
});

router.post('/api/saved', function (req) {
    var body = req.body;

    var newArticle = {
        title: body.title,
        url: body.url,
        date: body.date,
        articleID: body.articleID
    };

    var query = {articleID: body.articleID};

    Article.findOneAndUpdate(query, newArticle, {upsert: true}, function(err) {
        if (err) {
            console.log(err);
        }
    });
});

router.delete('/api/saved/:articleID', function (req) {
    var articleID = req.params.articleID;
    Article.remove({articleID: articleID}, function(err) {
        if (err) {
            console.log(err);
        }
    });
});



router.use('*', function (req, res) {
    res.sendFile('index.html');
});


module.exports = router;