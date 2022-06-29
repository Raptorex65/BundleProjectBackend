const express = require('express');
const router = express.Router();

const service = require('../services/donater-service')

router.get('/', async function(req, res, next) {
  const allDonaters = await service.getAllDonaters();
  res.send(allDonaters);
});

router.post('/', async function(req, res, next) {
  const newDonater = req.body; 
  const createdDonater = await service.createDonater(newDonater);
  res.status(201).send(createdDonater);
});

router.get('/:id', async function(req, res, next) {
  let donaterId = req.params.id;
  const donater = await service.getDonaterById(donaterId)
  res.send(donater);
});

router.delete('/:id', async function(req, res, next) {
  let donaterId = req.params.id;
  await service.deleteDonater(donaterId);
  res.status(200).send({});
});

router.put('/:id', async function(req, res, next) {
  let donaterId = req.params.id;
  let donaterToBeUpdated = req.body;
  let updatedDonater = await service.updateDonater(donaterId, donaterToBeUpdated);
  res.status(200).send(updatedDonater);
});

module.exports = router;