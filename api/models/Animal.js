const mongoose = require('mongoose');
const schema = mongoose.Schema;

const animalSchema = schema({
  name: { type: String, required: true },
  origin: { type: String, required: true },
  color: { type: String },
  avgSize: { type: String },
  avgLife: { type: String },
  avgWeight: { type: String },
  avgPrice: { type: String, required: true }
}, {
  timestamps: true,
  toObject: {
    virtuals: true,
    transform: true
  },
  toJSON: {
    virtuals: true
  }
});

const animalModel = mongoose.model('Animal', animalSchema);

module.exports = animalModel;
