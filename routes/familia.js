const { Router } = require('express');
const router = Router();

const { createFam, getFams, getFam, deleteFam, updateFam} = require('../controllers/controllers_produccion/familia.controller')


router.route('/')
    .post(createFam)
    .get(getFams);

router.route('/:id')
    .get(getFam)
    .delete(deleteFam)
    .put(updateFam)



module.exports = router