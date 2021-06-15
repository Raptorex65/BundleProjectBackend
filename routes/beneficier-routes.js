const express = require('express');
const router = express.Router();

const service = require('../services/beneficier-service')

router.get('/', async function(req, res, next) {
  const allBeneficiers = await service.getAllBeneficiers();
  res.send(allBeneficiers);
});

router.post('/', async function(req, res, next) {
  const newBeneficier = req.body; 
  const createdBeneficier = await service.createBeneficier(newBeneficier);
  res.status(201).send(createdBeneficier);
});

router.get('/:id', async function(req, res, next) {
  let beneficierId = req.params.id;
  const beneficier = await service.getBeneficierById(beneficierId)
  res.send(beneficier);
});

router.delete('/:id', async function(req, res, next) {
  let beneficierId = req.params.id;
  await service.deleteBeneficier(beneficierId);
  res.status(200).send({});
});

router.put('/:id', async function(req, res, next) {
  let beneficierId = req.params.id;
  let beneficierToBeUpdated = req.body;
  let updatedBeneficier = await service.updateBeneficier(beneficierId, beneficierToBeUpdated);
  res.status(200).send(updatedBeneficier);
});

module.exports = router;