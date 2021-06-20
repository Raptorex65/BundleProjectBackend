const express = require('express');
const router = express.Router();

const {
  createBeneficier,
  getAllBeneficiers,
  getBeneficierById, 
  deleteBeneficier, 
  updateBeneficier } = require('../services/beneficier-service')

router.post('/', createBeneficier);
router.get('/', getAllBeneficiers);
router.get('/:id', getBeneficierById);
router.delete('/:id', deleteBeneficier);
router.put('/:id', updateBeneficier);

module.exports = router;