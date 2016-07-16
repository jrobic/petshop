const mongoose = require('mongoose');
const schema = mongoose.Schema;

const animalSchema = schema({
  name: { type: String, required: true },
  origin: { type: String, required: true },
  color: { type: String },
  avg_size: { type: Number, min: 0 },
  avg_life: { type: Number, min: 0 },
  avg_weight: { type: Number, min: 0 },
  avg_price: { type: Number, min: 0, required: true }
}, {
  timestamps: true
});

const animalModel = mongoose.model('Animal', animalSchema);

module.exports = animalModel;
