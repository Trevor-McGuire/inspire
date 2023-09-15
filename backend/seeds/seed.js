const db = require('../config/connection');
const { Group, Item } = require('../models');
const cleanDB = require('./cleanDB');

// const userData = require('./userData.json');
// const stockData = require('./stockData.json');
const groupData = require('./groupData.json');
const itemData = require('./itemData.json');

db.once('open', async () => {
  await cleanDB('Group', 'groups');
  await cleanDB('Item', 'items');

  await Group.insertMany(groupData);
  await Item.insertMany(itemData);

  console.log('Groups and Items seeded!');
  process.exit(0);
});
