const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  group: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Group',
    required: true, // Each item must belong to a group
  },
  tags: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Tag',
    },
  ],
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
