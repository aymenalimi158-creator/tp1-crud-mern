const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  marque: { type: String, required: true },
  categorie: { 
    type: String, 
    enum: ['Soin visage', 'Soin cheveux', 'Maquillage', 'Parfum'], 
    default: 'Soin visage' 
  },
  prix: { type: Number, required: true },
  description: { type: String },
  enStock: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
