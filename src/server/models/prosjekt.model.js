const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const prosjektSchema = new Schema(
  {
    
    tittel: String,
    beskrivelse: String,
    prosjektstart: String,
    navn: String,
    organisasjonsnummer: String,
    postadresse: [String],
    sektorkode: String,
  },
  {
    collection: 'prosjekt'
  }
);

const Prosjekt = mongoose.model('Prosjekt', prosjektSchema);

module.exports = Prosjekt;