const Shop = require('./schema/shop');
const Order = require('./schema/order');

const getAllShops = async () => {
  return await Shop.find();
};

const createOrder = async body => {
  const { name, email, phone, address, order, totalCost } = body;
  return await Order.create({ name, email, phone, address, order, totalCost });
};
// const getContactById = async id => {
//   return await Contact.findOne({ _id: id });
// };

// const createContact = async ({ name, email, phone }) => {
//   return await Contact.create({ name, email, phone });
// };

// const updateContactById = async (id, fields) => {
//   return await Contact.findByIdAndUpdate({ _id: id }, fields, { new: true });
// };

// const removeContact = async id => {
//   return await Contact.findByIdAndRemove({ _id: id });
// };
// const updateStatusContact = async (id, body) => {
//   return await Contact.findByIdAndUpdate({ _id: id }, body, { new: true });
// };
module.exports = {
  getAllShops,
  createOrder,
};
