const express = require('express');
const router = express.Router();
const enhetsRegService = require('../services/enhetsRegService.js');
const prosjektService = require('../services/prosjektService.js'); 

router.get('/', function (req, res) {
    res.send('API works!');
});



router.get('/enhet/:name/:enhet', (req, res) => {
    enhetsRegService.getEnhet(req, res);

});
router.get('/enhet/:name/:page/:enhet', (req, res) => {
    enhetsRegService.getEnhetPage(req, res);

});

router.post('/prosjekt', (req, res) => {
    console.log("POST prosjektService")
    prosjektService.postProsjekt(req, res);
  
});
router.get('/prosjekt', (req, res) => {
    prosjektService.getProsjekts(req, res);
 
});
router.delete('/prosjekt/:uid', (req, res) => {
    console.log("test prosjekt delete")
    prosjektService.deleteProsjekt(req, res);
  });
  
  

  
  


  
module.exports = router;