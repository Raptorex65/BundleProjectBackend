router.post('/', async function(req, res, next) {
  const newItem = req.body; 
  const createNewItem = await service.createItem(newItem);
  res.status(201).send(createNewItem);
});

const itemService = require('../services/item-service') 
const createItem = async(newItem) => {
    return await itemRepo.create(newItem)
}
const itemRepo = require('../persistency/item-repository');
const create = async(newItem) => {
    return await db.item.create(newItem);
}
const db = require('../util/sequelize-db.js');


