const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stockSchema = new Schema({
  symbol: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  exchange: String,
  mic_code: String,
  currency: String,
  datetime: String,
  timestamp: Number,
  open: String,
  high: String,
  low: String,
  close: String,
  volume: String,
  previous_close: String,
  change: String,
  percent_change: String,
  average_volume: String,
  is_market_open: Boolean,
  fifty_two_week: {
    low: String,
    high: String,
    low_change: String,
    high_change: String,
    low_change_percent: String,
    high_change_percent: String,
    range: String
  }
});

const Stock = mongoose.model('Stock', stockSchema);

module.exports = Stock;