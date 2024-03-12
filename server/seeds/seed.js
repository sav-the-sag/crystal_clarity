// import dependencies
const db = require('../config/connection');
const { Affirmation } = require('../models');
const affirmations = require('./affirmations.json');
const cleanDB = require('./cleanDB');

// use database to create affirmations using the Affirmation model
db.once('open', async () => {
    try {
      await cleanDB('Affirmation', 'affirmations')
      await Affirmation.create(affirmations);
  
      console.log('all done!');
      process.exit(0);
    } catch (err) {
      throw err;
    }
  });