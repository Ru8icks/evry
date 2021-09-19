const Prosjekt = require('../models/prosjekt.model');

function getProsjekts(req, res) {
    const docquery = Prosjekt.find({});
    docquery
      .exec()
      .then(prosjekts => { 
        res.status(200).json(prosjekts);
      })
      .catch(error => {
        res.status(500).send(error);
        return;
      });
  }



  function deleteProsjekt(req, res) {
    console.log("req.bparams.uid", req.params.uid);
    const uid =  req.params.uid;
    Prosjekt.findOneAndRemove({ _id: uid })
      .then(prosjekt => {
          console.log("checkfound")
        if (!checkFound(res, prosjekt)) return;
        console.log("passed")
        res.status(200).json(prosjekt);
        console.log('prosjekt deleted successfully!');
      })
      .catch(error => {
          console.log("error", error)
        if (checkServerError(res, error)) return;
      });
  }
  

function postProsjekt(req, res) {
    console.log(req.body, "req", req.body)
      const prosjekt = { 
        
        tittel: req.body.tittel,
        beskrivelse: req.body.beskrivelse,
        prosjektstart: req.body.prosjektstart,
       };
      const prosjekt1 = new Prosjekt(prosjekt);
     
      prosjekt1.save(error => {
        if (checkServerError(res, error)) return;
        res.status(201).json(prosjekt1);
        console.log('prosjekt created successfully!');
      });
    }

    
    function checkServerError(res, error) {
        if (error) {
          res.status(500).send(error);
          return error;
        }
      }
      function checkFound(res, question) {
        if (!question) {
          console.log("res", res)
          res.status(404).send('Prosjekt not found.');
          return;
        }
        return question;
      }




    module.exports = {
        postProsjekt,
        getProsjekts,
        deleteProsjekt
       
      };