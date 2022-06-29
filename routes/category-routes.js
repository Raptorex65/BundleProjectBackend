const express = require('express');
const router = express.Router();

const service = require('../services/category-service')

router.get('/', async function(req, res, next) {
  const allCats = await service.getAllCategories();
  res.send(allCats);
});
router.post('/', async function(req, res, next) {
  const newCat = req.body; 
  const createdCat = await service.createCategory(newCat);
  res.status(201).send(createdCat);
});

router.get('/:id', async function(req, res, next) {
  let catId = req.params.id;
  const category = await service.getCategoryById(catId)
  res.send(category);
});

router.delete('/:id', async function(req, res, next) {
  let catId = req.params.id;
  await service.deleteCategory(catId);
  res.status(200).send({});
});

router.put('/:id', async function(req, res, next) {
  let catId = req.params.id;
  let catToBeUpdated = req.body;
  let updatedCat = await service.updateCategory(catId, catToBeUpdated);
  res.status(200).send(updatedCat);
});

module.exports = router;