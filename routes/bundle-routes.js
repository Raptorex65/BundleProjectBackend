const express = require('express');
const router = express.Router();

const service = require('../services/bundle-service')

router.get('/', async function(req, res, next) {
  const allBundle = await service.getAllBundles();
  res.send(allBundle);
});

router.post('/', async function(req, res, next) {
  const newBundle = req.body; 
  const createdBundle = await service.createBundle(newBundle);
  res.status(201).send(createdBundle);
});

router.get('/:id', async function(req, res, next) {
  let bundleId = req.params.id;
  const bundle = await service.getBundleById(bundleId)
  res.send(bundle);
});

router.delete('/:id', async function(req, res, next) {
  let bundleId = req.params.id;
  await service.deleteBundle(bundleId);
  res.status(200).send({});
});

router.put('/:id', async function(req, res, next) {
  let bundleId = req.params.id;
  let bundleToBeUpdated = req.body;
  let updatedBundle = await service.updateBundle(bundleId, bundleToBeUpdated);
  res.status(200).send(updatedBundle);
});

module.exports = router;