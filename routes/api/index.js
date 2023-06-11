const express = require('express');
const router = express.Router();
const { listContact, createOrder } = require('../../controllers');
const orderSchema = require('../../schemas');
const { validateBody } = require('../../decorators');

router.get('/shops', listContact);

router.post('/order', validateBody(orderSchema), createOrder);
// router.get('/:contactId', getById);

// router.post('/', validateBody(contactsSchema), addContact);

// router.delete('/:contactId', removeContact);

// router.put('/:contactId', validateBody(contactsSchema), updateContact);

// router.patch(
//   '/:contactId/favorite',
//   validateStatusBody(updateFavoriteSchema),
//   updateFavoriteById
// );

module.exports = router;
