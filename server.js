const app = require('./app');
const mongoose = require('mongoose');

const { DB_URI, PORT } = process.env;

mongoose
  .connect(DB_URI)
  .then(() => {
    app.listen({ port: PORT, host: '0.0.0.0' }, () => {
      console.log('Database connection successful');
    });
  })
  .catch(err => {
    console.log(err.message);
    process.exit(1);
  });
