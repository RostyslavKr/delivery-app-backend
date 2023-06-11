const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { handleMongooseError } = require('../../helpers');

const shop = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Set name for contact'],
    },
    menu: [{ id: Number, name: String, price: Number }],
  },
  { versionKey: false, timestamps: true }
);

shop.post('save', handleMongooseError);
const Shop = mongoose.model('shops', shop);
module.exports = Shop;
