var express = require('express');
var router = express.Router();

router.use(function timeLog(req, es, next){
    console.log('Time', Date.now());
});

router.get('/', function(req, res){
    res.send('Accueil');
});

moduke.exports = router;