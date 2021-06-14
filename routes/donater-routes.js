const express = require('express');
const router = express.Router();

const service = require('../services/beneficier-service.js')

/* GET movies listing. */
router.get('/', async function(req, res, next) {
  const allDonaters = await service.getAllDonaters();
  res.send(allDonaters);
});

/** Add a new movie */
router.post('/', async function(req, res, next) {
  const newDonater = req.body; 
  const createdDonater = await service.createDonater(newDonater);
  res.status(201).send(createdDonater);
});

/** get a movie by id */
router.get('/:id', async function(req, res, next) {
  let donaterId = req.params.id;
  const donater = await service.getDonaterById(donaterId)
  res.send(donater);
});


/** delete a movie by id */
router.delete('/:id', async function(req, res, next) {
  let donaterId = req.params.id;
  await service.deleteDonater(donaterId);
  res.status(200).send({});
});

/** update a movie by id */
router.put('/:id', async function(req, res, next) {
  let donaterId = req.params.id;
  let donaterToBeUpdated = req.body;
  let updatedDonater = await service.updateDonater(donaterId, donaterToBeUpdated);
  res.status(200).send(updatedDonater);
});

module.exports = router;