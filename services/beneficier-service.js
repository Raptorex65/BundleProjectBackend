const beneficierRepo = require('../persistency/beneficier-repository');
//Burasi bir order alani gibi dusunulebilir
//Buradaki is istekleri repository'ye gonderilerek db uzerinden islem yapiliyor
//Repodan islenerek hazir edilen veri router'a(routes) geri gonderiliyor
const createBeneficier = async function(req, res, next) {
try{
    const newBeneficier = req.body; 
    const createdBeneficier = await beneficierRepo.create(newBeneficier);
    res.status(201).send(createdBeneficier);
} catch( error ){
    //console.log(error)
    next(error);
}}  

const getAllBeneficiers = async function(req, res, next) {
try{
    const allBeneficiers = await beneficierRepo.getAll();
    res.send(allBeneficiers);
} catch( error ){
    //console.log(error)
    next(error);
}}

const getBeneficierById = async function(req, res, next) {
    try{
        let beneficierId = req.params.id;
        const beneficier = await beneficierRepo.findById(beneficierId);
        res.send(beneficier);    
    } catch( error ){
        //console.log(error)
        next(error);
    }}
    
const deleteBeneficier = async function(req, res, next) {
    try {
        let beneficierId = req.params.id;
        await beneficierRepo.remove(beneficierId);
        res.json({ message: "Post deleted successfully." });
} catch( err ){
    console.error(err.message);
    res.status(500).send('Server Error');
}}  

const updateBeneficier = async function(req, res, next) {
    try{
        let beneficierId = req.params.id;
        let beneficierToBeUpdated = req.body;
        let updatedBeneficier = await beneficierRepo.updateById(beneficierId, beneficierToBeUpdated);
        res.status(200).send(updatedBeneficier);    
    } catch( error ){
        //console.log(error)
        next(error);
    }}  
      

module.exports = {createBeneficier, deleteBeneficier, getAllBeneficiers, 
    getBeneficierById, updateBeneficier};


