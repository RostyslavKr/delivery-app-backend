const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { handleMongooseError } = require('../../helpers');

const order = new Schema(
  {
    name: { type: String, required: [true] },
    email: { type: String, required: [true] },
    phone: { type: String, required: [true] },
    address: { type: String, required: [true] },
    totalCost: { type: Number },
    order: [
      {
        _id: String,
        name: String,
        price: Number,
        count: Number,
        total: Number,
        image: String,
      },
    ],
  },
  { versionKey: false, timestamps: true }
);
order.post('save', handleMongooseError);
const Order = mongoose.model('order', order);
module.exports = Order;
