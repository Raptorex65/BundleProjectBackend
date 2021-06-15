const express = require('express');
const router = express.Router();

const service = require('../services/item-service.js')

router.get('/', async function(req, res, next) {
  const Items = await service.getAllItems();
  res.send(Items);
});

router.post('/', async function(req, res, next) {
  const newItem = req.body; 
  const createdItem = await service.createItem(newItem);
  res.status(201).send(createdItem);
});

router.get('/:id', async function(req, res, next) {
  let pId = req.params.id;
  const item = await service.getItemById(pId)
  res.send(item);
});


router.delete('/:id', async function(req, res, next) {
  let pId = req.params.id;
  await service.deleteItem(pId);
  res.status(200).send({});
});

router.put('/:id', async function(req, res, next) {
  let pId = req.params.id;
  let itemToBeUpdated = req.body;
  let updatedLecture = await service.updateItem(pId, itemToBeUpdated);
  res.status(200).send(updatedLecture);
});

module.exports = router;