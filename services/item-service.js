const itemRepo = require('../persistency/item-repository');
//Burasi bir order alani gibi dusunulebilir
//Buradaki is istekleri repository'ye gonderilerek db uzerinden islem yapiliyor
//Repodan islenerek hazir edilen veri router'a(routes) geri gonderiliyor
const createItem = async(newItem) => {
    return await itemRepo.create(newItem);
}

const deleteItem = async(pId) => {
    return await itemRepo.remove(pId);
}

const getAllItems = async() => {
    return await itemRepo.getAll();
}

const getItemById = async(pId) => {
    return await itemRepo.findById(pId);
}

const updateItem = async(pId, itemToBeUpdated) => {
    let item = await itemRepo.updateById(pId, itemToBeUpdated);
    return item;
}

module.exports = {createItem, deleteItem, getAllItems, 
    getItemById, updateItem};


