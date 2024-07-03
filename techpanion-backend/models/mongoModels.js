const mongoose = require('mongoose');
const { Schema } = mongoose;

const formSchema = new Schema({
  country: String,
  bankKey: String,
  bankAccountNumber: String,
  reference: String,
  // other fields...
});

const actionHistorySchema = new Schema({
  action: String,
  timestamp: { type: Date, default: Date.now },
});

const Form = mongoose.model('Form', formSchema);
const ActionHistory = mongoose.model('ActionHistory', actionHistorySchema);

module.exports = { Form, ActionHistory };
