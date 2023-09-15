const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const websocketSchema = new Schema({
  event: String,
  symbol: String,
  currency_base: String,
  currency_quote: String,
  type: String,
  timestamp: Number,
  price: Number,
  bid: Number,
  ask: Number
});

const WebSocketData = mongoose.model('WebSocketData', websocketSchema);

module.exports = WebSocketData;