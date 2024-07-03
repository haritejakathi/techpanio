const express = require('express');
const { Form: MongoForm, ActionHistory: MongoActionHistory } = require('../models/mongoModels');
const { Form: SqlForm, ActionHistory: SqlActionHistory } = require('../models/sqlModels');
const router = express.Router();

router.get('/invoice-details', async (req, res) => {
  try {
    const mongoInvoiceDetails = await MongoForm.find();
    const sqlInvoiceDetails = await SqlForm.findAll();
    res.json({ mongo: mongoInvoiceDetails, sql: sqlInvoiceDetails });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/submit-form', async (req, res) => {
  try {
    const formData = req.body;
    const mongoForm = new MongoForm(formData);
    await mongoForm.save();

    await SqlForm.create(formData);

    res.json({ message: 'Form submitted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/action-history', async (req, res) => {
  try {
    const mongoActionHistory = await MongoActionHistory.find();
    const sqlActionHistory = await SqlActionHistory.findAll();
    res.json({ mongo: mongoActionHistory, sql: sqlActionHistory });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
