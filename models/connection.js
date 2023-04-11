const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://admin:HLDpmv5tU2nX26mw@myfirstdatabase.azg2cuu.mongodb.net/tickethack'

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
 .then(() => console.log('Database connected'))

  .catch(error => console.error(error));