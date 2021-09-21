const axios = require('axios').default;


function getEnhet(req, res){
    const name = req.params.name;
    const enhet = req.params.enhet
    axios.get(`https://data.brreg.no/enhetsregisteret/api/${enhet}?navn=${name}`)
    .then(response=>{
      console.log(response.data, "test")
      res.status(200).json( response.data);
    })
    .catch(err => {
      console.log(err)
    })
}
function getEnhetPage(req, res){
    const name = req.params.name;
    const page = req.params.page
    const enhet = req.params.enhet
    console.log("test", req.params)
    axios.get(`https://data.brreg.no/enhetsregisteret/api/${enhet}?navn=${name}&page=${page}&size=20`)
    .then(response=>{
      console.log(response.data)
      res.status(200).json( response.data);
    })
    .catch(err => {
      console.log(err)
    })
}

module.exports = {
    getEnhet,
    getEnhetPage
   
  };