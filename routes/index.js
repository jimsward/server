var express = require('express');
var router = express.Router();
var cors = require('cors')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.options('/test', cors())/* {



    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next()

})*/
router.post('/test', function(req, res, next) {
  console.dir('HERE' + req.method)
 res.json(req.body)

})
router.get('/probs', function(req, res, next){
    var probs = ["None", "Diabetes", "Arthritis", "Alzheimers", "Cancer", "ALS"]
    //data = JSON.stringify(probs)
    res.send(probs)
})
router.get('/dates', function(req, res, next){
    var dates = ["07/13/2016", "07/14/2016", "07/15/2016", "07/18/2016", "07/20/2016", "07/22/2016", "07/25/2016", "07/26/2016"]
    res.send(dates)
})




module.exports = router;
