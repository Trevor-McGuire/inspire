const { Schema, model} = require('mongoose');
const bcrypt = require('bcrypt');

const groupSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  items: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Item'  
    },
  ],
});

const Group = model('Group', groupSchema);

module.exports = Group;