const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const prosjektSchema = new Schema(
  {
    
    tittel: String,
    beskrivelse: String,
    prosjektstart: String,
    
  },
  {
    collection: 'prosjekt'
  }
);

const Prosjekt = mongoose.model('Prosjekt', prosjektSchema);

module.exports = Prosjekt;