const express = require('express');
const router = express.Router();

const service = require('../services/dform-service')

router.get('/', async function(req, res, next) {
  const allForms = await service.getAllForms();
  res.send(allForms);
});

router.post('/', async function(req, res, next) {
  const newForm = req.body; 
  const createdForm = await service.createForm(newForm);
  res.status(201).send(createdForm);
});

module.exports = router;