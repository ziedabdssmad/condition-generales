var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    // res.render('index', { title: 'Express' });
    res.sendFile('index.html', { root: __dirname });
    // res.sendFile(path.resolve(__dirname, 'views', 'dist','Mreyet0', 'index.html'))
});

module.exports = router;