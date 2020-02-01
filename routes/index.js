var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
    // res.render('index', { title: 'Express' });
    // res.sendFile('./../views/condition-general/index.html');
    res.sendFile(path.resolve(app.get('./../views/condition-general') + '/index.html'));

    // res.sendFile('index.html', { root: path.join(__dirname, './../views/condition-general') });

    // res.sendFile(path.resolve(__dirname, 'views', 'dist','Mreyet0', 'index.html'))
});

module.exports = router;