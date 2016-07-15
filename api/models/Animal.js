const mongoose = require('mongoose');
const schema = mongoose.Schema;

const AnimalSchema = schema({
  name: { type: String },
  origin: { type: String },
  avg_size: { type: Number, min: 0 },
  avg_life: { type: Number, min: 0 },
  color: { type: String },
  temperament: { type: String },
  avg_price: { type: Number, min: 0 },
});

const AnimalModel = mongoose.model('Animal', AnimalSchema);

module.exports = AnimalModel;
